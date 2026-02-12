import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { blogPosts } from '@/data/blogPosts';
import heroImage from '@/assets/hero-about.jpg';

const Blog = () => {
  return (
    <Layout navigationVariant="transparent">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Eden Rose Photography blog about digital marketing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block font-body text-xs uppercase tracking-ultra text-gold mb-4"
          >
            Our Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-4"
          >
            Insights & <span className="italic text-gold-light">Inspiration</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-body text-cream/80 text-lg max-w-2xl mx-auto"
          >
            Expert digital marketing strategies, SEO tips, and industry insights for creative professionals.
          </motion.p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <Link to={`/blog/${post.slug}`}>
                  <motion.article
                    whileHover={{ y: -4 }}
                    className="group bg-card border border-border p-8 md:p-10 card-hover"
                  >
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1.5 font-body text-xs uppercase tracking-widest text-gold">
                        <Tag size={12} />
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-body text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-body text-xs text-muted-foreground">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl font-light text-foreground group-hover:text-gold transition-colors duration-300 mb-4">
                      {post.title}
                    </h2>

                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-accent text-accent-foreground font-body text-xs rounded">
                        {post.primaryKeyword}
                      </span>
                      {post.secondaryKeywords.slice(0, 2).map((kw) => (
                        <span key={kw} className="px-3 py-1 bg-muted text-muted-foreground font-body text-xs rounded">
                          {kw}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-foreground group-hover:text-gold transition-colors duration-300">
                      Read Full Article
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </motion.article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-cream text-center">
        <AnimatedSection>
          <span className="font-body text-xs uppercase tracking-ultra text-gold mb-4 block">Stay Connected</span>
          <h2 className="font-display text-3xl md:text-4xl font-light mb-4">
            Want More <span className="italic text-gold-light">Insights?</span>
          </h2>
          <p className="font-body text-cream/70 max-w-xl mx-auto mb-8">
            Explore our services or get in touch to discuss how we can elevate your brand through stunning event photography.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services" className="btn-hero-primary">Our Services</Link>
            <Link to="/contact" className="btn-hero-secondary">Contact Us</Link>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default Blog;
