import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import About from './components/About';
import MenuSection from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';
import Drinks from './components/Drinks';
import { GetContentService } from './services/getContentService.tsx'

const contentService = new GetContentService();
const CONTENT_DATA: any = await contentService.getContent()
const App: React.FC = () => {

    const heroProps =
        {
            title: CONTENT_DATA?.content?.hero_title ?? '',
            subtitle: CONTENT_DATA?.content?.hero_subtitle ?? '',
            image: CONTENT_DATA?.content?.hero_image ?? ''
        };

    const featuredProps =
        {
            title: CONTENT_DATA?.content?.featured_title ?? '',
            description: CONTENT_DATA?.content?.featured_description ?? '',
            price: CONTENT_DATA?.content?.featured_price ?? '',
            ingredients : CONTENT_DATA?.content?.featured_ingredients
                ? CONTENT_DATA.content.featured_ingredients.split(',')
                : [],
            image: CONTENT_DATA?.content?.featured_image ?? ''
        };

    const storyProps =
        {
            title: CONTENT_DATA?.content?.story_title ?? '',
            description: CONTENT_DATA?.content?.story_content ?? '',
            image1: CONTENT_DATA?.content?.story_image1 ?? '',
            image2: CONTENT_DATA?.content?.story_image2 ?? ''
        };

  return (
    <div className="font-sans text-caleche-dark bg-caleche-cream/20">
      <Navbar />
      <main>
        <Hero heroData={heroProps} />
        <Featured featuredData={featuredProps} />
        <MenuSection />
        <Drinks/>
        <About storyData={storyProps} />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default App;