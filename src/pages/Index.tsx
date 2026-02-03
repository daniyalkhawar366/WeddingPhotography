import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Film, Heart } from 'lucide-react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';

// Import images
import heroImage from '@/assets/hero-wedding.jpg';
import brandImage1 from '@/assets/brand-1.jpg';
import brandImage2 from '@/assets/brand-2.jpg';
import galleryWedding1 from '@/assets/gallery-wedding-1.jpg';
import galleryWedding2 from '@/assets/gallery-wedding-2.jpg';
import galleryBirthday from '@/assets/gallery-birthday.jpg';
import galleryCorporate from '@/assets/gallery-corporate.jpg';

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: 'Weddings',
      description:
        'Capturing the magic of your love story with timeless elegance and artistic vision.',
    },
    {
      icon: Camera,
      title: 'Birthdays',
      description:
        'Preserving joyful celebrations and milestone moments that deserve to be remembered.',
    },
    {
      icon: Film,
      title: 'Corporate',
      description:
        'Professional event coverage that elevates your brand and captures success.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Eden Rose captured our wedding day so beautifully. Every image feels like a work of art.',
      author: 'Sarah & Michael',
      event: 'Wedding 2024',
    },
    {
      quote:
        "The most stunning photos we've ever seen. Eden truly understands how to capture emotion.",
      author: 'The Johnson Family',
      event: 'Anniversary Celebration',
    },
  ];

  return (
    <Layout navigationVariant="transparent">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Romantic wedding photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block font-body text-xs uppercase tracking-ultra text-gold mb-6"
          >
            Eden Rose Photography
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-6"
          >
            Enchanting Frames
            <span className="block italic text-gold-light">Endless Memories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-body text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Elegant. Timeless. Romantic. We capture life's most precious moments with artistry and heart.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="btn-hero-primary">
              Book Now
            </Link>
            <Link to="/portfolio" className="btn-hero-secondary">
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-16 bg-gradient-to-b from-transparent via-cream/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src={brandImage1}
                  alt="Eden Rose photographer"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold/30" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <span className="section-subtitle">About Eden Rose</span>
              <h2 className="section-title mb-6">
                Capturing Love,
                <span className="block italic text-gold">One Frame at a Time</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience in event photography and videography, we specialize
                in capturing the authentic emotions and beautiful moments that make your special
                occasions truly unforgettable.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Our approach combines artistic vision with technical excellence, ensuring every
                image tells your unique story with elegance and grace.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-foreground hover:text-gold transition-colors duration-300 group"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="section-subtitle">Our Services</span>
            <h2 className="section-title">
              What We <span className="italic text-gold">Offer</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-background p-8 md:p-10 text-center card-hover"
                >
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-gold/30">
                    <service.icon size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl mb-4">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-foreground hover:text-gold transition-colors duration-300 group"
            >
              View All Services
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="section-subtitle">Our Work</span>
            <h2 className="section-title">
              Featured <span className="italic text-gold">Portfolio</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[galleryWedding1, galleryWedding2, galleryBirthday, galleryCorporate].map(
              (image, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden group aspect-square"
                  >
                    <img
                      src={image}
                      alt={`Portfolio image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="image-overlay" />
                  </motion.div>
                </AnimatedSection>
              )
            )}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Link to="/portfolio" className="btn-hero-primary bg-foreground text-background hover:bg-gold">
              View Full Portfolio
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-charcoal text-cream">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="font-body text-xs uppercase tracking-ultra text-gold mb-4 block">
              Client Love
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Kind Words from <span className="italic text-gold-light">Couples</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <blockquote className="p-8 md:p-10 border border-cream/10">
                  <p className="font-display text-xl md:text-2xl italic text-cream/90 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <footer>
                    <cite className="not-italic">
                      <span className="block font-body text-sm uppercase tracking-widest text-gold">
                        {testimonial.author}
                      </span>
                      <span className="block font-body text-xs text-cream/50 mt-1">
                        {testimonial.event}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={brandImage2}
            alt="Wedding photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>

        <div className="relative z-10 container mx-auto text-center px-6">
          <AnimatedSection>
            <span className="font-body text-xs uppercase tracking-ultra text-gold mb-4 block">
              Ready to Begin?
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-6">
              Let's Create <span className="italic text-gold-light">Magic</span> Together
            </h2>
            <p className="font-body text-cream/70 max-w-xl mx-auto mb-10">
              Book your session today and let us capture the moments that matter most.
            </p>
            <Link to="/contact" className="btn-hero-primary">
              Book Your Session
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
