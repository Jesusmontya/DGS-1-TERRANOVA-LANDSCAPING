export interface Lead {
  id?:         string
  created_at?: string
  name:        string
  phone:       string
  email?:      string
  city:        string
  service:     string
  message?:    string
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
