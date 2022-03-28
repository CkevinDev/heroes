import { Link } from "react-router-dom"

const HeroCard = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters,
    imgUrl
}) => {


  return (
    <div className='ease-in-out duration-300 relative rounded-2xl flex justify-between bg-gray-900'>
      <div className=" w-1/2">
         <img className="object-cover rounded-xl" src={imgUrl} alt={superhero} />
      </div>
      <div className=" text-white w-1/2 text-center">
        <p className=" p-1 text-2xl md:text-lg font-bold xl:text-base">{superhero}</p>
        <p className=" p-2 text-xl md:text-lg font-bold xl:text-base">{alter_ego}</p>
        {
          (alter_ego !== characters) &&
          <p className="text-gray-600">{characters}</p>
        }

        <div className="flex justify-center">
          <Link className="absolute bottom-2 font-bold text-lg text-blue-500" to={`/hero/${id}`}>
            Más...
          </Link>
        </div>

      </div>
                
    </div>
  )
}

export default HeroCard