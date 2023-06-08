export type LocationType = {
    id: number
    name: string
    type: string
    dimension: string
    residents: string[]
    url: string
    created: string
  }
  
  export type MetaData = {
    count: number
    pages: number
    prev: string|null
    next: string|null
  }
  
  
  export type Response<T> = {
    info: MetaData,
    results: T
  }