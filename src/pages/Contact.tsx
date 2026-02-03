import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Send, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '778 289 1462',
      href: 'tel:7782891462',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'edenrose@gmail.com',
      href: 'mailto:edenrose@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vancouver, BC, Canada',
      href: null,
    },
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
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light mb-6"
            >
              Let's Create
              <span className="block italic text-gold">Together</span>
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
              Ready to capture your special moments? We'd love to hear from you. Fill out the
              form below or reach out directly.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Info */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="space-y-12">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl mb-6">Contact Information</h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    We're here to answer any questions about our services. Reach out and let's
                    start planning your perfect event coverage.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center border border-gold/30 flex-shrink-0">
                        <item.icon size={20} className="text-gold" />
                      </div>
                      <div>
                        <span className="font-body text-xs uppercase tracking-widest text-muted-foreground block mb-1">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-body text-foreground hover:text-gold transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-body text-foreground">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <span className="font-body text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                    Follow Us
                  </span>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border text-muted-foreground hover:text-gold hover:border-gold transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border text-muted-foreground hover:text-gold hover:border-gold transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <span className="font-body text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                    Availability
                  </span>
                  <div className="font-body text-sm text-foreground space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: By Appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-background p-8 md:p-12">
                <h2 className="font-display text-2xl md:text-3xl mb-8">Book Your Session</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body text-xs uppercase tracking-widest">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border focus:border-gold focus:ring-gold bg-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body text-xs uppercase tracking-widest">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border focus:border-gold focus:ring-gold bg-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body text-xs uppercase tracking-widest">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-border focus:border-gold focus:ring-gold bg-transparent"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventType" className="font-body text-xs uppercase tracking-widest">
                      Event Type *
                    </Label>
                    <Select
                      value={formData.eventType}
                      onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                    >
                      <SelectTrigger className="border-border focus:border-gold focus:ring-gold bg-transparent">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="birthday">Birthday / Celebration</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="eventDate" className="font-body text-xs uppercase tracking-widest">
                      Event Date
                    </Label>
                    <div className="relative">
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="border-border focus:border-gold focus:ring-gold bg-transparent"
                      />
                      <Calendar
                        size={18}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message" className="font-body text-xs uppercase tracking-widest">
                      Tell Us About Your Event *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-border focus:border-gold focus:ring-gold bg-transparent resize-none"
                      placeholder="Share details about your event, vision, and any special requests..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-hero-primary w-full md:w-auto bg-foreground text-background hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send size={16} />
                    </span>
                  )}
                </motion.button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="mx-auto text-gold mb-4" />
            <h3 className="font-display text-2xl mb-2">Visit Our Studio</h3>
            <p className="font-body text-muted-foreground">Vancouver, BC, Canada</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
