import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

function NewsletterSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Subscribe to our newsletter to get the latest updates on campus events and features.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row items-end">
            <div className="grid w-full gap-2">
              <form className="grid gap-2 md:grid-cols-2">
                <Input type="email" placeholder="Enter your email" className="md:col-span-1" required />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 md:col-span-1">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <a href="#" className="underline underline-offset-2 hover:text-purple-500">
                  Terms & Conditions
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
