export interface Lead {
  id?:         string
  created_at?: string
  name:        string
  phone:       string
  email?:      string
  city:        string
  service:     string
  message?:    string
  status?:     'new' | 'contacted' | 'quoted' | 'closed' | 'lost'
  source?:     'website' | 'google_ads' | 'maps' | 'referral'
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
