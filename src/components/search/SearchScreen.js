import { useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getHeroesByName } from "../../usecase/getHeroByName"
import HeroCard from "../heroes/HeroCard"


const SearchScreen = () => {

  const [inputChange, setInputChange] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${inputChange}`)
  }

  const heroes = useMemo(() => getHeroesByName(inputChange), [inputChange])

  return (
    <>
      <div className="bg-white m-6 rounded-md  border-2 border-black ">
        <form onSubmit={handleSearch} className="flex">
          <input
            className=" p-4 bg-transparent w-full outline-none text-gray-800"
            type="text"
            placeholder="search"
            name="heroe"
            onChange={(e) => setInputChange(e.target.value)}            
          />
          <button className="border-l-2 border-gray-800 bg-gray-800 rounded-r-md text-white p-4">
            Search
          </button>
        </form>
      </div>

      <ul>
          <div className=' grid mx-6 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              heroes.map(hero => (
              
                  <HeroCard {...hero} key={hero.id} />
                
              ))
            }
          </div>
          
        </ul>

    </>
  )
}

export default SearchScreen