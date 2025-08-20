'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

const navItems = [
  { name: "Overview", href: "#overview" },
  { name: "Architecture", href: "#architecture" },
  { name: "Documentation", href: "#docs" },
  { name: "Research", href: "#research" },
  { name: "Community", href: "#community" },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-6 md:px-8">
        <Link href="/" className="font-bold text-xl tracking-tight hover:text-primary transition-colors">
          DRT
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Button variant="default" size="sm" className="hidden sm:inline-flex">
            Read the paper
          </Button>
          <Button variant="secondary" size="sm">
            Join the community
          </Button>
        </div>
      </div>
    </nav>
  )
}
