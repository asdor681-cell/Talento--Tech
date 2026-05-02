"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { properties, locations, propertyTypes } from "@/lib/properties-data"

export default function PropertiesPage() {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState(searchParams.get("type") || "todos")
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get("location") || "Todos")
  const [selectedPrice, setSelectedPrice] = useState(searchParams.get("price") || "")
  const [sortBy, setSortBy] = useState("recent")

  const filteredProperties = useMemo(() => {
    let result = [...properties]

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term) ||
        p.location.toLowerCase().includes(term)
      )
    }

    // Filter by type
    if (selectedType && selectedType !== "todos") {
      result = result.filter(p => p.type === selectedType)
    }

    // Filter by location
    if (selectedLocation && selectedLocation !== "Todos") {
      result = result.filter(p => p.location.includes(selectedLocation))
    }

    // Filter by price
    if (selectedPrice) {
      const [min, max] = selectedPrice.split("-").map(v => v === "+" ? Infinity : Number(v) * 1000000)
      result = result.filter(p => p.price >= (min || 0) && p.price <= (max || Infinity))
    }

    // Sort
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === "size") {
      result.sort((a, b) => b.size - a.size)
    }

    return result
  }, [searchTerm, selectedType, selectedLocation, selectedPrice, sortBy])

  const activeFiltersCount = [
    selectedType !== "todos" ? 1 : 0,
    selectedLocation !== "Todos" ? 1 : 0,
    selectedPrice ? 1 : 0
  ].reduce((a, b) => a + b, 0)

  const clearFilters = () => {
    setSelectedType("todos")
    setSelectedLocation("Todos")
    setSelectedPrice("")
    setSearchTerm("")
  }

  const FilterControls = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Tipo de propiedad</label>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger>
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
        <label className="text-sm font-medium text-foreground">Ubicacion</label>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar ubicacion" />
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
        <label className="text-sm font-medium text-foreground">Rango de precio</label>
        <Select value={selectedPrice} onValueChange={setSelectedPrice}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar precio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los precios</SelectItem>
            <SelectItem value="0-50">Hasta $50M</SelectItem>
            <SelectItem value="50-100">$50M - $100M</SelectItem>
            <SelectItem value="100-200">$100M - $200M</SelectItem>
            <SelectItem value="200-500">$200M - $500M</SelectItem>
            <SelectItem value="500-+">Mas de $500M</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {activeFiltersCount > 0 && (
        <Button variant="outline" onClick={clearFilters} className="w-full gap-2">
          <X className="h-4 w-4" />
          Limpiar filtros
        </Button>
      )}
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Header */}
        <div className="border-b border-border bg-secondary py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Propiedades disponibles
            </h1>
            <p className="text-muted-foreground">
              Encuentra tu propiedad ideal entre nuestro catalogo de opciones verificadas
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Search and filters bar */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre o ubicacion..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile filter button */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="outline" className="gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filtros
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-1 h-5 w-5 rounded-full p-0 text-xs">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterControls />
                  </div>
                </SheetContent>
              </Sheet>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Mas recientes</SelectItem>
                  <SelectItem value="price-asc">Menor precio</SelectItem>
                  <SelectItem value="price-desc">Mayor precio</SelectItem>
                  <SelectItem value="size">Mayor tamano</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar filters */}
            <aside className="hidden w-64 shrink-0 md:block">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 font-semibold text-card-foreground">Filtros</h3>
                <FilterControls />
              </div>
            </aside>

            {/* Properties grid */}
            <div className="flex-1">
              {filteredProperties.length > 0 ? (
                <>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {filteredProperties.length} propiedad{filteredProperties.length !== 1 ? "es" : ""} encontrada{filteredProperties.length !== 1 ? "s" : ""}
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProperties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="mb-4 rounded-full bg-muted p-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    No se encontraron propiedades
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Intenta ajustar los filtros o buscar con otros terminos
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
