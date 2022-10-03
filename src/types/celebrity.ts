export type Celebrity = {
  id: string
  name: string
  imageUrl: string
  status: 'GOOD' | 'BAD' | 'UGLY'
  statusReferenceUrl?: string | null
  category: 'ACTOR' | 'SINGER' | 'MODEL' | 'ART' | 'ATHLETE'
  socialAccounts: {
    type: string
    url: string
  }[]
}
