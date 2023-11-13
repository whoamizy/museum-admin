export interface CollectionItem {
  _id: string
  imageId: string
  name: string
  author: string
  year: string
  collectionName: Collection
}

export interface CollectionItemPayload {
  imageId: string
  name: string
  author: string
  year: string
  collectionName: Collection | string
}

export interface Collection {
  _id: string
  name: string
}

export interface CollectionPayload {
  name: string
}