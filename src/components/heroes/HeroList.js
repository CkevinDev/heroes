import { useMemo } from 'react';
import {getHeroesByPublisher} from '../../usecase/getHeroByPublisher'
import HeroCard from './HeroCard';

const HeroList = ({publisher}) => {

 
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <>
        <h1 className='text-2xl m-6 p-1 font-bold text-gray-500'>Hero List - {publisher}</h1>
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

export default HeroList