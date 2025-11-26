import { Head } from '@inertiajs/react';

interface SeoProps {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
}

export default function Seo({
    title,
    description = '',
    keywords = '',
    image,
    url,
    type = 'website',
    twitterCard = 'summary_large_image',
}: SeoProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={url} />}

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
        </Head>
    );
}
