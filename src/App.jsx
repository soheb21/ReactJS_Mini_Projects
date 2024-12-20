import './App.css'
import Accordion from './components/mini-1/Accordion'
import Model from './components/mini-10/Model'
import SearchSuggestion from './components/mini-11/searchSuggestion'
import TicTacToe from './components/mini-12/TicTacToe'
import FeatureFlagState from './components/mini-13/Context'
import FlagComponent from './components/mini-13/FlagComponent'
import ScrollBottomToTop from './components/mini-14/ScrollBottomToTop'
import FoodRecipe from './components/mini-15'
import RandomColor from './components/mini-2/RandomColor'
import StartGiven from './components/mini-3/StartGiven'
import Carasoul from './components/mini-4/Carasoul'
import SideBar from './components/mini-5/SideBar'
import QRGenerator from './components/mini-6/QRGenerator'
import ThemeChanger from './components/mini-7/themeChanger'
import ProgressBar from './components/mini-8/ProgressBar'
import Tab from './components/mini-9/Tab'
import GlobalStateProvider from "./components/mini-15/context/index"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StartGiven /> */}
      {/* <Carasoul
        url={"https://picsum.photos/v2/list"}
        limit={10}
        page={1}
      /> */}

      {/* <SideBar /> */}
      {/* <QRGenerator/> */}
      {/* <ThemeChanger /> */}
      {/* <ProgressBar /> */}
      {/* <Tab /> */}
      {/* <Prac /> */}

      {/* <Model /> */}
      {/* <SearchSuggestion/> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagState>
        <FlagComponent />
      </FeatureFlagState> */}
      {/* <ScrollBottomToTop /> */}
      <BrowserRouter>
        <GlobalStateProvider>
          <FoodRecipe />
        </GlobalStateProvider>
      </BrowserRouter>

    </>
  )
}

export default App
