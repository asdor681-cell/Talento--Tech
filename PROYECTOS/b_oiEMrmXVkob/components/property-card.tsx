"use client"

import Link from "next/link"
import { Heart, MapPin, Maximize, Bed, Bath, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Property } from "@/lib/types"
import { formatPrice, formatSize } from "@/lib/properties-data"
import { useState } from "react"

interface PropertyCardProps {
  property: Property
}

const typeLabels: Record<string, string> = {
  casa: "Casa",
  lote: "Lote",
  parcela: "Parcela",
  apartamento: "Apartamento",
  finca: "Finca"
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <Badge className="bg-primary text-primary-foreground">
            {typeLabels[property.type]}
          </Badge>
          {property.isUrgent && (
            <Badge variant="destructive" className="gap-1">
              <Clock className="h-3 w-3" />
              Alta demanda
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 h-9 w-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white"
          onClick={(e) => {
            e.preventDefault()
            setIsFavorite(!isFavorite)
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
          <span className="sr-only">Agregar a favoritos</span>
        </Button>

        {/* Price */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-2xl font-bold text-white drop-shadow-lg">
            {formatPrice(property.price)}
          </p>
        </div>
      </div>

      <CardContent className="p-4">
        <Link href={`/propiedades/${property.id}`}>
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-card-foreground transition-colors hover:text-primary">
            {property.title}
          </h3>
        </Link>

        <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{property.location}</span>
          <span className="mx-1">-</span>
          <span>{property.zone}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t border-border pt-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{formatSize(property.size, property.sizeUnit)}</span>
          </div>
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.bedrooms} hab.</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms} banos</span>
            </div>
          )}
        </div>

        <div className="mt-4">
          <Button asChild className="w-full" variant="outline">
            <Link href={`/propiedades/${property.id}`}>
              Ver detalles
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
