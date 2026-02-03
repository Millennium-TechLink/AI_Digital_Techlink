export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TechLink",
    "url": "https://www.techlink.com",
    "logo": "/Images/logo.png",
    "description": "Leading provider of technology solutions.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": "English"
    },
    "sameAs": []
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }))
})

export const productSchema = (product: {
    name: string
    description: string
    image: string
    url: string
    sku?: string
    brand?: string
}) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "url": product.url,
    "sku": product.sku || product.name,
    "brand": {
        "@type": "Brand",
        "name": product.brand || "TechLink"
    }
})

export const itemListSchema = (items: Array<{ name: string; description?: string; url: string; image?: string; position: number }>) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item) => ({
        "@type": "ListItem",
        "position": item.position,
        "url": item.url,
        "image": item.image,
        "name": item.name,
        "description": item.description
    }))
})
