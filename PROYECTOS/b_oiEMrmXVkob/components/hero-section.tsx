"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin, Home, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { locations, propertyTypes } from "@/lib/properties-data"

export function HeroSection() {
  const router = useRouter()
  const [type, setType] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (type && type !== "todos") params.set("type", type)
    if (location && location !== "Todos") params.set("location", location)
    if (priceRange) params.set("price", priceRange)
    router.push(`/propiedades?${params.toString()}`)
  }

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-foreground">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center">
        <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
          La plataforma #1 de propiedades en el Cauca
        </span>
        
        <h1 className="mb-6 max-w-4xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-balance">
          Encuentra tu casa, lote o parcela ideal en el Cauca
        </h1>
        
        <p className="mb-10 max-w-2xl text-lg text-white/80 text-pretty">
          Compra facil, rapido y con asesoria personalizada. Te ayudamos a tomar la mejor decision para tu futuro.
        </p>

        {/* Search Box */}
        <div className="w-full max-w-4xl rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-sm md:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Home className="h-4 w-4 text-primary" />
                Tipo
              </label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="bg-secondary">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Ubicacion
              </label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="bg-secondary">
                  <SelectValue placeholder="Seleccionar zona" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <DollarSign className="h-4 w-4 text-primary" />
                Precio
              </label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="bg-secondary">
                  <SelectValue placeholder="Rango de precio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50">Hasta $50M</SelectItem>
                  <SelectItem value="50-100">$50M - $100M</SelectItem>
                  <SelectItem value="100-200">$100M - $200M</SelectItem>
                  <SelectItem value="200-500">$200M - $500M</SelectItem>
                  <SelectItem value="500+">Mas de $500M</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button onClick={handleSearch} className="w-full gap-2" size="lg">
                <Search className="h-4 w-4" />
                Buscar ahora
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">150+</p>
            <p className="text-sm text-white/70">Propiedades</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-sm text-white/70">Clientes felices</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">10+</p>
            <p className="text-sm text-white/70">Anos de experiencia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
