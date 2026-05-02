"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Home, Building, Phone, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/propiedades", label: "Propiedades", icon: Building },
  { href: "/contacto", label: "Contacto", icon: Phone },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Home className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-foreground">Cauca Raiz</span>
            <span className="text-xs text-muted-foreground">Propiedades</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Favoritos</span>
          </Button>
          <Button asChild>
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetTitle className="sr-only">Menu de navegacion</SheetTitle>
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Home className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-serif text-xl font-bold">Cauca Raiz</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-border pt-4">
                <Button asChild className="w-full">
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    Contactar ahora
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
