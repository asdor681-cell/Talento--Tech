import { Property } from "./types"

export const properties: Property[] = [
  {
    id: "1",
    title: "Lote con vista espectacular en zona rural",
    description: "Hermoso lote ideal para construir o invertir, ubicado en una zona tranquila con excelente acceso. Perfecto para descanso o proyecto productivo. Cuenta con vista panoramica a las montanas del Cauca y acceso a servicios basicos.",
    price: 35000000,
    location: "Popayan",
    zone: "Rural",
    type: "lote",
    size: 1500,
    sizeUnit: "m2",
    features: ["Vista panoramica", "Acceso vehicular", "Escritura publica", "Servicios disponibles"],
    images: ["/properties/lote-1.jpg", "/properties/lote-1-2.jpg"],
    isFeatured: true,
    isUrgent: true,
    purpose: "invertir",
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    title: "Casa campestre con amplios espacios",
    description: "Hermosa casa campestre ideal para vivir en familia. Cuenta con amplios espacios, jardin, zona BBQ y parqueadero. Ubicada en zona tranquila con excelente clima.",
    price: 280000000,
    location: "Popayan",
    zone: "Campestre",
    type: "casa",
    size: 250,
    sizeUnit: "m2",
    bedrooms: 4,
    bathrooms: 3,
    features: ["Jardin", "Zona BBQ", "Parqueadero doble", "Cocina integral", "Piscina"],
    images: ["/properties/casa-1.jpg", "/properties/casa-1-2.jpg"],
    isFeatured: true,
    isUrgent: false,
    purpose: "vivir",
    createdAt: "2024-01-10"
  },
  {
    id: "3",
    title: "Parcela productiva con agua propia",
    description: "Excelente parcela para proyecto productivo o descanso. Cuenta con nacimiento de agua propio, arboles frutales y terreno plano. Ideal para agricultura organica.",
    price: 85000000,
    location: "Timbio",
    zone: "Rural",
    type: "parcela",
    size: 5000,
    sizeUnit: "m2",
    features: ["Agua propia", "Arboles frutales", "Terreno plano", "Cerco perimetral"],
    images: ["/properties/parcela-1.jpg"],
    isFeatured: true,
    isUrgent: false,
    purpose: "invertir",
    createdAt: "2024-01-08"
  },
  {
    id: "4",
    title: "Apartamento moderno en el centro",
    description: "Apartamento nuevo con acabados de primera. Ubicado en el centro de Popayan, cerca de todo. Ideal para vivir o arrendar con excelente rentabilidad.",
    price: 180000000,
    location: "Popayan Centro",
    zone: "Urbano",
    type: "apartamento",
    size: 85,
    sizeUnit: "m2",
    bedrooms: 3,
    bathrooms: 2,
    features: ["Ascensor", "Parqueadero", "Vigilancia 24h", "Zona social"],
    images: ["/properties/apto-1.jpg"],
    isFeatured: false,
    isUrgent: true,
    purpose: "vivir",
    createdAt: "2024-01-05"
  },
  {
    id: "5",
    title: "Lote esquinero en zona de expansion",
    description: "Excelente oportunidad de inversion. Lote esquinero en zona de alta valorizacion. Ideal para proyecto comercial o residencial.",
    price: 120000000,
    location: "Popayan Norte",
    zone: "Urbano",
    type: "lote",
    size: 800,
    sizeUnit: "m2",
    features: ["Esquinero", "Zona comercial", "Servicios completos", "Alta valorizacion"],
    images: ["/properties/lote-2.jpg"],
    isFeatured: false,
    isUrgent: false,
    purpose: "invertir",
    createdAt: "2024-01-03"
  },
  {
    id: "6",
    title: "Finca cafetera tradicional",
    description: "Hermosa finca con tradicion cafetera. Incluye cultivo de cafe de alta calidad, casa principal y casa de trabajadores. Excelente produccion anual.",
    price: 450000000,
    location: "Caldono",
    zone: "Rural",
    type: "finca",
    size: 30000,
    sizeUnit: "m2",
    bedrooms: 5,
    bathrooms: 3,
    features: ["Cultivo de cafe", "Casa principal", "Casa trabajadores", "Beneficiadero"],
    images: ["/properties/finca-1.jpg"],
    isFeatured: true,
    isUrgent: false,
    purpose: "invertir",
    createdAt: "2024-01-01"
  }
]

export const locations = [
  "Todos",
  "Popayan",
  "Popayan Centro",
  "Popayan Norte",
  "Timbio",
  "Caldono",
  "Piendamo",
  "Silvia",
  "Santander de Quilichao"
]

export const propertyTypes = [
  { value: "todos", label: "Todos" },
  { value: "casa", label: "Casa" },
  { value: "lote", label: "Lote" },
  { value: "parcela", label: "Parcela" },
  { value: "apartamento", label: "Apartamento" },
  { value: "finca", label: "Finca" }
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

export function formatSize(size: number, unit: string): string {
  return `${size.toLocaleString('es-CO')} ${unit}`
}
