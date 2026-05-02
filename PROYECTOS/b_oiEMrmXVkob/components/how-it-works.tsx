import { Search, Heart, MessageCircle, Calendar } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Busca tu propiedad",
    description: "Usa nuestros filtros para encontrar exactamente lo que necesitas"
  },
  {
    icon: Heart,
    number: "2",
    title: "Elige la que te gusta",
    description: "Explora las fotos, detalles y caracteristicas de cada propiedad"
  },
  {
    icon: MessageCircle,
    number: "3",
    title: "Escribenos por WhatsApp",
    description: "Te respondemos en minutos con toda la informacion que necesitas"
  },
  {
    icon: Calendar,
    number: "4",
    title: "Agenda visita y compra",
    description: "Te acompanamos en todo el proceso hasta la entrega de tu propiedad"
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Proceso simple
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Comprar con nosotros es facil
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Te guiamos paso a paso para que encuentres tu propiedad ideal sin complicaciones
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mb-4 inline-flex">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {step.number}
                  </span>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
