import twilio from 'twilio'
import type { Lead } from '@/types'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export async function sendLeadWhatsApp(lead: Lead) {
  const message = `
🌿 *NUEVO LEAD — TerraNova Landscaping*

👤 *Nombre:* ${lead.name}
📞 *Teléfono:* ${lead.phone}
📧 *Email:* ${lead.email || 'No proporcionó'}
📍 *Ciudad:* ${lead.city}
🛠 *Servicio:* ${lead.service}
💬 *Mensaje:* ${lead.message || 'Sin mensaje adicional'}

⏰ ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}

👉 Responde en menos de 5 minutos — los leads rápidos cierran 3x más.
`.trim()

  await client.messages.create({
    from: process.env.TWILIO_WHATSAPP_FROM!,
    to:   process.env.DIEGO_WHATSAPP_NUMBER!,
    body: message,
  })
}
