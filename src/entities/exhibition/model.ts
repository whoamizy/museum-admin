export interface Exhibition {
  _id: string
  name: string
  images: string[]
  description: string
  address: string
}

export interface ExhibitionPayload {
  name: string
  images: string[]
  description: string
  address: string
}