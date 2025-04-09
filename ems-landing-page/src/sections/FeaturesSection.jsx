// src/sections/FeaturesSection.js
import React from 'react';
import { Calendar, ChevronRight, Bell, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold">
              <span className="text-purple-500">Powerful Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides all the tools you need to manage campus events efficiently.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-12">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-100">
                <Calendar className="h-6 w-6 text-purple-500" />
              </div>
              <CardTitle className="mt-4">Event Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create and manage events with ease. Set dates, locations, and capacities in minutes.
              </p>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-100">
                <ChevronRight className="h-6 w-6 text-blue-500" />
              </div>
              <CardTitle className="mt-4">Easy Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Streamlined registration process for students with automatic confirmations and reminders.
              </p>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-100">
                <Bell className="h-6 w-6 text-purple-500" />
              </div>
              <CardTitle className="mt-4">Real-Time Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Stay updated with real-time notifications about event changes, reminders, and updates.
              </p>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-100">
                <BarChart2 className="h-6 w-6 text-blue-500" />
              </div>
              <CardTitle className="mt-4">Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Comprehensive analytics to track attendance, engagement, and feedback for your events.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;