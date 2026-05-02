"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { properties } from "@/lib/properties-data"

export function FeaturedProperties() {
  const featuredProperties = properties.filter(p => p.isFeatured).slice(0, 3)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Destacadas
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Oportunidades que no puedes dejar pasar
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Propiedades seleccionadas por su excelente ubicacion, precio y potencial de inversion.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-6 gap-2 md:mt-0">
            <Link href="/propiedades">
              Ver todas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
