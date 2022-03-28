import NavbarScreen from "../components/ui/NavbarScreen"
import MarvelScreen from "../components/marvel/MarvelScreen";
import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchScreen";
import { Routes, Route } from "react-router-dom";
import HeroScreen from "../components/heroes/HeroScreen";


const DashboardRoutes = () => {
  return (
    <>
        <NavbarScreen/>
        <Routes>
            <Route path="/" element={<MarvelScreen />} />
            <Route path="/heroes" element={<MarvelScreen />} />
            <Route path="hero/:heroId" element={<HeroScreen />} />
            <Route path="marvel" element={<MarvelScreen />} />
            <Route path="dc" element={<DcScreen />} />
            <Route path="search" element={<SearchScreen />} />
        </Routes>
    </>
  )
}

export default DashboardRoutes