"use client"

import { use, useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Heart, Share2, MapPin, Maximize, Bed, Bath, Check, Clock, MessageCircle, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { properties, formatPrice, formatSize } from "@/lib/properties-data"

const typeLabels: Record<string, string> = {
  casa: "Casa",
  lote: "Lote",
  parcela: "Parcela",
  apartamento: "Apartamento",
  finca: "Finca"
}

const images = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
]

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const property = properties.find(p => p.id === resolvedParams.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!property) {
    notFound()
  }

  const similarProperties = properties
    .filter(p => p.id !== property.id && (p.type === property.type || p.location === property.location))
    .slice(0, 3)

  const whatsappMessage = `Hola, me interesa la propiedad: ${property.title} - ${formatPrice(property.price)}`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary">Inicio</Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/propiedades" className="text-muted-foreground hover:text-primary">Propiedades</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{property.title}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Back button */}
          <Button asChild variant="ghost" className="mb-6 gap-2 pl-0">
            <Link href="/propiedades">
              <ArrowLeft className="h-4 w-4" />
              Volver a propiedades
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image gallery */}
              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                    style={{ backgroundImage: `url('${images[selectedImage]}')` }}
                  />
                  <div className="absolute right-4 top-4 flex gap-2">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm"
                    >
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                  {property.isUrgent && (
                    <Badge variant="destructive" className="absolute left-4 top-4 gap-1">
                      <Clock className="h-3 w-3" />
                      Alta demanda en esta zona
                    </Badge>
                  )}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-video overflow-hidden rounded-lg border-2 transition-all ${
                        selectedImage === idx ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <div 
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${img}')` }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Title and location */}
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {typeLabels[property.type]}
                  </Badge>
                  <Badge variant="outline">{property.zone}</Badge>
                </div>
                <h1 className="mb-3 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {property.title}
                </h1>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{property.location}, Cauca, Colombia</span>
                </div>
              </div>

              {/* Key info */}
              <div className="grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-6 md:grid-cols-4">
                <div className="text-center">
                  <Maximize className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="text-lg font-semibold text-card-foreground">{formatSize(property.size, property.sizeUnit)}</p>
                  <p className="text-sm text-muted-foreground">Area</p>
                </div>
                {property.bedrooms && (
                  <div className="text-center">
                    <Bed className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <p className="text-lg font-semibold text-card-foreground">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">Habitaciones</p>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="text-center">
                    <Bath className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <p className="text-lg font-semibold text-card-foreground">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">Banos</p>
                  </div>
                )}
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="text-lg font-semibold text-card-foreground">{property.zone}</p>
                  <p className="text-sm text-muted-foreground">Zona</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-foreground">Descripcion</h2>
                <p className="leading-relaxed text-muted-foreground">{property.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-foreground">Caracteristicas</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price card */}
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <p className="mb-1 text-sm text-muted-foreground">Precio</p>
                    <p className="mb-6 text-3xl font-bold text-primary">{formatPrice(property.price)}</p>
                    
                    <div className="space-y-3">
                      <Button 
                        className="w-full gap-2" 
                        size="lg"
                        onClick={() => {
                          const url = `https://wa.me/573001234567?text=${encodeURIComponent(whatsappMessage)}`
                          window.open(url, "_blank")
                        }}
                      >
                        <MessageCircle className="h-5 w-5" />
                        Quiero mas informacion
                      </Button>
                      <Button variant="outline" className="w-full gap-2" size="lg">
                        <Phone className="h-5 w-5" />
                        Llamar ahora
                      </Button>
                    </div>

                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      Te respondemos en menos de 1 hora
                    </p>
                  </CardContent>
                </Card>

                {/* Urgency message */}
                {property.isUrgent && (
                  <Card className="border-destructive/50 bg-destructive/10">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                        <div>
                          <p className="font-medium text-foreground">Alta demanda</p>
                          <p className="text-sm text-muted-foreground">
                            Esta propiedad tiene varios interesados. Agenda tu visita hoy.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Agent card */}
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                        CR
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">Cauca Raiz</p>
                        <p className="text-sm text-muted-foreground">Asesor inmobiliario</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mas de 10 anos de experiencia ayudando a familias a encontrar su hogar ideal en el Cauca.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Similar properties */}
          {similarProperties.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
                Propiedades similares
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {similarProperties.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton message={whatsappMessage} />
    </div>
  )
}
