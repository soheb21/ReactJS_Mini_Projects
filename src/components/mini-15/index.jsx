import { Route, Routes } from "react-router-dom"
import Navbar from './subcomponent/Navbar'
import Home from './Home/Home'
import Favroute from './Favroute/Favroute'
import Details from './Details/Details'

const FoodRecipe = () => {

    return (
        <div className='flexFamily'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/fav' element={<Favroute />} />
                <Route path='/:id' element={<Details />} />
            </Routes>
        </div>
    )
}

export default FoodRecipe