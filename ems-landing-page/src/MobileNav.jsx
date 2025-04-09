// src/MobileNav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from './components/ui/button'; // Import the Button component

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs border-l bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold">CampusEvents</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-6">
              <a href="#" className="text-base font-medium hover:text-purple-500 transition-colors">
                Home
              </a>
              <a href="#features" className="text-base font-medium hover:text-purple-500 transition-colors">
                Features
              </a>
              <a href="#events" className="text-base font-medium hover:text-purple-500 transition-colors">
                Events
              </a>
              <a href="#testimonials" className="text-base font-medium hover:text-purple-500 transition-colors">
                Testimonials
              </a>
              <a href="#" className="text-base font-medium hover:text-purple-500 transition-colors">
                About
              </a>
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <Button variant="outline" className="w-full">
                Log In
              </Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;