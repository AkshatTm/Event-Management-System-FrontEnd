import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

function EventsSection() {
  return (
    <section id="events" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover exciting events happening on campus.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <img src="https://admin.12grids.com/uploads/blogs/original_cover_images/top-11-web-development-technologies-you-must-know-in-2024-12grids-compressed.jpg" alt="Tech Workshop" className="rounded-lg object-cover w-full h-48" />
            </CardHeader>
            <CardContent>
              <CardTitle>Web Development Workshop</CardTitle>
              <CardDescription className="mt-2">April 15, 2025 • 2:00 PM</CardDescription>
              <p className="mt-2 text-sm text-muted-foreground">
                Learn the fundamentals of web development with HTML, CSS, and JavaScript.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
            </CardFooter>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <img src="https://m.economictimes.com/thumb/msid-62724365,width-1600,height-900,resizemode-4,imgsize-318101/celebrate-the-onset-of-spring-with-these-cultural-festivals-across-india.jpg" alt="Cultural Festival" className="rounded-lg object-cover w-full h-48" />
            </CardHeader>
            <CardContent>
              <CardTitle>Spring Cultural Festival</CardTitle>
              <CardDescription className="mt-2">April 22, 2025 • 5:00 PM</CardDescription>
              <p className="mt-2 text-sm text-muted-foreground">
                Celebrate diversity with performances, food, and activities from around the world.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
            </CardFooter>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO53G17EKusH-gtVRCfDCJojAUUasAK133mw&s" alt="Career Fair" className="rounded-lg object-cover w-full h-48" />
            </CardHeader>
            <CardContent>
              <CardTitle>Spring Career Fair</CardTitle>
              <CardDescription className="mt-2">May 5, 2025 • 10:00 AM</CardDescription>
              <p className="mt-2 text-sm text-muted-foreground">
                Connect with top employers and explore internship and job opportunities.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
