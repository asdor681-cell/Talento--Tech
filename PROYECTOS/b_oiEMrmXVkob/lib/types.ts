export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  zone: string
  type: "casa" | "lote" | "parcela" | "apartamento" | "finca"
  size: number
  sizeUnit: string
  bedrooms?: number
  bathrooms?: number
  features: string[]
  images: string[]
  videoUrl?: string
  isFeatured: boolean
  isUrgent: boolean
  purpose: "vivir" | "invertir" | "descanso"
  createdAt: string
}

export interface SearchFilters {
  type: string
  location: string
  minPrice: number
  maxPrice: number
  minSize: number
  maxSize: number
}
