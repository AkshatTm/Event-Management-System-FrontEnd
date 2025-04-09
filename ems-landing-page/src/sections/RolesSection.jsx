import { ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

function RolesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">For Everyone on Campus</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform serves the needs of students, organizers, and administrators.
            </p>
          </div>
        </div>
        <div className="mx-auto pt-12">
          <Tabs defaultValue="students" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="organizers">Organizers</TabsTrigger>
              <TabsTrigger value="admins">Administrators</TabsTrigger>
            </TabsList>
            <TabsContent value="students" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">For Students</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Discover events that match your interests</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Register with a single click</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Receive timely reminders</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Track your event history and certificates</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="w-fit bg-purple-600 hover:bg-purple-700">Join as Student</Button>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/tR59PFrq/graduating-student.png"
                    width={300}
                    height={300}
                    alt="Student Dashboard"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="organizers" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">For Organizers</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Create and publish events in minutes</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Manage registrations and attendance</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Send updates to registered participants</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Access detailed analytics and reports</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="w-fit bg-purple-600 hover:bg-purple-700">Join as Organizer</Button>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/kXXxCFVL/organize.png"
                    width={300}
                    height={300}
                    alt="Organizer Dashboard"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="admins" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">For Administrators</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Oversee all campus events in one place</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Approve and feature important events</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Access comprehensive analytics</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>Manage user roles and permissions</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="w-fit bg-purple-600 hover:bg-purple-700">Admin Portal</Button>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/y6TF2rNF/blogger.png"
                    width={300}
                    height={300}
                    alt="Admin Dashboard"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default RolesSection
