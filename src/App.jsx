import './App.css'
import Accordion from './components/mini-1/Accordion'
import RandomColor from './components/mini-2/RandomColor'
import StartGiven from './components/mini-3/StartGiven'
import Carasoul from './components/mini-4/Carasoul'

function App() {

  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StartGiven /> */}
      <Carasoul
        url={"https://picsum.photos/v2/list"}
        limit={10}
        page={1}
      />
    </>
  )
}

export default App
