"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  message?: string
  phoneNumber?: string
}

export function WhatsAppButton({ 
  message = "Hola, me interesa recibir informacion sobre sus propiedades", 
  phoneNumber = "573001234567" 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#20BD5A] md:h-auto md:w-auto md:rounded-lg md:px-6"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-white md:mr-2" />
      <span className="hidden text-white md:inline">Hablar por WhatsApp</span>
    </Button>
  )
}
