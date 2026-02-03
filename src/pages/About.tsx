import { motion } from 'framer-motion';
import { Award, Heart, Camera, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';

// Import images
import heroAbout from '@/assets/hero-about.jpg';
import brandImage1 from '@/assets/brand-1.jpg';
import brandImage3 from '@/assets/brand-3.jpg';
import brandImage4 from '@/assets/brand-4.jpg';
import brandImage5 from '@/assets/brand-5.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every frame is crafted with love and dedication to your story.',
    },
    {
      icon: Camera,
      title: 'Artistry',
      description: 'Combining technical excellence with creative vision.',
    },
    {
      icon: Users,
      title: 'Connection',
      description: 'Building genuine relationships with every client we serve.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in every project.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Events Captured' },
    { number: '10+', label: 'Years Experience' },
    { number: '200+', label: 'Happy Couples' },
    { number: '15+', label: 'Awards Won' },
  ];

  return (
    <Layout navigationVariant="transparent">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroAbout}
            alt="Behind the scenes wedding photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xs uppercase tracking-ultra text-gold mb-4 block"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6"
            >
              The Story Behind
              <span className="block italic text-gold-light">Eden Rose</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-16 h-px bg-gold mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-body text-lg text-cream/80 leading-relaxed max-w-xl"
            >
              For over a decade, we've dedicated ourselves to capturing life's most precious
              moments with artistry, emotion, and timeless elegance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src={brandImage1}
                  alt="Eden Rose photographer at work"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold/30 -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <span className="section-subtitle">Our Journey</span>
              <h2 className="section-title mb-6">
                A Passion Born from
                <span className="block italic text-gold">Love & Light</span>
              </h2>
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <p>
                  Eden Rose Photography was founded with a simple yet profound mission: to
                  preserve life's most beautiful moments in timeless imagery that speaks to the
                  heart.
                </p>
                <p>
                  What began as a passion for capturing candid moments at a friend's wedding has
                  evolved into a full-service photography and videography studio, serving couples
                  and families across the country.
                </p>
                <p>
                  Our name, Eden Rose, embodies our philosophy—finding beauty in every moment,
                  like a rose blooming in paradise. We believe that every love story deserves to
                  be told with elegance and authenticity.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="section-subtitle">Our Values</span>
            <h2 className="section-title">
              What Drives <span className="italic text-gold">Our Craft</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-gold/30 rounded-full">
                    <value.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{value.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-charcoal text-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                <span className="block font-display text-4xl md:text-5xl text-gold mb-2">
                  {stat.number}
                </span>
                <span className="font-body text-xs uppercase tracking-widest text-cream/60">
                  {stat.label}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="section-subtitle">Behind the Lens</span>
            <h2 className="section-title">
              Meet the <span className="italic text-gold">Artist</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection className="md:col-span-2">
              <img
                src={brandImage3}
                alt="Behind the scenes"
                className="w-full h-full object-cover aspect-[16/9]"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <img
                src={brandImage4}
                alt="Photography equipment"
                className="w-full h-full object-cover aspect-[3/4] md:aspect-auto"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={brandImage5}
                alt="Photographer portrait"
                className="w-full h-full object-cover aspect-[3/4] md:aspect-auto"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="md:col-span-2 flex items-center">
              <div className="p-8 md:p-12 bg-cream-dark w-full">
                <h3 className="font-display text-2xl md:text-3xl mb-4">
                  Crafting Memories with Heart
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Every photograph tells a story. Our commitment is to capture not just
                  images, but the emotions, connections, and love that make your moments
                  truly special. From intimate weddings to grand celebrations, we bring the
                  same level of dedication and artistry to every project.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
