interface Profile {
  name: string
  location: string
  company: string
  office: string
  contact: string
  picture: string
}

export const profile: Profile = {
  name: 'Matheus Ricardo Brunelli',
  location: 'Dourarina, PR',
  company: 'Compass UOL',
  office: 'Dev. Sênior',
  contact: 'https://linktr.ee/mrbrunelli.dev',
  picture: `${process.env.PUBLIC_URL}/images/profile.jpg`
}
