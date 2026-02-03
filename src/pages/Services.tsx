import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Cake, Building2, Film, Camera, Check, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';

// Import images
import heroWedding from '@/assets/hero-wedding.jpg';
import galleryBirthday from '@/assets/gallery-birthday.jpg';
import galleryCorporate from '@/assets/gallery-corporate.jpg';

const Services = () => {
  const services = [
    {
      id: 'weddings',
      icon: Heart,
      title: 'Wedding Photography & Videography',
      subtitle: 'Capturing Your Love Story',
      description:
        'Your wedding day is a once-in-a-lifetime moment. We capture every tender glance, joyful tear, and celebration of love with artistic vision and emotional depth.',
      image: heroWedding,
      features: [
        'Full-day coverage (8-12 hours)',
        'Second photographer included',
        'Engagement session',
        'High-resolution edited images',
        'Cinematic highlight film',
        'Custom photo album',
        'Online gallery for sharing',
        'Print rights included',
      ],
      packages: [
        { name: 'Intimate', price: 'From $3,500', description: 'Perfect for small, intimate ceremonies' },
        { name: 'Classic', price: 'From $5,500', description: 'Our most popular wedding package' },
        { name: 'Luxe', price: 'From $8,500', description: 'The complete wedding experience' },
      ],
    },
    {
      id: 'birthdays',
      icon: Cake,
      title: 'Birthday & Celebration Events',
      subtitle: 'Preserving Milestone Moments',
      description:
        'From milestone birthdays to intimate gatherings, we capture the joy, laughter, and special moments that make your celebrations unforgettable.',
      image: galleryBirthday,
      features: [
        'Flexible hourly coverage',
        'Candid and posed photography',
        'Event detail shots',
        'Same-day preview images',
        'Quick turnaround delivery',
        'Social media ready files',
        'Print-ready high resolution',
        'Video highlights available',
      ],
      packages: [
        { name: 'Essential', price: 'From $800', description: '2-3 hours of coverage' },
        { name: 'Premium', price: 'From $1,500', description: 'Half-day event coverage' },
        { name: 'Ultimate', price: 'From $2,500', description: 'Full event documentation' },
      ],
    },
    {
      id: 'corporate',
      icon: Building2,
      title: 'Corporate Event Coverage',
      subtitle: 'Professional Excellence',
      description:
        'Elevate your brand with professional event photography and videography. From conferences to galas, we capture your corporate events with sophistication.',
      image: galleryCorporate,
      features: [
        'Multi-day event coverage',
        'Team of photographers',
        'Real-time photo delivery',
        'Executive portraits',
        'Branded imagery options',
        'Event recap video',
        'Commercial usage rights',
        'Expedited delivery available',
      ],
      packages: [
        { name: 'Standard', price: 'From $1,200', description: 'Half-day corporate coverage' },
        { name: 'Professional', price: 'From $2,500', description: 'Full-day with video' },
        { name: 'Enterprise', price: 'Custom', description: 'Multi-day events & conferences' },
      ],
    },
  ];

  const additionalServices = [
    { icon: Film, title: 'Videography', description: 'Cinematic films that tell your story' },
    { icon: Camera, title: 'Photo Albums', description: 'Handcrafted heirloom albums' },
  ];

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
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light mb-6"
            >
              Capturing Your
              <span className="block italic text-gold">Special Moments</span>
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
              From intimate celebrations to grand events, we offer tailored photography and
              videography services designed to capture your most precious moments beautifully.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-cream-dark' : 'bg-background'}`}
        >
          <div className="container mx-auto">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <AnimatedSection direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="relative group overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center">
                      <service.icon size={24} className="text-gold" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                direction={index % 2 === 0 ? 'right' : 'left'}
                delay={0.2}
                className={index % 2 === 1 ? 'lg:order-first' : ''}
              >
                <span className="section-subtitle">{service.subtitle}</span>
                <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
                  {service.title}
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check size={16} className="text-gold flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Packages */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-body text-xs uppercase tracking-widest text-gold">
                    Packages
                  </h4>
                  <div className="grid gap-3">
                    {service.packages.map((pkg) => (
                      <motion.div
                        key={pkg.name}
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-between p-4 bg-background/50 border border-border hover:border-gold/30 transition-colors"
                      >
                        <div>
                          <span className="font-display text-lg">{pkg.name}</span>
                          <span className="block font-body text-xs text-muted-foreground">
                            {pkg.description}
                          </span>
                        </div>
                        <span className="font-body text-sm text-gold">{pkg.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-foreground hover:text-gold transition-colors duration-300 group"
                >
                  Inquire Now
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding bg-charcoal text-cream">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="font-body text-xs uppercase tracking-ultra text-gold mb-4 block">
              More Options
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Additional <span className="italic text-gold-light">Services</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 border border-cream/10 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-gold/30">
                    <service.icon size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{service.title}</h3>
                  <p className="font-body text-sm text-cream/70">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <span className="section-subtitle">Ready to Begin?</span>
            <h2 className="section-title mb-6">
              Let's Discuss Your <span className="italic text-gold">Vision</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto mb-10">
              Every event is unique. Contact us to discuss your specific needs and receive a
              personalized quote.
            </p>
            <Link to="/contact" className="btn-hero-primary bg-foreground text-background hover:bg-gold">
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
