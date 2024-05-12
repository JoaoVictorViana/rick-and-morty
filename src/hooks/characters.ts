import { getCharacterById } from '@/fetchers/show'
import { Character } from '@/types/api'
import { useCallback, useState } from 'react'

export function useCharacter() {
  const [data, setData] = useState<Character>()

  const handleGetCharacter = useCallback(async (id: number) => {
    const res = await getCharacterById(id)

    if (!res) {
      return
    }

    setData(res)
  }, [])

  return {
    data,
    handleGetCharacter,
  }
}
