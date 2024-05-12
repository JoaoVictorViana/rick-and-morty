import { Character } from '@/types/api'
import axios from 'axios'

export const getCharacterById = (id: number) =>
  axios
    .get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.data)
