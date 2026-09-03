'use client'

import { useEffect, useState } from 'react'

// A low-friction signal used by the server alongside other anti-spam checks.
export function useLeadFormSecurity() {
  const [startedAt, setStartedAt] = useState(0)
  useEffect(() => setStartedAt(Date.now()), [])
  return { startedAt }
}
