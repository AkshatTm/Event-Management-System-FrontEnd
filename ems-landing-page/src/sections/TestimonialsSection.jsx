import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Student Voices</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear what our users have to say about their experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  width={60}
                  height={60}
                  alt="Student"
                  className="rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                  <CardDescription>Computer Science, Junior</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                "CampusEvents has made it so easy to find tech workshops and hackathons. I've built my network and
                skills through events I discovered here!"
              </p>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  width={60}
                  height={60}
                  alt="Student"
                  className="rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-lg">Michael Chen</CardTitle>
                  <CardDescription>Business Administration, Senior</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                "As a club president, organizing events used to be a nightmare. Now I can create, promote, and manage
                registrations all in one place!"
              </p>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  width={60}
                  height={60}
                  alt="Student"
                  className="rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-lg">Priya Patel</CardTitle>
                  <CardDescription>Student Affairs Coordinator</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                "The analytics have been invaluable for understanding student engagement and improving our campus
                programming."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
