import { useCharacter } from '@/hooks/characters'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Tooltip } from '../Tooltip'

export const MobileScreen = () => {
  const [characterInput, setCharacterInput] = useState(1)
  const { data: character, handleGetCharacter } = useCharacter()

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCharacterInput(Number(e.target.value))
  }, [])

  const handlePrev = useCallback(() => {
    setCharacterInput((prev) => prev - 1)
  }, [])

  const handleNext = useCallback(() => {
    setCharacterInput((prev) => prev + 1)
  }, [])

  useEffect(() => {
    handleGetCharacter(characterInput)
  }, [characterInput])

  if (!character) return

  return (
    <div className="flex flex-col gap-4 items-center w-full p-5">
      <header>
        <h1 className="text-3xl font-bold">Rick and Morty</h1>
      </header>

      <input
        name="character"
        type="number"
        className="p-4 text-black border border-black"
        placeholder="1"
        onChange={handleChangeInput}
        value={characterInput}
        min={1}
      />

      <div className="flex gap-4 items-center">
        <button
          className="control-button disabled:bg-gray-700"
          disabled={characterInput === 1}
          onClick={handlePrev}
        >
          Voltar
        </button>
        <div className="rounded-full bg-white" />
        <div className="w-[30vw] h-[30vw]">
          <img
            src={character.image}
            alt={`Character ${character.name} profile`}
            className="object-cover rounded-full"
          />
        </div>
        <button className="control-button" onClick={handleNext}>
          Proximo
        </button>
      </div>

      <div className="lg:h-full col-span-4 row-span-2 flex flex-col text-lg font-bold w-full gap-2 text-black">
        <Tooltip
          className="text-xl mb-2"
          text={`#${character.id} - ${character.name}`}
        />
        <div className="grid grid-cols-[1fr_1fr] 2xl:grid-cols-1 gap-y-2">
          <div className="profile-item">
            <span>Status:</span>
            <Tooltip text={character.status} />
          </div>
          <div className="profile-item">
            <span>Especie:</span>
            <Tooltip text={character.species} />
          </div>
          <div className="profile-item">
            <span>Genero:</span>
            <Tooltip text={character.gender} />
          </div>
          <div className="profile-item">
            <span>Origem:</span>
            <Tooltip text={character.origin.name} />
          </div>
          <div className="profile-item">
            <span>Localidade:</span>
            <Tooltip text={character.location.name} />
          </div>
          <div className="profile-item">
            <span>Criada:</span>
            <Tooltip
              text={new Date(character.created)
                .toLocaleString('pt-BR')
                .replace(/,/g, '')}
            />
          </div>
        </div>
      </div>

      <footer className="col-span-6 row-span-2 rounded-lg flex flex-col gap-2">
        <h2 className="text-2xl text-black font-bold">lista de episodios</h2>
        <div className="w-full flex items-center">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay
            className="w-[80vw]"
          >
            {character.episode.map((episode) => (
              <SwiperSlide key={`${character.id}.${episode}`} className="">
                <div className="flex items-center flex-col w-full ">
                  <footer className="flex flex-col items-center w-full border border-gray-950 rounded-2xl 2xl:rounded-br-2xl 2xl:rounded-bl-2xl bg-black text-white text-xs p-1 2xl:p-4">
                    <div
                      data-tooltip="episódio 1"
                      className="text-center flex gap-1"
                    >
                      <span>Episodio</span>
                      <span>
                        {episode.replace(
                          'https://rickandmortyapi.com/api/episode/',
                          ''
                        )}
                      </span>
                    </div>
                  </footer>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </footer>
    </div>
  )
}
