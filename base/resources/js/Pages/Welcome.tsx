import React from 'react';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Featured from '@/Components/Featured';
import MenuSection from '@/Components/Menu';
import Location from '@/Components/Location';
import Footer from '@/Components/Footer';
import Drinks from '@/Components/Drinks';
import About from '@/Components/About';
import { Head } from '@inertiajs/react';

interface WelcomeProps {
    content: any;
    foodItems: any[];
    drinkItems: any[];
}

export default function Welcome({ content, foodItems, drinkItems }: WelcomeProps) {
    const CONTENT_DATA = { content };

    const heroProps = {
        title: CONTENT_DATA?.content?.hero_title ?? '',
        subtitle: CONTENT_DATA?.content?.hero_subtitle ?? '',
        image: CONTENT_DATA?.content?.hero_image ?? ''
    };

    const featuredProps = {
        title: CONTENT_DATA?.content?.featured_title ?? '',
        description: CONTENT_DATA?.content?.featured_description ?? '',
        price: CONTENT_DATA?.content?.featured_price ?? '',
        ingredients: CONTENT_DATA?.content?.featured_ingredients
            ? CONTENT_DATA.content.featured_ingredients.split(',')
            : [],
        image: CONTENT_DATA?.content?.featured_image ?? ''
    };

    const storyProps = {
        title: CONTENT_DATA?.content?.story_title ?? '',
        description: CONTENT_DATA?.content?.story_content ?? '',
        image1: CONTENT_DATA?.content?.story_image1 ?? '',
        image2: CONTENT_DATA?.content?.story_image2 ?? ''
    };

    return (
        <>
            <Head title="La Caleche | Patisserie, Cafe & Restaurant" />
            <div className="font-sans text-caleche-dark bg-caleche-cream/20">
                <Navbar />
                <main>
                    <Hero heroData={heroProps} />
                    <Featured featuredData={featuredProps} />
                    <MenuSection items={foodItems} />
                    <Drinks items={drinkItems} />
                    <About storyData={storyProps} />
                    <Location />
                </main>
                <Footer />
            </div>
        </>
    );
}
