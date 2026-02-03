import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { productData } from '../data/productsData'
import SEO from '../components/SEO'
import { breadcrumbSchema, productSchema } from '../utils/structuredData'

const ProductDetailPage = () => {
    const { productSlug } = useParams<{ productSlug: string }>()
    const product = productData.find((p) => p.slug === productSlug)

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900">Product Not Found</h1>
                    <Link to="/products" className="text-primary-600 hover:text-primary-700 font-medium">
                        Back to Products
                    </Link>
                </div>
            </div>
        )
    }

    const relatedProducts = productData
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3)

    const breadcrumbs = breadcrumbSchema([
        { name: 'Home', url: 'https://www.techlink.com/' },
        { name: 'Products', url: 'https://www.techlink.com/products' },
        { name: product.name, url: `https://www.techlink.com/products/${product.slug}` }
    ])

    const productLd = productSchema({
        name: product.name,
        description: product.shortDescription || product.longDescription || product.name,
        image: product.image,
        url: `https://www.techlink.com/products/${product.slug}`,
        sku: product.id?.toString() || ''
    })

    return (
        <>
            <SEO
                title={product.name}
                description={product.shortDescription || `Learn more about ${product.name}`}
                image={product.image}
                url={`/products/${product.slug}`}
                type="product"
                structuredData={[breadcrumbs, productLd]}
            />

            <main className="min-h-screen pt-24 pb-12 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="mb-8 text-sm" aria-label="Breadcrumb">
                        <ol className="list-none p-0 inline-flex items-center">
                            <li className="flex items-center">
                                <Link to="/" className="text-gray-500 hover:text-primary-600 transition-colors">
                                    Home
                                </Link>
                                <ChevronRight className="mx-2 text-gray-400 w-4 h-4" />
                            </li>
                            <li className="flex items-center">
                                <Link to="/products" className="text-gray-500 hover:text-primary-600 transition-colors">
                                    Products
                                </Link>
                                <ChevronRight className="mx-2 text-gray-400 w-4 h-4" />
                            </li>
                            <li>
                                <span className="text-gray-900 font-medium">{product.name}</span>
                            </li>
                        </ol>
                    </nav>

                    {/* Product Hero */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="text-left">
                            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2 block">
                                {product.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
                            <p className="text-lg text-gray-600 max-w-xl mb-6">
                                {product.shortDescription ||
                                    `Detailed information about our ${product.name}.`}
                            </p>
                            {product.partNumbers && (
                                <p className="mt-4 text-sm text-gray-500">
                                    <span className="font-bold text-gray-700">Part numbers:</span> {product.partNumbers}
                                </p>
                            )}
                            <Link
                                to="/contact"
                                className="mt-8 inline-block bg-primary-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-primary-700 transition duration-300 shadow-md hover:shadow-lg"
                            >
                                Request a Quote
                            </Link>
                        </div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* Details Section */}
                    {(product.longDescription || (product.features && product.features.length > 0) || (product.applications && product.applications.length > 0)) && (
                        <section className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-md mb-20">
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                <div className="space-y-4 text-gray-600">
                                    {product.longDescription && (
                                        <>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                                            <div className="whitespace-pre-line leading-relaxed mb-8">{product.longDescription}</div>
                                        </>
                                    )}
                                </div>

                                <div className="space-y-8">
                                    {product.features && product.features.length > 0 && (
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                                            <ul className="space-y-2 text-gray-600">
                                                {product.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <div className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {product.applications && product.applications.length > 0 && (
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Applications</h2>
                                            <ul className="space-y-2 text-gray-600">
                                                {product.applications.map((app, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <div className="mr-2 mt-1.5 w-1.5 h-1.5 bg-secondary-500 rounded-full flex-shrink-0" />
                                                        <span>{app}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Sub Products */}
                    {product.subProducts && product.subProducts.length > 0 && (
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Product Variants</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {product.subProducts.map((sub, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
                                    >
                                        <div className="aspect-w-16 aspect-h-9 bg-gray-50 p-4">
                                            <img src={sub.image} alt={sub.name} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{sub.name}</h3>
                                            <p className="text-gray-600 text-sm mb-4">{sub.description}</p>
                                            {sub.link && (
                                                <a href={sub.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                                                    View Details <ArrowRight className="ml-1 w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Sections (for Complex Products like RF Enclosures) */}
                    {product.sections && product.sections.length > 0 && (
                        <div className="space-y-24 mb-20">
                            {product.sections.map((section, index) => (
                                <section key={index}>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{section.title}</h2>
                                    {section.description && <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">{section.description}</p>}

                                    {section.subProducts && (
                                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                            {section.subProducts.map((sub, idx) => (
                                                <div key={idx} className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center">
                                                    <img src={sub.image} alt={sub.name} className="mx-auto h-40 object-contain mb-4" />
                                                    <h3 className="text-xl font-bold text-gray-900">{sub.name}</h3>
                                                    <p className="text-gray-600 mt-2">{sub.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {section.gallery && (
                                        <div className="grid sm:grid-cols-2 gap-8 mt-8">
                                            {section.gallery.map((img, idx) => (
                                                <div key={idx} className="rounded-xl overflow-hidden shadow-md">
                                                    <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>
                    )}

                    {/* Gallery */}
                    {product.gallery && product.gallery.length > 0 && (
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{product.galleryTitle || 'Gallery'}</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {product.gallery.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        className="rounded-xl overflow-hidden shadow-lg border border-gray-100"
                                    >
                                        <img src={item.src} alt={item.alt} className="w-full h-auto" />
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Specifications */}
                    {product.specifications && product.specifications.length > 0 && (
                        <section className="mb-20">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specifications</h2>
                            <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 text-gray-700 font-semibold uppercase text-sm">
                                        <tr>
                                            <th className="px-6 py-4">Parameter</th>
                                            <th className="px-6 py-4">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {product.specifications.map((spec, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 font-medium text-gray-900">{spec.param}</td>
                                                <td className="px-6 py-4 text-gray-600">{spec.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}

                    {/* Related */}
                    {relatedProducts.length > 0 && (
                        <section className="pt-20 border-t border-gray-200">
                            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Products</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedProducts.map((related) => (
                                    <Link key={related.id} to={`/products/${related.slug}`} className="group">
                                        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                                            <div className="relative h-48 bg-gray-50 p-4">
                                                <img src={related.image} alt={related.name} className="w-full h-full object-contain" />
                                                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-primary-700 shadow-sm border border-gray-100">
                                                    {related.category}
                                                </span>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                                    {related.name}
                                                </h3>
                                                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{related.shortDescription}</p>
                                                <span className="text-primary-600 font-medium mt-auto flex items-center">
                                                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                </div>
            </main>
        </>
    )
}

export default ProductDetailPage
