import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroesById } from "../../usecase/getHeroById";


const HeroScreen = () => {

  const {heroId} = useParams();
  const navigate = useNavigate();

  const heroe = useMemo(() => getHeroesById(heroId),[heroId])
 

  if(!heroe){
    return <Navigate to='/'/>
  }

  const handleReturn = () => {
    navigate(-1);
  }

  const imgPath = `/assets/${heroe.id}.jpg`

  return (
    <div className="w-full flex justify-center ">
      <div className="m-6 gap-6 lg:gap-24 flex h-min">
        <div className="flex-1">
          <img className="object-cover rounded-xl" src={imgPath} alt={heroe.superhero} />
        </div>
        <div className="text-gray-900 flex-1">
          <p className="text-xl lg:text-4xl text-gray-900 mt-4 font-bold">{heroe.superhero}</p>
          <p className="text-lg lg:text-2xl text-gray-600 mt-4 font-bold"><span className="text-black">Alter ego: </span>{heroe.alter_ego}</p>
          <p className="text-lg lg:text-2xl text-gray-600 mt-4 font-bold"><span className="text-black">Publisher: </span>{heroe.publisher}</p>
          <div className="border-b-2 border-gray-500 mt-4"></div>
          <p className="text-lg lg:text-2xl text-gray-600 mt-4 font-bold"><span className="text-black">Primera aparición: </span>{heroe.first_appearance}</p>
          <div className="flex items-start text-lg lg:text-2xl text-gray-600 mt-4 font-bold">
            <span className=" text-black">Publisher: </span>
            <p className="ml-3">{heroe.characters}</p>
          </div>
          <button onClick={handleReturn} className="hover:bg-purple-600 border-2 border-purple-600 p-4 mt-8 hover:text-white text-purple-600 font-bold text-xl  rounded-lg">Regresar</button>
        </div>
      </div>
    </div>
  )
}

export default HeroScreen