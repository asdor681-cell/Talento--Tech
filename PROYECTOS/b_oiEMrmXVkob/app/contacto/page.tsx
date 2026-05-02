"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Header */}
        <div className="border-b border-border bg-secondary py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Contactanos
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Buscas algo especifico? Nosotros te ayudamos a encontrar la propiedad perfecta para ti.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Estamos aqui para ayudarte
              </h2>
              <p className="mb-8 text-muted-foreground">
                Nuestro equipo de asesores esta listo para responder todas tus preguntas y ayudarte a encontrar la propiedad ideal en el Cauca.
              </p>

              <div className="space-y-6">
                <Card className="border-border bg-card">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">Telefono</p>
                      <p className="text-muted-foreground">+57 300 123 4567</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">+57 300 123 4567</p>
                      <Button 
                        variant="link" 
                        className="h-auto p-0 text-primary"
                        onClick={() => window.open("https://wa.me/573001234567", "_blank")}
                      >
                        Enviar mensaje
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">Email</p>
                      <p className="text-muted-foreground">info@caucaraiz.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">Ubicacion</p>
                      <p className="text-muted-foreground">Popayan, Cauca, Colombia</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Hours */}
              <div className="mt-8 rounded-xl border border-border bg-secondary p-6">
                <h3 className="mb-4 font-semibold text-foreground">Horario de atencion</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunes - Viernes</span>
                    <span className="text-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sabados</span>
                    <span className="text-foreground">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingos</span>
                    <span className="text-foreground">Solo con cita previa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <Card className="border-border bg-card">
                <CardContent className="p-6 md:p-8">
                  <h2 className="mb-6 font-serif text-2xl font-bold text-card-foreground">
                    Envianos un mensaje
                  </h2>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                        Mensaje enviado
                      </h3>
                      <p className="text-muted-foreground">
                        Te contactaremos muy pronto. Gracias por tu interes!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <FieldGroup>
                        <Field>
                          <FieldLabel>Nombre completo</FieldLabel>
                          <Input
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </Field>

                        <Field>
                          <FieldLabel>Telefono</FieldLabel>
                          <Input
                            type="tel"
                            placeholder="Tu numero de telefono"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </Field>

                        <Field>
                          <FieldLabel>Email (opcional)</FieldLabel>
                          <Input
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </Field>

                        <Field>
                          <FieldLabel>Que estas buscando?</FieldLabel>
                          <Select 
                            value={formData.interest} 
                            onValueChange={(value) => setFormData({ ...formData, interest: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una opcion" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="casa">Quiero comprar una casa</SelectItem>
                              <SelectItem value="lote">Quiero comprar un lote</SelectItem>
                              <SelectItem value="parcela">Quiero comprar una parcela</SelectItem>
                              <SelectItem value="apartamento">Quiero comprar un apartamento</SelectItem>
                              <SelectItem value="finca">Quiero comprar una finca</SelectItem>
                              <SelectItem value="invertir">Quiero invertir</SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </Field>

                        <Field>
                          <FieldLabel>Mensaje</FieldLabel>
                          <Textarea
                            placeholder="Cuentanos mas sobre lo que buscas..."
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          />
                        </Field>

                        <Button type="submit" className="w-full gap-2" size="lg">
                          <Send className="h-4 w-4" />
                          Quiero que me contacten
                        </Button>
                      </FieldGroup>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
