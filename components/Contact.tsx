"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Contact = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id="contact"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`section-padding bg-secondary/30 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">Let&apos;s work together</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Feel free to reach out!
              </p>
            </div>
            <div className="space-y-4">
              <div className={`flex items-center gap-4 p-4 rounded-lg hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '0.1s' }}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:rotate-12 hover:scale-110">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:vasalak@gmail.com" className="font-medium hover:text-primary transition-colors">
                    vasalak@gmail.com
                  </a>
                </div>
              </div>
              <div className={`flex items-center gap-4 p-4 rounded-lg hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '0.2s' }}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:rotate-12 hover:scale-110">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+15513491343" className="font-medium hover:text-primary transition-colors">
                    +1-551-349-1343
                  </a>
                </div>
              </div>
              <div className={`flex items-center gap-4 p-4 rounded-lg hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '0.3s' }}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:rotate-12 hover:scale-110">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">New Jersey, 07306</p>
                </div>
              </div>
            </div>
          </div>
          <form className="bg-card border border-border rounded-xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input id="name" placeholder="Your name" className="bg-background" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="your.email@example.com" className="bg-background" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-background"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 active:scale-95">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


