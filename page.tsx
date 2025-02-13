import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  { name: "HOME", href: "#" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "WORK", href: "#work" },
  { name: "BLOG", href: "#blog" },
  { name: "CONTACT", href: "#contact" },
]

export default function Portfolio() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed h-full w-64 border-r bg-muted/30 p-6 flex flex-col">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2">
            <Image src="/placeholder.svg" alt="Profile photo" fill className="object-cover" priority />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Shishir Pokharel</h1>
            <p className="text-sm text-primary">
              QA ENGINEER & PROJECT LEAD
              <br />
              <span className="text-muted-foreground">IN KATHMANDU, NEPAL</span>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-2 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                    item.name === "HOME" && "text-primary",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <footer className="text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1">
        <div className="flex min-h-screen items-center justify-between p-12 lg:p-24">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
              I am a
              <br />
              QA Engineer
            </h1>
            <p className="max-w-md text-lg text-muted-foreground">
              Driving software quality and project success through strategic testing, automation, and effective team
              leadership in Nepal's tech landscape
            </p>
            <Button size="lg" className="h-12 px-6">
              VIEW PORTFOLIO
            </Button>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/placeholder.svg"
              alt="Professional portrait"
              width={500}
              height={600}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}

