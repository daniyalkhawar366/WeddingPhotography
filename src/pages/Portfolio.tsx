import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import LightboxGallery from '@/components/LightboxGallery';

// Import images
import heroWedding from '@/assets/hero-wedding.jpg';
import galleryWedding1 from '@/assets/gallery-wedding-1.jpg';
import galleryWedding2 from '@/assets/gallery-wedding-2.jpg';
import galleryWedding3 from '@/assets/gallery-wedding-3.jpg';
import galleryBirthday from '@/assets/gallery-birthday.jpg';
import galleryCorporate from '@/assets/gallery-corporate.jpg';
import brandImage1 from '@/assets/brand-1.jpg';
import brandImage2 from '@/assets/brand-2.jpg';
import brandImage3 from '@/assets/brand-3.jpg';
import brandImage4 from '@/assets/brand-4.jpg';
import brandImage5 from '@/assets/brand-5.jpg';
import brandImage6 from '@/assets/brand-6.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'birthdays', label: 'Celebrations' },
    { id: 'corporate', label: 'Corporate' },
  ];

  const allImages = [
    { src: heroWedding, alt: 'Romantic sunset wedding portrait', category: 'weddings' },
    { src: galleryWedding1, alt: 'First dance under fairy lights', category: 'weddings' },
    { src: galleryBirthday, alt: 'Birthday celebration champagne toast', category: 'birthdays' },
    { src: galleryWedding2, alt: 'Bridal bouquet details', category: 'weddings' },
    { src: galleryCorporate, alt: 'Corporate gala networking event', category: 'corporate' },
    { src: galleryWedding3, alt: 'Garden wedding ceremony', category: 'weddings' },
    { src: brandImage1, alt: 'Elegant portrait session', category: 'weddings' },
    { src: brandImage2, alt: 'Candid wedding moment', category: 'weddings' },
    { src: brandImage3, alt: 'Behind the scenes photography', category: 'corporate' },
    { src: brandImage4, alt: 'Professional event coverage', category: 'corporate' },
    { src: brandImage5, alt: 'Intimate celebration capture', category: 'birthdays' },
    { src: brandImage6, alt: 'Artistic wedding composition', category: 'weddings' },
  ];

  const filteredImages =
    activeFilter === 'all'
      ? allImages
      : allImages.filter((img) => img.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-subtitle"
            >
              Our Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light mb-6"
            >
              Portfolio
              <span className="block italic text-gold">Gallery</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="decorative-line-left mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-body text-lg text-muted-foreground leading-relaxed"
            >
              Explore our collection of cherished moments. Each image tells a unique story of
              love, joy, and celebration.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border py-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`font-body text-xs uppercase tracking-widest px-6 py-3 border transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-transparent text-foreground border-border hover:border-foreground'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection>
            <LightboxGallery images={filteredImages} />
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="section-subtitle">Featured</span>
            <h2 className="section-title">
              Recent <span className="italic text-gold">Highlight</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden group">
                <img
                  src={heroWedding}
                  alt="Featured wedding"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="font-body text-xs uppercase tracking-ultra text-gold mb-4">
                  Wedding of the Season
                </span>
                <h3 className="font-display text-3xl md:text-4xl mb-4">Sarah & Michael</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  An intimate garden wedding bathed in golden hour light. This celebration
                  beautifully captured the essence of timeless romance and elegant simplicity
                  that defines Eden Rose Photography.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <span className="block font-display text-2xl text-gold">450+</span>
                    <span className="font-body text-xs text-muted-foreground uppercase tracking-widest">
                      Photos
                    </span>
                  </div>
                  <div>
                    <span className="block font-display text-2xl text-gold">12 min</span>
                    <span className="font-body text-xs text-muted-foreground uppercase tracking-widest">
                      Film
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Reel Section */}
      <section className="section-padding bg-charcoal text-cream">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <span className="font-body text-xs uppercase tracking-ultra text-gold mb-4 block">
              Cinematic Films
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
              Watch Our <span className="italic text-gold-light">Showreel</span>
            </h2>
            <p className="font-body text-cream/70 max-w-xl mx-auto mb-10">
              Experience the emotion and artistry of our videography through our latest highlight
              reel.
            </p>
            <div className="relative aspect-video max-w-4xl mx-auto bg-charcoal-light flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto border-2 border-gold rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-gold/10 transition-colors">
                  <svg
                    className="w-8 h-8 text-gold ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-body text-xs uppercase tracking-widest text-cream/50">
                  Coming Soon
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
