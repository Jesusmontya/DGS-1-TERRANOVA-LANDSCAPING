export interface Lead {
  id?:         string
  created_at?: string
  name:        string
  phone:       string
  email?:      string
  city:        string
  service:     string
  message?:    string
  budget?:     string | null
  timeline?:   string | null
  landing_page?: string | null
  referrer?:   string | null
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  gclid?:      string | null
  status?:     'new' | 'contacted' | 'estimate_scheduled' | 'estimate_sent' | 'won' | 'lost'
  source?:     'website' | 'google_ads' | 'maps' | 'referral'
  estimated_value?: number | null
  notes?:      string | null
  first_contacted_at?: string | null
  updated_at?: string | null
}

export interface Service {
  slug:        string
  title:       string
  description: string
  shortDesc:   string
  icon:        string
  keywords?:   string[]
  featured?:   boolean
}

export interface ServiceArea {
  city:      string
  state:     string
  slug:      string
  keywords?: string[]
  featured?: boolean
}

export interface Project {
  id:         string
  title:      string
  category:   string
  location:   string
  imageUrl:   string
  beforeUrl?: string
  featured?:  boolean
}
