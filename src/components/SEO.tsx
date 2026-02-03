import { Helmet } from 'react-helmet-async'

type SEOProps = {
    title?: string
    description?: string
    keywords?: string
    image?: string
    url?: string
    type?: string
    structuredData?: object | object[]
}

const DEFAULT_TITLE = 'TechLink - Advanced Technology Solutions'
const DEFAULT_DESCRIPTION =
    'TechLink provides cutting-edge technology solutions including EMC testing equipment, antennas, and RF enclosures.'
const DEFAULT_KEYWORDS =
    'technology solutions, EMC testing, antennas, RF enclosures, shielding, techlink'
const DEFAULT_IMAGE = '/Images/logo.png' // Placeholder, should be updated
const SITE_URL = 'https://www.techlink.com' // Placeholder

function buildCanonicalUrl(path?: string): string {
    if (!path) return SITE_URL
    if (path.startsWith('http')) return path
    return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export default function SEO({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    image = DEFAULT_IMAGE,
    url,
    type = 'website',
    structuredData,
}: SEOProps) {
    const fullTitle = title.includes('TechLink') ? title : `${title} | TechLink`
    const canonicalUrl = buildCanonicalUrl(url)

    const structuredDataArray: object[] = Array.isArray(structuredData)
        ? structuredData
        : structuredData
            ? [structuredData]
            : []

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {structuredDataArray.map((data, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(data)}
                </script>
            ))}
        </Helmet>
    )
}
