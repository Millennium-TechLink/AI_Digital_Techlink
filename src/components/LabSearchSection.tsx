import { useState, useEffect, useMemo, useRef } from 'react';
import { FlaskConical, ArrowRight } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import local data
import labsData from '../data/labs.json';

// Fix for default marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const LabSearchSection = () => {
  // ---------------- REFS ----------------
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markerLayer = useRef<L.LayerGroup | null>(null);
  const markerMap = useRef<Map<string, L.Marker>>(new Map());

  // ---------------- STATE ----------------
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([]);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  // ---------------- EFFECTS ----------------
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (capabilitiesRef.current && !capabilitiesRef.current.contains(event.target as Node)) {
        setIsCapabilitiesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ---------------- DATA ----------------
  const testCapabilities = [
    "EMC", "Safety", "Environmental", "Functional Safety",
    "Chemical", "Mechanical", "Electrical", "Optical",
    "Thermal", "Acoustic", "Vibration", "RF & Wireless"
  ];

  const states = useMemo(() => {
    const s = new Set<string>();
    labsData.forEach((lab: any) => { if (lab.state) s.add(lab.state.trim()); });
    return Array.from(s).sort();
  }, []);

  const cities = useMemo(() => {
    const c = new Set<string>();
    labsData.forEach((lab: any) => {
      if (!selectedState || lab.state === selectedState) {
        if (lab.city) c.add(lab.city.trim());
      }
    });
    return Array.from(c).sort();
  }, [selectedState]);

  const filteredLabs = useMemo(() => {
    const norm = (v: string) => (v || '').toLowerCase().trim();
    return labsData.filter((lab: any) => {
      const countryMatch = !selectedCountry || norm(lab.country) === norm(selectedCountry);
      const stateMatch = !selectedState || norm(lab.state) === norm(selectedState);
      const cityMatch = !selectedCity || norm(lab.city) === norm(selectedCity);
      const capabilityMatch =
        selectedCapabilities.length === 0 ||
        selectedCapabilities.every(reqCap =>
          lab.capabilities && lab.capabilities.split(',').some((labCap: string) => norm(labCap) === norm(reqCap))
        );
      return countryMatch && stateMatch && cityMatch && capabilityMatch;
    });
  }, [selectedCountry, selectedState, selectedCity, selectedCapabilities]);

  // ---------------- HANDLERS ----------------
  const handleLabClick = (lab: any) => {
    if (!mapInstance.current || !lab.latitude || !lab.longitude) return;

    const lat = parseFloat(lab.latitude);
    const lng = parseFloat(lab.longitude);

    // Pan and zoom to lab
    mapInstance.current.flyTo([lat, lng], 15, { duration: 1.5 });

    // Find marker and open popup
    const marker = markerMap.current.get(lab.id);
    if (marker) {
      marker.openPopup();
    }
  };

  useEffect(() => { setSelectedCity(''); }, [selectedState]);

  // ---------------- VANILLA LEAFLET INIT ----------------
  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Initialize map
    mapInstance.current = L.map(mapRef.current).setView([22.5, 78.9], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapInstance.current);

    markerLayer.current = L.layerGroup().addTo(mapInstance.current);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // ---------------- MARKER REFRESH ----------------
  useEffect(() => {
    if (!mapInstance.current || !markerLayer.current) return;

    // Clear old markers and references
    markerLayer.current.clearLayers();
    markerMap.current.clear();

    // Add new markers (cap to 100 for performance/initial load)
    const activeLabs = filteredLabs.slice(0, 100);
    const bounds: L.LatLngExpression[] = [];

    activeLabs.forEach((lab: any) => {
      if (lab.latitude && lab.longitude) {
        const lat = parseFloat(lab.latitude);
        const lng = parseFloat(lab.longitude);
        
        // Escape single quotes for the inline onClick handler

        // Define SVG strings directly to use in innerHTML
        const starIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
        const pinIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
        const mailIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
        const phoneIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;

        // Build premium popup HTML exactly like the screenshot
        const popupHTML = `
          <div class="p-1 min-w-[260px] max-w-[280px]">
            <div class="flex justify-between items-start mb-3 gap-3">
              <h4 class="font-bold text-gray-900 text-xs leading-tight uppercase" style="word-break: break-word;">${lab.lab_name}</h4>
              <div class="flex flex-col items-center gap-1 shrink-0">
                <div class="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded shadow-sm text-center border border-green-100 flex flex-col items-center justify-center leading-none">
                  <span class="text-[11px]">${lab.ai_match_score || 91}%</span>
                  <span class="text-[8px] uppercase mt-0.5">Match</span>
                </div>
                <div class="flex items-center gap-1 text-amber-500 mt-1">
                  ${starIcon}
                  <span class="text-xs font-bold leading-none">${lab.rating || 4.2}</span>
                </div>
              </div>
            </div>
            
            <p class="text-[11px] text-gray-500 flex items-center gap-1.5 mb-3">
              <span class="text-gray-400 shrink-0">${pinIcon}</span>
              ${lab.city}, ${lab.state}
            </p>
            
            <p class="text-[11px] text-blue-600 font-mono mb-3">
              ID: ${lab.nabl_id || 'N/A'}
            </p>

            <p class="text-[10px] text-blue-600 flex items-center gap-1.5 mb-2 min-w-0">
              <span class="text-[#987dd3] shrink-0">${mailIcon}</span>
              <a href="mailto:${lab.contact_email}" class="hover:underline truncate">${lab.contact_email || 'Contact Info Unavailable'}</a>
            </p>
            
            <p class="text-[10px] text-blue-600 flex items-center gap-1.5 mb-4">
              <span class="text-[#e23c7c] shrink-0">${phoneIcon}</span>
              ${lab.contact_mobile || 'N/A'}
            </p>

            <div class="flex gap-2 mb-2">
              <button 
                class="w-full py-2 bg-[#2b64f5] hover:bg-blue-700 text-white rounded-[4px] text-xs font-bold transition-colors"
                style="border: none; cursor: pointer;"
              >
                Details
              </button>
            </div>
            <button 
              onclick="window.location.href='http://localhost:5173/workspaces'"
              class="w-full flex items-center justify-center gap-1 py-1.5 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 rounded-[4px] text-xs font-bold transition-colors"
              style="cursor: pointer;"
            >
              Explore more
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" class="text-gray-500" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        `;

        const marker = L.marker([lat, lng])
          .bindPopup(popupHTML, { maxWidth: 300, minWidth: 260 });

        markerLayer.current?.addLayer(marker);
        markerMap.current.set(lab.id, marker);
        bounds.push([lat, lng]);
      }
    });

    // Fit bounds or fly to national view based on results
    if (bounds.length > 1) {
      mapInstance.current.flyToBounds(L.latLngBounds(bounds), {
        padding: [50, 50],
        maxZoom: 12, // More zoomed out at state level for better context
        duration: 2 // Slightly slower for smooth perception
      });
    } else if (bounds.length === 1) {
      mapInstance.current.flyTo(bounds[0] as L.LatLngExpression, 12, { duration: 2 });
    } else {
      // National overview if no results or reset
      mapInstance.current.flyTo([22.5, 78.9], 5, { duration: 2 });
    }
  }, [filteredLabs]);

  return (
    <>
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center justify-center text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              The Right Lab, <span className="text-blue-600">Right Now.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Pinpoint world-class testing facilities tailored to your specific compliance
              and reliability requirements in seconds.
            </p>
          </div>

          {/* Filters Area */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Country</label>
                <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="w-full p-3 bg-gray-50 border rounded-2xl">
                  <option value="India">India</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">State</label>
                <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className="w-full p-3 bg-gray-50 border rounded-2xl">
                  <option value="">All States</option>
                  {states.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">City</label>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="w-full p-3 bg-gray-50 border rounded-2xl">
                  <option value="">All Cities</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div ref={capabilitiesRef} className="space-y-2 relative">
                <label className="text-sm font-bold text-gray-700">Capabilities</label>
                <div 
                  onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                  className="w-full p-3 bg-gray-50 border rounded-2xl cursor-pointer flex justify-between items-center"
                >
                  <span className="text-gray-600">
                    {selectedCapabilities.length === 0 ? "Select..." : `${selectedCapabilities.length} Selected`}
                  </span>
                  <svg className={`w-4 h-4 transition-transform ${isCapabilitiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                {isCapabilitiesOpen && (
                  <div className="absolute top-full left-0 w-full bg-white border rounded-2xl shadow-2xl z-50 p-2 mt-2 max-h-64 overflow-y-auto animate-in fade-in zoom-in duration-200">
                    {testCapabilities.map(cap => (
                      <label key={cap} className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer rounded-xl transition-colors">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={selectedCapabilities.includes(cap)}
                          onChange={(e) => {
                            e.stopPropagation();
                            setSelectedCapabilities(p => p.includes(cap) ? p.filter(x => x !== cap) : [...p, cap]);
                          }} 
                        />
                        <span className="text-sm text-gray-600 font-medium">{cap}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Map Container (Vanilla) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[32px] border border-gray-100 shadow-2xl overflow-hidden h-[600px] relative">
                <div ref={mapRef} style={{ height: '100%', width: '100%', zIndex: 1 }} />
              </div>
            </div>

            {/* Labs List */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Recommended Labs ({filteredLabs.length})</h3>
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredLabs.slice(0, 20).map((lab: any) => (
                  <div key={lab.id} className="p-4 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-md cursor-pointer transition-all group" onClick={() => handleLabClick(lab)}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"><FlaskConical className="w-5 h-5 text-gray-400" /></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-gray-900 truncate" title={lab.lab_name}>{lab.lab_name}</h4>
                        <p className="text-[10px] text-gray-500">{lab.city}, {lab.state}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => window.location.href = 'http://localhost:5173/workspaces'}
              className="px-8 py-4 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              Explore more on our AI Platform
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default LabSearchSection;
