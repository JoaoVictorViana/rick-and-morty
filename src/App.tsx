import { Control } from './components/Control'
import { Monitor } from './components/Monitor'
import { CharacterScreen } from './components/Screen/Character'
import { LoadingScreen } from './components/Screen/Loading'
import { useCharacter } from './hooks/characters'

function App() {
  const { data, handleGetCharacter } = useCharacter()

  return (
    <main className="w-screen h-screen overflow-hidden flex justify-center items-center 2xl:gap-10">
      <Monitor>
        <LoadingScreen />
        {data && <CharacterScreen character={data} />}
      </Monitor>
      <Control onCharacterChange={handleGetCharacter} />
    </main>
  )
}

export default App
