import Home from './pages/Home'
import About from './pages/About'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function Navigation () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
        </Routes>
        </BrowserRouter>
    )
}