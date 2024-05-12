import { Swiper, SwiperSlide } from 'swiper/react'
import PlayIcon from '@/assets/play.svg'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Character } from '@/types/api'

type Props = {
  character: Character
}

export const CharacterScreen = ({ character }: Props) => {
  return (
    <div
      className={`grid w-full h-full grid-cols-(repeat(6,10vw)) gap-4 p-6 bg-[url('/channel.png')] bg-cover rounded-2xl relative`}
    >
      <div className="col-span-2 row-span-2 2xl:w-[10vw] 2xl:h-[10vw]">
        <img
          src={character.image}
          alt={`Character ${character.name} profile`}
          className="object-cover rounded-full"
        />
      </div>
      <div className="col-span-4 row-span-2 flex flex-col text-lg font-bold  gap-2 text-white">
        <span className="text-3xl mb-2">
          #{character.id} - {character.name}
        </span>
        <span className="text-base">Status: {character.status}</span>
        <span className="text-base">Especie: {character.species}</span>
        <span className="text-base">Genero: {character.gender}</span>
        <span className="text-base">Origem: {character.origin.name}</span>
        <span className="text-base">Localidade: {character.location.name}</span>
        <span className="text-base">
          Criada:{' '}
          {new Date(character.created)
            .toLocaleString('pt-BR')
            .replace(/,/g, '')}
        </span>
      </div>
      <div className="col-span-6 row-span-2 rounded-lg flex flex-col p-2 gap-4">
        <h2 className="text-2xl text-white font-bold">lista de episodios</h2>
        <div className="w-full flex items-center justify-center">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay
            className="2xl:w-[25vw]"
          >
            {character.episode.map((episode) => (
              <SwiperSlide key={`${character.id}.${episode}`} className="">
                <div className="flex items-center flex-col w-full ">
                  <div className="p-4 w-full h-full flex items-center justify-center bg-green-600 border border-gray-950 rounded-tr-2xl rounded-tl-2xl">
                    <PlayIcon className="w-5 h-5 fill-white" />
                  </div>
                  <footer className="flex flex-col items-center w-full border border-gray-950 rounded-br-2xl rounded-bl-2xl bg-black text-white text-xs p-4">
                    <span data-tooltip="episódio 1" className="text-center">
                      Episodio{' '}
                      {episode.replace(
                        'https://rickandmortyapi.com/api/episode/',
                        ''
                      )}
                    </span>
                  </footer>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
