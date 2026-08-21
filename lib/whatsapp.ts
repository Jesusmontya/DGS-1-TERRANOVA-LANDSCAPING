import twilio from 'twilio'
import type { Lead } from '@/types'

export async function sendLeadWhatsApp(lead: Lead) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN
  const from = process.env.TWILIO_WHATSAPP_FROM
  const to = process.env.DIEGO_WHATSAPP_NUMBER

  if (!accountSid || !authToken || !from || !to) {
    throw new Error('Twilio WhatsApp environment variables are incomplete')
  }

  if (!accountSid.startsWith('AC')) {
    throw new Error('TWILIO_ACCOUNT_SID must be your Twilio Account SID starting with AC')
  }

  const client = twilio(accountSid, authToken)

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
    from,
    to,
    body: message,
  })
}
