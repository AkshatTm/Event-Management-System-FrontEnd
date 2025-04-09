// src/sections/HeroSection.js
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Campus Events, <span className="text-purple-500">All in One Place</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Discover, create, and register for university events like workshops, seminars, and cultural festivals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                View Events <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Organize Now
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://i.postimg.cc/J06hr8fH/Chat-GPT-Image-Apr-10-2025-01-58-15-AM.png"
              width={550}
              height={550}
              alt="Campus Events Dashboard"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;