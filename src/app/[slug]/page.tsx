import React from 'react'
import { notFound } from 'next/navigation'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { LANDING_PAGES } from '@/data/landing-pages'
import { Metadata } from 'next'

interface Props {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const pageData = LANDING_PAGES.find(p => p.slug === slug)

    if (!pageData) {
        return {
            title: 'Taxi Driver 10 - Troyes & Agglomération',
            description: 'Votre chauffeur de taxi privé à Troyes et ses environs.'
        }
    }

    return {
        title: pageData.metaTitle,
        description: pageData.metaDescription,
    }
}

export async function generateStaticParams() {
    return LANDING_PAGES.map((page) => ({
        slug: page.slug,
    }))
}

const LandingPage = async ({ params }: Props) => {
    const { slug } = await params
    const pageData = LANDING_PAGES.find(p => p.slug === slug)

    if (!pageData) {
        notFound()
    }

    return (
        <LandingPageTemplate
            title={<>{pageData.title}</>}
            subtitle={pageData.subtitle}
            badge={pageData.badge}
            keyword={pageData.keyword}
        />
    )
}

export default LandingPage
