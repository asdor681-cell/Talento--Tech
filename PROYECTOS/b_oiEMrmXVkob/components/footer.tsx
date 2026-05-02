import Link from "next/link"
import { Home, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold">Cauca Raiz</span>
                <span className="text-xs text-background/70">Propiedades</span>
              </div>
            </Link>
            <p className="mb-4 text-sm text-background/70">
              Tu aliado confiable en la busqueda de propiedades en el Cauca. Mas de 10 anos de experiencia.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold">Propiedades</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/propiedades?type=casa" className="transition-colors hover:text-primary">Casas</Link></li>
              <li><Link href="/propiedades?type=lote" className="transition-colors hover:text-primary">Lotes</Link></li>
              <li><Link href="/propiedades?type=parcela" className="transition-colors hover:text-primary">Parcelas</Link></li>
              <li><Link href="/propiedades?type=apartamento" className="transition-colors hover:text-primary">Apartamentos</Link></li>
              <li><Link href="/propiedades?type=finca" className="transition-colors hover:text-primary">Fincas</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="mb-4 font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/" className="transition-colors hover:text-primary">Inicio</Link></li>
              <li><Link href="/propiedades" className="transition-colors hover:text-primary">Todas las propiedades</Link></li>
              <li><Link href="/contacto" className="transition-colors hover:text-primary">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contacto</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@caucaraiz.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Popayan, Cauca, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-6 text-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} Cauca Raiz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
