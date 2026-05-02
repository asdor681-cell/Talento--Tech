"use client"

import Link from "next/link"
import { TrendingUp, Home, Palmtree } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const opportunities = [
  {
    icon: TrendingUp,
    title: "Oportunidades de inversion",
    description: "Propiedades con alto potencial de valorizacion en zonas de crecimiento",
    link: "/propiedades?purpose=invertir",
    color: "bg-primary"
  },
  {
    icon: Home,
    title: "Para vivir tranquilo",
    description: "Casas y apartamentos perfectos para tu familia en zonas seguras",
    link: "/propiedades?purpose=vivir",
    color: "bg-accent"
  },
  {
    icon: Palmtree,
    title: "Para descansar",
    description: "Fincas, parcelas y casas campestres para escapar de la rutina",
    link: "/propiedades?purpose=descanso",
    color: "bg-primary"
  }
]

export function OpportunitiesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Encuentra tu propiedad ideal
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Que estas buscando?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {opportunities.map((item) => (
            <Card key={item.title} className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}>
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{item.title}</h3>
                <p className="mb-4 text-muted-foreground">{item.description}</p>
                <Button asChild variant="link" className="p-0 text-primary">
                  <Link href={item.link}>
                    Ver propiedades
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
