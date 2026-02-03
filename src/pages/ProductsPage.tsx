import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { productData } from '../data/productsData'
import SEO from '../components/SEO'
import { breadcrumbSchema, itemListSchema } from '../utils/structuredData'

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All')

    const categories = ['All', ...new Set(productData.map((product) => product.category))]

    const filteredProducts =
        selectedCategory === 'All'
            ? productData
            : productData.filter((product) => product.category === selectedCategory)

    // Structured Data
    const breadcrumbs = breadcrumbSchema([
        { name: 'Home', url: 'https://www.techlink.com/' },
        { name: 'Products', url: 'https://www.techlink.com/products' }
    ])

    const itemList = itemListSchema(
        filteredProducts.map((product, index) => ({
            name: product.name,
            description: product.shortDescription,
            url: `https://www.techlink.com/products/${product.slug}`,
            image: product.image,
            position: index + 1
        }))
    )

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <>
            <SEO
                title="Our Products - TechLink"
                description="Explore our range of high-performance testing equipment, including anechoic chambers, absorbers, and antennas."
                url="/products"
                structuredData={[breadcrumbs, itemList]}
            />
            <div className="min-h-screen pt-24 pb-12 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Products</h1>
                        <p className="text-xl text-gray-600">
                            High-quality testing equipment and solutions for your laboratory needs.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                        ? 'bg-primary-600 text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={selectedCategory} // Re-animate on category change
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                variants={itemVariants}
                                layoutId={`product-${product.id}`}
                            >
                                <Link to={`/products/${product.slug}`} className="group h-full block">
                                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                        <div className="relative aspect-[4/3] bg-gray-50 p-6 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white/90 backdrop-blur text-primary-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-gray-100">
                                                    {product.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                                                {product.shortDescription}
                                            </p>
                                            <div className="mt-auto flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                                                View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No products found in this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductsPage
