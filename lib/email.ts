import type { Lead } from '@/types'

const RESEND_API_URL = 'https://api.resend.com/emails'

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function sendLeadEmail(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.DIEGO_LEAD_EMAIL
  const from = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !to || !from) {
    throw new Error('Resend email environment variables are incomplete')
  }

  const subjectParts = [
    'New TerraNova Lead',
    lead.budget || null,
    lead.service || null,
  ].filter(Boolean)

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#17231d">
      <h1 style="font-size:24px;margin-bottom:8px">New TerraNova Landscaping Lead</h1>
      <p style="margin-top:0;color:#5f6c65">A new website lead was submitted.</p>
      <table style="width:100%;border-collapse:collapse;margin-top:24px">
        <tbody>
          <tr><td style="padding:10px 0;font-weight:700">Name</td><td style="padding:10px 0">${escapeHtml(lead.name)}</td></tr>
          <tr><td style="padding:10px 0;font-weight:700">Phone</td><td style="padding:10px 0">${escapeHtml(lead.phone)}</td></tr>
          <tr><td style="padding:10px 0;font-weight:700">Email</td><td style="padding:10px 0">${escapeHtml(lead.email || 'Not provided')}</td></tr>
          <tr><td style="padding:10px 0;font-weight:700">City / Project</td><td style="padding:10px 0">${escapeHtml(lead.city)}</td></tr>
          <tr><td style="padding:10px 0;font-weight:700">Service</td><td style="padding:10px 0">${escapeHtml(lead.service)}</td></tr>
          <tr><td style="padding:10px 0;font-weight:700">Budget</td><td style="padding:10px 0">${escapeHtml(lead.budget || 'Not provided')}</td></tr>
          <tr><td style="padding:10px 0;font-weight:700">Timeline</td><td style="padding:10px 0">${escapeHtml(lead.timeline || 'Not provided')}</td></tr>
          <tr><td style="padding:10px 0;font-weight:700">Message</td><td style="padding:10px 0">${escapeHtml(lead.message || 'No additional message')}</td></tr>
          <tr><td style="padding:10px 0;font-weight:700">Source</td><td style="padding:10px 0">${escapeHtml(lead.source || 'website')}</td></tr>
          <tr><td style="padding:10px 0;font-weight:700">Landing page</td><td style="padding:10px 0">${escapeHtml(lead.landing_page || 'Not available')}</td></tr>
          <tr><td style="padding:10px 0;font-weight:700">Campaign</td><td style="padding:10px 0">${escapeHtml(lead.utm_campaign || 'Not available')}</td></tr>
          <tr><td style="padding:10px 0;font-weight:700">GCLID</td><td style="padding:10px 0">${escapeHtml(lead.gclid || 'Not available')}</td></tr>
        </tbody>
      </table>
      <div style="margin-top:28px;padding:16px;background:#eef3ef;border-radius:12px">
        <strong>Call lead:</strong>
        <a href="tel:${escapeHtml(lead.phone)}" style="color:#20342a">${escapeHtml(lead.phone)}</a>
      </div>
    </div>
  `

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: subjectParts.join(' — '),
      html,
      reply_to: lead.email || undefined,
    }),
  })

  if (!response.ok) {
    const details = await response.text()
    throw new Error(`Resend email failed: ${response.status} ${details}`)
  }

  return response.json()
}
