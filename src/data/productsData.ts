import { Product } from '../types'

const generateSlug = (name: string) => {
    return name
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}

export const productData: Product[] = [
    {
        id: 1,
        name: 'Scanphone',
        category: 'New',
        image: '/Images/Products/New/Scanphone/scanphone.webp',
        slug: generateSlug('Scanphone'),
        shortDescription:
            'A revolutionary device that provides a direct electromagnetic mapping system in augmented reality.',
        longDescription:
            'Autonomous and easy to use, the Scanphone is a low-cost, high-resolution solution for 2D or 3D visualization of emissions.',
        features: [
            'Direct electromagnetic mapping in augmented reality.',
            'Autonomous and easy to use.',
            'Low cost, high resolution.',
            'Removable sensors (50 Hz - 7 GHz).',
            'Exporting data in XML format.',
            '2D or 3D visualization.',
        ],
        applications: [
            'Rapid EMC/EMI troubleshooting',
            'Visualization of emissions from circuit boards',
            'Produce 3D graphics of EMI for collaboration',
            'Check for RF leakage from joints and gaskets',
            'Verify shielding effectiveness of enclosures',
            'Evaluate and compare emissions performance',
        ],
        gallery: [
            { src: '/Images/Products/New/Scanphone/scanphone 2.webp', alt: '3D visualization of EMI from Scanphone' },
            { src: '/Images/Products/New/Scanphone/scanphone 3.webp', alt: 'Scanphone checking for RF leakage' },
        ],
        galleryTitle: 'In Action',
    },
    {
        id: 2,
        name: 'EM-ISight',
        category: 'New',
        image: '/Images/Products/New/Em-ISight/em-isight.webp',
        slug: generateSlug('EM-ISight'),
        shortDescription:
            'An automated solution for many technologies as it supports design, development and certification of electronics.',
        longDescription:
            'By evaluating the near-field of a given device, EM-ISight can help to identify the source of problems and our far-field approximation software feature compliments existing test methods. Additional modules like the USA enhance the ability to evaluate both emission and susceptibility.',
        features: [
            '10 kHz - 40 GHz frequency range',
            'High resolution scan (0.02mm)',
            'Coarse scan function (>10mm)',
            'Dynamic touch detection',
            '4D Measurements using X, Y, Z and PHI movements',
            'Complete distribution presented in 3D or 4D plot',
            'Source direction plots (vector)',
            'Customizable reports automatically exported to MS Word',
            '5 or 6 Axis Articulated Robotic System Options',
        ],
        applications: [
            'Integrated Circuit/Printed Circuit Board',
            'Wireless modules',
            'De-Sense testing (receiver circuits)',
            'Medical devices',
            'Automotive and aviation',
            'Electronic device emissions',
            'Pre-Compliance testing',
            'Quality control/audit',
            'Cell phone/computer devices',
        ],
    },
    {
        id: 3,
        name: 'Antennas',
        category: 'New',
        image: '/Images/Products/New/Antennas/active-loop-antennas.webp',
        slug: generateSlug('Antennas'),
        shortDescription:
            'A comprehensive range of high-performance antennas for emissions testing, immunity testing, and other EMC applications.',
        subProducts: [
            {
                name: 'Active Loop Antennas',
                description:
                    'We engineered Com-Power AL-130R Active Loop Antennas for emissions testing for the range of 9 kHz to 30 MHz. With its remote access, you can monitor and control the antenna from as far as 30 mtrs.',
                image: '/Images/Products/New/Antennas/active-loop-antennas.webp',
                link: 'https://www.com-power.com/products/antennas/active-loop-antennas',
            },
            {
                name: 'Active Monopole Antennas',
                description:
                    'Com-Power Active Monopole (or rod) Antenna is designed exclusively for use as an EMI test antenna, typically in a shielded or screened room. Ideal for determining compliance with MIL-STD-461 or DO-160 standards, it features a frequency range of 9 kHz.',
                image: '/Images/Products/New/Antennas/active-monopole-antennas.webp',
                link: 'https://www.com-power.com/products/antennas/active-monopole-antennas',
            },
            {
                name: 'Biconical Antennas',
                description:
                    'Com-Power biconical antennas are ideal for vertical and horizontal normalized site attenuation (NSA) measurements, as well as for emissions and immunity testing to a wide range of FCC, CISPR, EN and other standards.',
                image: '/Images/Products/New/Antennas/biconical-antennas.webp',
                link: 'https://www.com-power.com/products/antennas/biconical-antennas',
            },
            {
                name: 'Combilog Antennas',
                description:
                    'The Com-Power AC-220 CombiLog Antenna is optimized for radiated emission and immunity testing. Combining biconical and log technologies, it can reduce testing time by as much as 30%.',
                image: '/Images/Products/New/Antennas/combilog-antennas.webp',
                link: 'https://www.com-power.com/products/antennas/combilog-antennas',
            },
            {
                name: 'Dipole Antennas',
                description:
                    'Considered a reference antenna for EMI testing, we designed the AD-100 tuned dipole antenna set to American National Standard C63.4 specifications. Use it to calibrate other antennas or for EMI test site calibrations.',
                image: '/Images/Products/New/Antennas/dipole-antennas.webp',
                link: 'https://www.com-power.com/products/antennas/dipole-antennas',
            },
            {
                name: 'Horn Antennas',
                description:
                    'Use Com-Power horn antennas for emissions measurements and immunity testing. We offer both passive and active horn antennas and accessories for EMI testing. All of our horn antennas feature high gain and sensitivity, and our active configurations.',
                image: '/Images/Products/New/Antennas/horn-antennas.webp',
                link: 'https://www.com-power.com/products/antennas/horn-antennas',
            },
            {
                name: 'Log Periodic Antennas',
                description:
                    'Log periodic antennas make excellent EMC broadband test antennas for verifying compliance with worldwide regulatory requirements. Lightweight and compact, but rugged enough for use in any environment, Com-Power products reliably deliver a smooth performance.',
                image: '/Images/Products/New/Antennas/log-periodic-antennas.webp',
                link: 'https://www.com-power.com/products/antennas/log-periodic-antennas',
            },
            {
                name: 'Passive Loop Antennas',
                description:
                    'Com-Power manufactures three passive loop antennas specifically for MIL-STD-461, RE101, radiated emissions, magnetic field; and RS101, radiated susceptibility, magnetic field.',
                image: '/Images/Products/New/Antennas/passive-loop-antennas.webp',
                link: 'https://www.com-power.com/products/antennas/passive-loop-antennas',
            },
            {
                name: 'Van Veen Triple Loop Antenna',
                description:
                    'The ALT-930-2M is a Triple large loop antenna system (LAS) used for magnetic field induced-current measurement in X, Y & Z planes from 9 kHz to 30 MHz as specified in CISPR 16 (EN55015) & CISPR 16-1-4.',
                image: '/Images/Products/New/Antennas/van-veen-triple-loop-antenna.webp',
                link: 'https://www.com-power.com/products/antennas/van-veen-triple-loop-antenna',
            },
        ],
    },
    {
        id: 4,
        name: 'Antenna Kits',
        category: 'New',
        image: '/Images/Products/New/Antenna Kits/ANK-140.webp',
        slug: generateSlug('Antenna Kits'),
        shortDescription:
            'Convenient, all-in-one kits containing the essential antennas and accessories for various EMC testing standards.',
        subProducts: [
            {
                name: 'ANK-140',
                description:
                    '1 GHz to 40 GHz: Com-Power\'s ANK-140 antenna kit covers the frequency range of 1 GHz to 40 GHz. It includes an AH-118 double ridge guide antenna for high-frequency testing applications.',
                image: '/Images/Products/New/Antenna Kits/ANK-140.webp',
                link: 'https://www.com-power.com/products/antenna-kits/ank-140',
            },
            {
                name: 'ANK-310',
                description:
                    'For FCC & CISPR: Com-Power\'s ANK-310 antenna kit covers the frequency range of 30 MHz to 1 GHz. The kit includes a collapsible biconical antenna and log periodic antenna for standard EMC testing.',
                image: '/Images/Products/New/Antenna Kits/ANK-310.webp',
                link: 'https://www.com-power.com/products/antenna-kits/ank-310',
            },
            {
                name: 'ANK-318',
                description:
                    '25 MHz to 18 GHz: Com-Power\'s ANK-318 antenna kit covers the frequency range of 30 MHz to 18 GHz. It has a collapsible biconical and a compact log periodic antenna for extended frequency coverage.',
                image: '/Images/Products/New/Antenna Kits/ANK-318.webp',
                link: 'https://www.com-power.com/products/antenna-kits/ank-318',
            },
            {
                name: 'ANK-910L',
                description:
                    'With LOOP ANTENNA: Com-Power\'s ANK-910L antenna kit, like the ANK-910M kit, covers the frequency range of 9 kHz to 1 GHz. This kit includes an active loop antenna, biconical antenna, and log periodic antenna for comprehensive EMC testing.',
                image: '/Images/Products/New/Antenna Kits/ANK-910L.webp',
                link: 'https://www.com-power.com/products/antenna-kits/ank-910l',
            },
            {
                name: 'ANK-910M',
                description:
                    'DO-160 & MIL-STD: Com-Power\'s ANK-910M antenna kit covers the frequency of 9 kHz to 1 GHz. Like the ANK-310 kit, this kit also includes the active loop antenna, biconical antenna, and log periodic antenna designed for military and aviation standards.',
                image: '/Images/Products/New/Antenna Kits/ANK-910M.webp',
                link: 'https://www.com-power.com/products/antenna-kits/ank-910m',
            },
        ],
    },
    {
        id: 5,
        name: 'EMC EPP mmW Absorbers',
        category: 'EMC',
        image: '/Images/Products/EMC/dmc-epp-mmw-absorbers.webp',
        slug: generateSlug('EMC EPP mmW Absorbers'),
        shortDescription:
            'Ultra-premium high performance Polypropylene mmW Absorbers for 5G and mmW testing shielded cabinets.',
        longDescription:
            'EMC EPP mmW Absorbers are used in Millimeter wave test chambers for frequency range from 1 GHz to 110 GHz. Excellent performance with low height is ideal for small shielding cabinets. EMC Ultra-premium high performance Polypropylene mmW Absorbers are made of molding process and State-of-the-art carbon synthesis process to ensure extremely high uniformity of carbon powder density throughout the absorber. EMC-PP-mmW series millimeter wave absorbers are prefect solution for 5G, mmW testing shielded cabinets.',
        features: [
            'Broadband Frequency Range: 1 GHz to 110 GHz',
            'Power Handling: 1.5 kW/m² or 725 V/m',
            'Fire Retardant (NRL-8093, UL94 HBF, DIN 4102 B2)',
            'Max Service Temp: 100°C',
            'Cleanroom suitable (ISO 14644 Class 5)',
            'Strong mechanical properties',
            '35+ years of electrical performance',
        ],
    },
    {
        id: 6,
        name: 'EMC EPP Microwave Absorbers',
        category: 'EMC',
        image: '/Images/Products/EMC/dmc-epp-hybrid-absorbers-600.webp',
        slug: generateSlug('EMC EPP Microwave Absorbers'),
        shortDescription:
            'Expect the Best from EMC EPP Microwave Absorbers. Unbreakable, Clean test site, 35+ years of electrical performance.',
        longDescription:
            'EMC Ultra-premium high performance Polypropylene Microwave Absorbers are made of molding process and State-of-the-art carbon synthesis process to ensure extremely high uniformity of carbon powder density throughout the absorber. EMC-PP-PY-MI series microwave absorbers provide excellent performance in normal incidence and off angle incidence in Antenna test chambers.',
        features: [
            'Broadband Frequency Range: 80 MHz to 100 GHz',
            'Power Handling: 1.5 kW/m² or 725 V/m',
            'Fire Retardant (NRL-8093, UL94 HBF, DIN 4102 B2)',
            'Max Service Temp: 100°C',
            'Cleanroom suitable (ISO 14644 Class 5)',
            'Strong mechanical properties, almost unbreakable',
            'Plug and pull installation',
            'Guaranteed repeatable performance',
        ],
    },
    {
        id: 7,
        name: 'EMC EPP Hybrid Absorbers',
        category: 'EMC',
        image: '/Images/Products/EMC/dmc-epp-hybrid-absorbers.webp',
        slug: generateSlug('EMC EPP Hybrid Absorbers'),
        shortDescription:
            'Unbreakable, Clean test site, 35+ years performance with excellent impedance matched with ferrite tiles for broadband frequency operation.',
        longDescription:
            'EMC Ultra-premium high performance Polypropylene Hybrid Absorbers are made of molding process and the State-of-the-art carbon synthesis process ensures extremely high uniformity of carbon powder density throughout the absorber. EMC-PP-PY-HY series hybrid absorbers provide excellent performance in normal incidence and off angle incidence in EMI/EMC test chambers.',
        features: [
            'Broadband Frequency Range: 30 MHz to 40 GHz',
            'Power Handling: 1.5 kW/m² or 725 V/m',
            'Fire Retardant (NRL-8093, UL94 HBF, DIN 4102 B2)',
            'Max Service Temp: 100°C',
            'Cleanroom suitable (ISO 14644 Class 5)',
            'Strong mechanical properties, almost unbreakable',
            'Plug and pull installation',
            'Guaranteed repeatable performance',
        ],
    },
    {
        id: 8,
        name: 'EMC Antenna Measurement Systems',
        category: 'EMC',
        image: '/Images/Products/EMC/Antenna/dams-light-to-medium-ams.webp',
        slug: generateSlug('EMC Antenna Measurement Systems'),
        shortDescription:
            'Explore our range of high-performance antenna measurement systems, designed for light to heavy-duty applications.',
        subProducts: [
            {
                name: 'DAMS Light to Medium',
                description:
                    'A low-cost and compact Antenna Measurement solution perfect for smaller scale projects and labs. Models available for 6 GHz, 18 GHz, or 40 GHz.',
                features: [
                    'Dual-axis high-resolution antenna positioner w/ tripod',
                    'USB Interface & DAMS Antenna Measurement Studio',
                    'Two precision SMA measurement cables',
                ],
                image: '/Images/Products/EMC/Antenna/dams-light-to-medium-ams.webp',
            },
            {
                name: 'DAMS Heavy-Duty',
                description:
                    'A complete package with all accessories for robust and demanding measurement tasks, with up to 150 pounds payload capacity!',
                features: [
                    '0 to 360 degree AZ & +/- 90 degree EL',
                    'Dual-axis high-resolution antenna positioner',
                    'Two Precision SMA measurement cables',
                    'Includes DAMS Antenna Measurement Studio Pro',
                ],
                image: '/Images/Products/EMC/Antenna/dams-heavy-duty-ams.webp',
            },
            {
                name: 'SUPER DUTY X250 Series',
                description:
                    'Featuring encoded stepper motors and USB / Serial / IP Control for maximum precision and flexibility in heavy-duty applications, with up to 250 pounds payload capacity!',
                features: [
                    '0 to 360 degree AZ & ± 90 degree EL',
                    '400-pound Capacity Tripod',
                    'Encoded stepper motors',
                    'Two 20-Foot Precision measurement cables',
                    'Antenna Measurement Studio Pro Included',
                ],
                image: '/Images/Products/EMC/Antenna/dams-super-duty-x250.webp',
            },
        ],
    },
    {
        id: 9,
        name: 'EMC Honeycomb Vent',
        category: 'EMC',
        image: '/Images/Products/EMC/dmc-honeycomb-600.webp',
        slug: generateSlug('EMC Honeycomb Vent'),
        shortDescription:
            'High-quality honeycomb vents made of Aluminum, Steel, or Brass for PAN-type and Sandwich-type shielding systems.',
        longDescription:
            'EMC premium quality high performance Honeycomb vents are used in RF and EMI/EMC shielded rooms for ventilation and antenna application. It comes in various thickness and cell diameters.',
        features: [
            'Compliant per MIL-STD 285',
            'Core materials: Stainless Steel, Brass, Copper, or Aluminum',
            'Optional steel, chrome, or tin-plated frames',
            'Core thickness available from 5 mm to 120 mm',
            'Cell diameter from 2.5mm to 8.0mm',
            'Cross-cell vents available for high-level shielding',
            'Customized frame sizes available',
            'Frames with pre-drilled or threaded holes',
            'Standard foil material: Tin-plated steel roll',
            'Cell foil thickness: 0.15 mm',
            'ROHS Compliant',
        ],
        applications: [
            'Cooling, heating and ventilation cutouts in RF rooms',
            'Antenna measurement chambers and shielded cabinets',
            'Outdoor vents that require rainproof, slanted assemblies',
        ],
        specifications: [
            { param: 'Standard Sizes', value: '300x300, 300x600, 450x450, 600x600 mm (custom available)' },
            { param: 'Cell Diameters', value: '1.6, 2.4, 3.2, 4.2, 5.2, 6.35 mm' },
            { param: 'Materials', value: 'Steel, stainless steel, brass, aluminum with optional frames' },
            { param: 'Airflow', value: 'Low-resistance honeycomb core with optional slant design' },
        ],
    },
    {
        id: 10,
        name: 'EMC Semi Anechoic 3Meter EMC Chamber',
        category: 'Anechoic Chambers',
        image: '/Images/Products/Anechoic/dmc-sac-3m.webp',
        slug: generateSlug('EMC Semi Anechoic 3Meter EMC Chamber'),
        shortDescription:
            'A compact, multi-purpose environment for pre-compliance emissions and compliant immunity testing. Ideal for limited space, providing repeatable results with a 3-meter test distance.',
    },
    {
        id: 11,
        name: 'Fully Compliant 3Meter EMC Chamber',
        category: 'Anechoic Chambers',
        image: '/Images/Products/Anechoic/dmc-fac-3m.webp',
        slug: generateSlug('Fully Compliant 3Meter EMC Chamber'),
        shortDescription:
            'A Fully-Anechoic Chamber (FAR) with a 3-meter measurement distance, designed to simulate a free space environment. Ideal for fixed-height pre-compliant radiated emissions (CISPR-16-1-4) and compliant radiated immunity (IEC 61000-4-3) measurements.',
    },
    {
        id: 12,
        name: 'Semi Anechoic 5Meter EMC Chamber',
        category: 'Anechoic Chambers',
        image: '/Images/Products/Anechoic/dmc-sac-5m.webp',
        slug: generateSlug('Semi Anechoic 5Meter EMC Chamber'),
        shortDescription:
            'A multi-functional solution for full compliance testing as per various international EMC regulations, designed for radiated emissions and immunity testing at 3 or 5-meter distances.',
        longDescription:
            'Features a self-standing steel structure, PAN-type modular shielding, and a unique arrangement of Polypropylene hybrid absorbers and ferrite tiles for broadband performance up to 40 GHz.',
    },
    {
        id: 13,
        name: 'Semi Anechoic 10Meter EMC Chamber',
        category: 'Anechoic Chambers',
        image: '/Images/Products/Anechoic/dmc-sac-10m.webp',
        slug: generateSlug('Semi Anechoic 10Meter EMC Chamber'),
        shortDescription:
            'A multifunctional anechoic chamber for commercial, automotive, and military testing at a 10-meter distance with quiet zone options up to 6m.',
        longDescription:
            'This fully compliant chamber features a self-standing steel structure, PAN-type modular shielding, and a unique arrangement of Polypropylene hybrid absorbers with high-performance ferrite tiles for broadband performance up to 40 GHz.',
    },
    {
        id: 14,
        name: 'Antenna Measurement Anechoic Chamber',
        category: 'Anechoic Chambers',
        image: '/Images/Products/Anechoic/antenna-measurement.webp',
        slug: generateSlug('Antenna Measurement Anechoic Chamber'),
        shortDescription:
            'Turnkey antenna measurement systems for testing applications from low-band to sub-millimeter and millimeter wave.',
        longDescription:
            'Adaptable and configurable for military, marine, aerospace, and commercial applications, each facility gives the user a reliable and repeatable testing environment for antenna specification characterization.',
    },
    {
        id: 15,
        name: 'Pyramidal Hybrid Absorber',
        category: 'Standard Absorbers',
        image: '/Images/Products/Standard/pyramid-hybrid-absorber.webp',
        slug: generateSlug('Pyramidal Hybrid Absorber'),
        shortDescription:
            'Premium quality, high-performance Polyurethane (PU) Hybrid absorbers made of carbon-impregnated low-density foam.',
        longDescription:
            'Our PY-HY series absorbers provide excellent performance in normal and off-angle incidence in Anechoic chambers with excellent impedance matching with Ferrite tiles, supporting wide frequency bands up to 40 GHz.',
        partNumbers:
            'DMC-PU-PY-HY-200, DMC-PU-PY-HY-300, DMC-PU-PY-HY-500, DMC-PU-PY-HY-700, DMC-PU-PY-HY-1000',
    },
    {
        id: 16,
        name: 'Pyramidal Microwave Absorber',
        category: 'Standard Absorbers',
        image: '/Images/Products/Standard/pyramid-microwave-absorber.webp',
        slug: generateSlug('Pyramidal Microwave Absorber'),
        shortDescription: 'Premium quality, high-performance Polyurethane (PU) Broadband Microwave absorbers.',
        longDescription:
            'Made of carbon-impregnated low-density Polyurethane foam, our PY-MI series provides excellent performance in normal and off-angle incidence with high power handling to support wide frequency bands up to 100 GHz.',
        partNumbers:
            'DMC-PU-PY-MI-50, DMC-PU-PY-HY-100, DMC-PU-PY-HY-200, DMC-PU-PY-HY-300, DMC-PU-PY-HY-500, DMC-PU-PY-MI-700, DMC-PU-PY-HY-1000, DMC-PU-PY-HY-1200',
    },
    {
        id: 17,
        name: 'Convoluted Microwave Absorber',
        category: 'Standard Absorbers',
        image: '/Images/Products/Standard/convoluted-absorber.webp',
        slug: generateSlug('Convoluted Microwave Absorber'),
        shortDescription:
            'Flexible PU foam absorbers with a convoluted shape, providing desired electrical grading for excellent performance at millimeter wave frequencies and very wide incident angles.',
        partNumbers: 'DMC-CVT-50, DMC-CVT-100',
    },
    {
        id: 19,
        name: 'Polypropylene Hybrid Absorber',
        category: 'High Performance Absorbers',
        image: '/Images/Products/High/polypropylene-hybrid-absorber.webp',
        slug: generateSlug('Polypropylene Hybrid Absorber'),
        shortDescription:
            'High-performance polypropylene-based absorbers covering a wide frequency range, specifically designed for optimal performance at microwave frequencies.',
        longDescription:
            'Highly preferred for Antenna Pattern Measurement (APM), Compact Antenna Test Range (CATR), Radar Cross Section (RCS) and Electronic Warfare Test (EWT) applications.',
        partNumbers: 'DMC-PP-HY-300, DMC-PP-HY-500, DMC-PP-HY-750',
    },
    {
        id: 20,
        name: 'Polypropylene Microwave Absorber',
        category: 'High Performance Absorbers',
        image: '/Images/Products/High/polypropylene-microwave-absorber.webp',
        slug: generateSlug('Polypropylene Microwave Absorber'),
        shortDescription:
            'High-performance polypropylene-based absorbers covering a wide frequency range, specifically designed for optimal performance at microwave frequencies.',
        longDescription:
            'Highly preferred for Antenna Pattern Measurement (APM), Compact Antenna Test Range (CATR), Radar Cross Section (RCS) and Electronic Warfare Test (EWT) applications.',
        partNumbers: 'DMC-PP-MI-300, DMC-PP-MI-500, DMC-PP-MI-750',
    },
    {
        id: 21,
        name: 'Polystyrene Microwave Absorber',
        category: 'High Performance Absorbers',
        image: '/Images/Products/High/polystyrene-absorber.webp',
        slug: generateSlug('Polystyrene Microwave Absorber'),
        shortDescription:
            'High-performance, carbon-loaded polystyrene hybrid absorbers optimized for use with ferrite tiles in EMC chambers.',
        longDescription:
            'Its closed-cell structure provides more stable performance and is hygroscopic, ensuring reliability in various environmental conditions.',
        partNumbers: 'DMC-PS-30, DMC-PS-50, DMC-PS-70',
    },
    {
        id: 22,
        name: 'Flat Absorber',
        category: 'Special Purpose Absorbers',
        image: '/Images/Products/Special/flat-absorber.webp',
        slug: generateSlug('Flat Absorber'),
        shortDescription: 'Lightweight polyurethane flat absorbers with good performance for a variety of RF applications.',
        features: [
            'Lightweight Material',
            'High Performance',
            'Reduces Side Lobes & Improves Front-to-Back Ratio',
            'Absorbs Clutter & Eliminates Interference',
            'Provides Camouflage Appearance',
        ],
        applications: [
            'Military Concealment',
            'Telecommunications',
            'Antenna Installations',
            'Corner Blocks & Area Fills',
            'EMC/RF Testing',
        ],
        specifications: [
            { param: 'Frequency Range', value: '1GHz-40GHz' },
            { param: 'Nominal Thickness', value: '50 mm / 100 mm' },
            { param: 'Base Size', value: '600mm x 600mm' },
            { param: 'Weight', value: '2.8 Kg / 5.2 Kg' },
            { param: 'Power Handling', value: '0.4 W/cm²' },
            { param: 'Temperature Range', value: '-50°C to 150°C' },
            { param: 'Flammability', value: 'UL 94 HBF' },
            { param: 'Material', value: 'Carbon loaded Polyurethane foam' },
        ],
    },
    {
        id: 23,
        name: 'Truncated Absorber',
        category: 'Special Purpose Absorbers',
        image: '/Images/Products/Special/truncated-absorber.webp',
        slug: generateSlug('Truncated Absorber'),
        shortDescription:
            'Foam absorbers for EMC Chambers, designed to provide large working space and resistance against mechanical damage while maintaining excellent low-frequency performance.',
        features: [
            'Optimized for EMC Chambers',
            'Excellent Low-Frequency Performance',
            'Provides Larger Working Space',
            'Resistant to Mechanical Damage',
            'Eliminates Drooping Tips',
            'High-Performance Foam Material',
            'Stable and Durable Construction',
        ],
        applications: [
            'EMC/RF Testing Facilities',
            'Automotive Anechoic Chambers',
            'Aerospace & Defense Testing',
            'Telecommunications Compliance',
            'Consumer Electronics Labs',
        ],
        partNumbers: 'DMC-PU-TR-300, DMC-PU-TR-500, DMC-PU-TR-700, DMC-PU-TR-1000',
    },
    {
        id: 24,
        name: 'Walkway Absorber',
        category: 'Special Purpose Absorbers',
        image: '/Images/Products/Special/walkway-absorber.webp',
        slug: generateSlug('Walkway Absorber'),
        shortDescription:
            'High-density Polypropylene laminate absorbers with excellent load-bearing and wear characteristics, ideal for high-traffic areas in anechoic chambers.',
        features: [
            'Excellent load-bearing capacity for foot traffic and equipment',
            'Durable and wear-resistant surface',
            'Maintains RF absorption performance',
            'High-density Polypropylene laminate finish',
            'Ideal for creating walkways on chamber floors',
            'Broadband frequency range from 30MHz to 40GHz',
        ],
        applications: [
            'EMC test chambers requiring floor absorption',
            'Antenna measurement chambers',
            'High-traffic areas within anechoic environments',
            'Protecting floor absorbers from damage',
        ],
        partNumbers: 'DMC-PP-WW-300, DMC-PP-WW-500',
    },
    {
        id: 25,
        name: 'EMC Ferrite Tiles',
        category: 'Ferrite Tiles',
        image: '/Images/Products/Ferrite/ferrite-tile.webp',
        slug: generateSlug('EMC Ferrite Tiles'),
        shortDescription: 'EMC-FRT Series - 30MHz-1GHz ferrite tiles for hybrid solutions with EMC absorbers.',
        longDescription:
            'EMC Ferrite Tiles deliver high reflectivity performance between 30 MHz and 1 GHz, providing -10.5 dB to -25.9 dB reflection loss in compact 100 x 100 mm formats. Tiles are supplied with the fittings required for rapid installation and can be paired with hybrid foam absorbers for broadband chambers.',
        features: [
            'Reflection loss from -10.5 dB to -25.9 dB across 30 MHz to 1 GHz',
            'Standard 100 x 100 mm tile footprint for predictable layouts',
            'Available thicknesses of 5.2 mm and 6.7 mm',
            'Ships with installation fittings to simplify field builds',
            'Pairs with polyurethane or polypropylene absorbers for hybrid designs',
        ],
        applications: [
            'Hybrid solution with EMC PU and PP-series absorber',
            'EMC/EMI Chambers',
            'Mixed-use test facilities',
            'Low frequency testing',
            'Pre-compliance & full compliance testing',
        ],
        partNumbers: 'EMC-FRT',
        specifications: [
            { param: 'Frequency Range', value: '30 MHz - 1 GHz' },
            { param: 'Reflection Loss', value: '-10.5 dB to -25.9 dB (normal incidence)' },
            { param: 'Tile Size', value: '100 x 100 mm' },
            { param: 'Thickness', value: '5.2 mm or 6.7 mm' },
            { param: 'Installation Kit', value: 'Includes fittings and adhesives' },
        ],
    },
    {
        id: 26,
        name: 'RF Enclosures',
        category: 'Shieldex',
        image: '/Images/Products/Shieldex/Enclosures/5.webp',
        slug: generateSlug('RF Enclosures'),
        shortDescription: 'High-performance, adaptable RF shielding solutions for a wide range of applications.',
        sections: [
            {
                title: 'Standard Sizes',
                subProducts: [
                    {
                        name: 'T-Series',
                        description: '752 x 1362 x 752mm (LxWxH)*',
                        image: '/Images/Products/Shieldex/Enclosures/T-series.webp',
                    },
                    {
                        name: 'P-Series',
                        description: '2390 x 2390 x 2300mm (LxWxH)*',
                        image: '/Images/Products/Shieldex/Enclosures/P-series.webp',
                    },
                ],
            },
            {
                title: 'Industrial Applications',
                description:
                    'Large-scale projects with different construction in suspension and opening mechanisms.',
                gallery: [
                    { src: '/Images/Products/Shieldex/Enclosures/I1.webp', alt: 'Industrial RF Enclosure 1' },
                    { src: '/Images/Products/Shieldex/Enclosures/I2.webp', alt: 'Industrial RF Enclosure 2' },
                ],
            },
            {
                title: 'Ante Chamber Solutions',
                description:
                    'For IT forensics and industrial applications, an Ante Chamber provides a controlled entry point, often combined with ventilation and windows for active work inside the enclosure. Use cases include secure storage and analysis of confiscated IT equipment.',
                gallery: [{ src: '/Images/Products/Shieldex/Enclosures/Ante.webp', alt: 'RF Enclosure with Ante Chamber' }],
            },
            {
                title: 'Scientific Laboratories',
                description:
                    'RF enclosures designed not only to shield from electromagnetic waves, but also environmental influences like dust and bright light. Key features include a high degree of adaptation, excellent shielding effectiveness, and lightweight construction.',
                gallery: [
                    { src: '/Images/Products/Shieldex/Enclosures/S.webp', alt: 'RF Enclosure in a scientific laboratory setting' },
                ],
            },
            {
                title: 'Custom Solutions',
                description:
                    'We provide tailored enclosures for various use cases, including software development, home offices, educational institutes, and test house rentals, ensuring you have the perfect shielded environment for your needs.',
                gallery: [
                    {
                        src: '/Images/Products/Shieldex/Enclosures/C.webp',
                        alt: 'RF Enclosure with wireless router and switch for software development',
                    },
                ],
            },
        ],
    },
    {
        id: 27,
        name: 'RF Curtains',
        category: 'Shieldex',
        image: '/Images/Products/Shieldex/Curtains/18.webp',
        slug: generateSlug('RF Curtains'),
        shortDescription: 'Lamella curtain for RFID tunnels and other shielding applications.',
        longDescription: 'Material: Delinova FR + Shieldex® Nora Dell CR.',
        gallery: [
            { src: '/Images/Products/Shieldex/Curtains/C1.webp', alt: 'RFID Tunnel CAD Model' },
            { src: '/Images/Products/Shieldex/Curtains/C2.webp', alt: 'RFID Tunnel in a working environment' },
        ],
    },
    {
        id: 28,
        name: 'Antenna & OTA Chambers',
        category: 'Anechoic Chambers',
        image: '/Images/Products/Anechoic/antenna-chamber.jpg',
        slug: generateSlug('Antenna & OTA Chambers'),
        shortDescription: 'RF shielded antenna, OTA, RFID, RCS and radome chambers lined with broadband absorbers.',
        longDescription:
            'EMCPIONEER engineers RF shielded enclosures lined with broadband absorbers to cover every antenna test scenario. Dedicated facilities support antenna measurements in the near-field, far-field or compact range, OTA verification aligned to CTIA programs, RFID chip validation, radar cross-section characterization and radome transparency tests.',
        features: [
            'Configurable as antenna, OTA, RFID, RCS or radome chambers',
            'RF shielded construction finished with high performance absorbers',
            'Supports near-field, far-field and compact range antenna measurements',
            'Optimized OTA setups compliant with CTIA and carrier-specific standards',
            'Custom fixtures for RFID chip characterization and RCS targets',
        ],
        applications: [
            'Antenna pattern and gain validation',
            'Over-the-air (OTA) certification for wireless devices',
            'RFID chip antenna property measurements',
            'Radar cross-section (RCS) testing',
            'Radome material transparency verification',
        ],
        specifications: [
            { param: 'Chamber Types', value: 'Antenna, OTA, RFID, RCS, Radome' },
            { param: 'Construction', value: 'Steel RF enclosure with broadband absorber lining' },
        ],
    },
    {
        id: 29,
        name: 'EMC Monitor System',
        category: 'Monitoring Systems',
        image: '/Images/Products/Monitoring/emc-monitor-system.png',
        slug: generateSlug('EMC Monitor System'),
        shortDescription: 'Remote PTZ camera system designed for shielded rooms without adding EMC noise.',
        longDescription:
            'The EMC monitor system allows engineers to supervise anechoic chambers and shielded rooms from the control room. The camera delivers high immunity to electromagnetic interference so the video feed remains stable during demanding EMC tests.',
        features: [
            'Remote controlled pan and tilt',
            'Remote focus adjustment',
            'Remote zoom control',
            'Automatic white balance for consistent imagery',
            'High immunity to EMC noise inside shielded rooms',
        ],
        applications: [
            'Live monitoring of anechoic chambers',
            'Shielded room safety surveillance',
            'Remote observation of high power EMC tests',
        ],
    },
    {
        id: 30,
        name: 'Modular EMC Test Chambers',
        category: 'Anechoic Chambers',
        image: '/Images/Products/Anechoic/emc-chamber.jpg',
        slug: generateSlug('Modular EMC Test Chambers'),
        shortDescription: 'Scalable 1 m to 10 m EMC chambers engineered for radiated emissions and immunity.',
        longDescription:
            'EMCPIONEER designs, manufactures and installs semi-anechoic and compact EMC chambers lined with ferrite tile and hybrid absorbers. Systems meet CISPR, IEC/EN, MIL-STD-461, RTCA DO-160 and customer driven specifications for pre-compliance or full-compliance programs.',
        features: [
            '1 m, 3 m, 5 m and 10 m semi-anechoic chambers',
            'Compact chamber and free space chamber options',
            'Solutions tailored to MIL-STD and aerospace programs',
            'PAN type modular shielding with broadband absorber lining',
        ],
        applications: [
            'Radiated emissions testing',
            'Radiated immunity testing',
            'Automotive, avionics and defense qualification',
            'Pre-compliance verification for electronics',
        ],
    },
    {
        id: 31,
        name: 'HEMP Filters',
        category: 'EMI Filters',
        image: '/Images/Products/EMIFilters/hemp-filter.jpg',
        slug: generateSlug('HEMP Filters'),
        shortDescription: 'High-current EMP and HEMP filters delivering up to 100 dB shielding through 10 GHz.',
        longDescription:
            'HEMP filters protect communication lines and equipment from high altitude electromagnetic pulse events. Each assembly is rated for DC to 60 Hz operation, fitted with high energy transient suppressors and built for critical national infrastructure.',
        features: [
            'Current handling from 16 A to 2500 A',
            'Meets MIL-STD-188-125 parts 1 and 2 plus DEF STAN 59-188 parts 1 and 2',
            'CE certified and RoHS compliant construction',
            'Ideal for electrical, aerospace and military platforms',
            'Custom specifications available for unique layouts',
        ],
        specifications: [
            { param: 'Shielding Effectiveness', value: 'Up to 100 dB through 10 GHz' },
            { param: 'Frequency', value: 'DC - 60 Hz' },
            { param: 'Standards', value: 'MIL-STD-188-125, DEF STAN 59-188' },
        ],
    },
    {
        id: 32,
        name: 'Power Line Filters',
        category: 'EMI Filters',
        image: '/Images/Products/EMIFilters/power-line-filter.jpg',
        slug: generateSlug('Power Line Filters'),
        shortDescription: 'High-attenuation power entry filters for shield rooms, EMC chambers and RF cabinets.',
        longDescription:
            'Shield room filters prevent external electromagnetic interference from coupling into critical power circuits. Units ship with the mounting hardware and instructions required for direct installation onto shielding walls.',
        features: [
            'Rated for DC - 60 Hz operation with optional 400 Hz versions',
            'Shielding effectiveness up to 100 dB through 40 GHz',
            'CE, RoHS and UL certified assemblies',
            'Delivered with fixing screws, brass mesh, waveguide and flange gasket',
            'Custom current ratings and connector layouts available',
        ],
        applications: [
            'Shield room and EMC chamber power entry points',
            'MRI rooms and antenna chambers',
            'RF shield boxes and EMC cabinets',
        ],
    },
    {
        id: 33,
        name: 'Signal Line Filters',
        category: 'EMI Filters',
        image: '/Images/Products/EMIFilters/signal-line-filter.jpg',
        slug: generateSlug('Signal Line Filters'),
        shortDescription: 'Broadband filters for telephone, data, control and alarm circuits routed through shielded enclosures.',
        longDescription:
            'Signal line filters maintain shielding performance while letting low level communication, fire alarm, ethernet and control signals enter or exit EMI/EMC chambers. Units are easy to install and can be tailored to specific protocols.',
        features: [
            'Multiple specifications for telephone, data and control systems',
            'Simple bulkhead installation',
            'CE and RoHS compliant layouts',
            'Custom pin counts and performance options available',
        ],
        applications: [
            'Telephone and data communications',
            'Fire alarm and building control interfaces',
            'Ethernet, CAN, RS-485 and other shielded room penetrations',
        ],
    },
    {
        id: 34,
        name: 'Fingerstock Gaskets',
        category: 'Shielding Accessories',
        image: '/Images/Products/Shielding/fingerstock-gasket.jpg',
        slug: generateSlug('Fingerstock Gaskets'),
        shortDescription: 'Beryllium copper fingerstock strips for high-cycle RF sealing of doors and panels.',
        longDescription:
            'Fingerstock gaskets deliver excellent conductivity and spring properties for openings that require frequent access. Standard lengths can be cut and plated to match the host enclosure, with multiple mounting options available.',
        features: [
            'Mounting options include stick-on, snap-on, clip-on and rivet styles',
            'Plating options such as tin, nickel, silver and gold',
            'Manufactured from beryllium copper or stainless steel',
        ]
    }
]
