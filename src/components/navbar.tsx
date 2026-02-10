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
  { name: "Principles", href: "/principles", internal: true },
  { name: "Landscape", href: "/landscape", internal: true },
  { name: "Overview", href: "https://vlarichev.github.io/digital-reasoning-thread/", internal: false },
  { name: "Whitepaper", href: "https://vlarichev.github.io/digital-reasoning-thread/whitepaper.html", internal: false },
  { name: "Contribute", href: "https://github.com/vlarichev/digital-reasoning-thread", internal: false },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-6 md:px-8">
        <Link href="/" className="font-bold text-xl tracking-tight gradient-text hover:text-primary transition-colors">
          DRT
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.internal ? (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/vlarichev/digital-reasoning-thread/blob/ed954b7e6bddb2c838f3209548609254addad4e1/pdf/Digital%20Reasoning%20Thread.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="default" size="sm" className="hidden sm:inline-flex">
              Read the paper
            </Button>
          </a>
          <Button variant="secondary" size="sm">
            Join the community (coming soon)
          </Button>
        </div>
      </div>
    </nav>
  )
}
