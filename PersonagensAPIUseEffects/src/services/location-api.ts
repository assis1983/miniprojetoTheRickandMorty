import { LocationType, Response } from "../types/location-types"



const baseUrl = `https://rickandmortyapi.com/api`

export async function locationApi(type = ' ', page = 1): Promise<Response<LocationType[]>> {
    const response = await fetch (`${baseUrl}/location?type=${type}&page=${page}`)
    return await response.json()
}