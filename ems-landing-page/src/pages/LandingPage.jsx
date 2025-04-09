// src/pages/LandingPage.js
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import MobileNav from '../MobileNav';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import RolesSection from '../sections/RolesSection';
import EventsSection from '../sections/EventsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import NewsletterSection from '../sections/NewsletterSection';
import Footer from '../sections/Footer';

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">CampusEvents</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-purple-500 transition-colors">
              Home
            </a>
            <a href="#features" className="text-sm font-medium hover:text-purple-500 transition-colors">
              Features
            </a>
            <a href="#events" className="text-sm font-medium hover:text-purple-500 transition-colors">
              Events
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-purple-500 transition-colors">
              Testimonials
            </a>
            <a href="#" className="text-sm font-medium hover:text-purple-500 transition-colors">
              About
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Log In</Button>
            <Button>Sign Up</Button>
          </div>
          <MobileNav />
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <RolesSection />
        <EventsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;