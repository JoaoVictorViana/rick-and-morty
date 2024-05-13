import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Character } from '@/types/api'
import { Tooltip } from '../Tooltip'

type Props = {
  character: Character
}

export const CharacterScreen = ({ character }: Props) => {
  return (
    <div
      className={`grid w-full h-full grid-cols-(repeat(6,10vw)) gap-2 2xl:gap-4 p-6 bg-[url('/channel.png')] bg-cover rounded-2xl relative`}
    >
      <div className="col-span-2 row-span-2 w-[10vw] h-[10vw]">
        <img
          src={character.image}
          alt={`Character ${character.name} profile`}
          className="object-cover rounded-full"
        />
      </div>
      <div className="lg:h-full col-span-4 row-span-2 flex flex-col text-lg font-bold w-full gap-2 text-white">
        <Tooltip
          className="text-sm lg:text-xl 2xl:text-3xl 2xl:mb-2"
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
      <div className="col-span-6 row-span-2 rounded-lg flex flex-col p-2 gap-2 2xl:gap-4">
        <h2 className="text-2xl text-white font-bold">lista de episodios</h2>
        <div className="w-full flex items-center">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay
            className="w-[50vw] 2xl:w-[25vw] lg:w-[20vw]"
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
      </div>
    </div>
  )
}
