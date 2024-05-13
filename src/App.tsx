import { Control } from './components/Control'
import { Monitor } from './components/Monitor'
import { CharacterScreen } from './components/Screen/Character'
import { MobileScreen } from './components/Screen/Mobile'
import { useCharacter } from './hooks/characters'

function App() {
  const { data, handleGetCharacter } = useCharacter()

  return (
    <main className="">
      <div className="w-screen h-screen overflow-hidden justify-center items-center  lg:flex flex-row gap-10 hidden">
        <Monitor>
          {/* <LoadingScreen /> */}
          {data && <CharacterScreen character={data} />}
        </Monitor>
        <Control onCharacterChange={handleGetCharacter} />
      </div>
      <div className="w-screen h-screen overflow-hidden justify-center items-center lg:hidden flex">
        <MobileScreen />
      </div>
    </main>
  )
}

export default App
