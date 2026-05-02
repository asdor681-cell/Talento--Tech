import { Shield, Users, CheckCircle, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Propiedades verificadas",
    description: "Cada propiedad es revisada y verificada antes de publicarse"
  },
  {
    icon: Users,
    title: "Asesoria personalizada",
    description: "Te acompanamos en cada paso del proceso de compra"
  },
  {
    icon: CheckCircle,
    title: "Transparencia total",
    description: "Precios claros, sin costos ocultos ni sorpresas"
  },
  {
    icon: Award,
    title: "Experiencia comprobada",
    description: "Mas de 10 anos ayudando a familias a encontrar su hogar"
  }
]

export function TrustSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Por que elegirnos
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Mas que ventas, te ayudamos a tomar la mejor decision
            </h2>
            <p className="mb-8 text-lg text-muted-foreground text-pretty">
              Entendemos que comprar una propiedad es una de las decisiones mas importantes de tu vida. 
              Por eso, nuestro compromiso es brindarte un servicio honesto, transparente y profesional.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div 
              className="aspect-[4/3] overflow-hidden rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80')"
              }}
            />
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-6 shadow-xl">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Familias satisfechas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
