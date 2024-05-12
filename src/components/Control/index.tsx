import { ChangeEvent, useCallback, useEffect, useState } from 'react'

type Props = {
  onCharacterChange: (id: number) => void
}

export const Control = ({ onCharacterChange }: Props) => {
  const [characterInput, setCharacterInput] = useState(1)

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCharacterInput(Number(e.target.value))
  }, [])

  const handlePrev = useCallback(() => {
    setCharacterInput((prev) => prev - 1)
  }, [])

  const handleNext = useCallback(() => {
    setCharacterInput((prev) => prev + 1)
  }, [])

  const handleAddNumeric = useCallback((numeric: number) => {
    setCharacterInput((prev) => Number(`${prev}${numeric}`))
  }, [])

  const handleClear = useCallback(() => {
    setCharacterInput(1)
  }, [])

  const handleDelete = useCallback(() => {
    setCharacterInput((prev) =>
      Number(prev.toString().substring(0, prev.toString().length - 1))
    )
  }, [])

  useEffect(() => {
    if (!characterInput) return

    onCharacterChange(Number(characterInput))
  }, [characterInput])

  return (
    <section className="grid grid-cols-3 gap-3 p-4 bg-orange-800 text-white">
      <h3 className="col-span-3 text-center text-2xl">
        Rick and Morty Control
      </h3>
      <input
        name="character"
        type="number"
        className="col-span-3 p-4 text-black"
        placeholder="1"
        onChange={handleChangeInput}
        value={characterInput}
        min={1}
      />
      <button
        className="control-button disabled:bg-gray-700"
        disabled={characterInput === 1}
        onClick={handlePrev}
      >
        Voltar
      </button>
      <div className="rounded-full bg-white" />
      <button className="control-button" onClick={handleNext}>
        Proximo
      </button>
      <button className="control-button" onClick={() => handleAddNumeric(7)}>
        7
      </button>
      <button className="control-button" onClick={() => handleAddNumeric(8)}>
        8
      </button>
      <button className="control-button" onClick={() => handleAddNumeric(9)}>
        9
      </button>
      <button className="control-button" onClick={() => handleAddNumeric(4)}>
        4
      </button>
      <button className="control-button" onClick={() => handleAddNumeric(5)}>
        5
      </button>
      <button className="control-button" onClick={() => handleAddNumeric(6)}>
        6
      </button>
      <button className="control-button" onClick={() => handleAddNumeric(1)}>
        1
      </button>
      <button className="control-button" onClick={() => handleAddNumeric(2)}>
        2
      </button>
      <button className="control-button" onClick={() => handleAddNumeric(3)}>
        3
      </button>
      <button className="control-button" onClick={handleClear}>
        Limpar
      </button>
      <button className="control-button" onClick={() => handleAddNumeric(0)}>
        0
      </button>
      <button className="control-button" onClick={handleDelete}>
        X
      </button>
    </section>
  )
}
