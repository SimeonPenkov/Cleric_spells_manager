import { request } from './requester'

const baseUrl = 'https://www.dnd5eapi.co/api/classes/cleric/spells'

export const getAll = async () => {

    const spells = await request('GET', baseUrl)

    return spells
}