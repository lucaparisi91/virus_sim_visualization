
import Image from "next/image";
import { createRoot } from 'react-dom/client';
import { PeopleMap} from './peopleMap.tsx'

const getData = (n) =>  Array(n).fill(0).map( (_,i)=> { return { x: Math.random(), y: Math.random(), status : "susceptible"  } }  )

const getObstacles = () => [
  {
      x : 0,
      y : 0.8,
      width: 0.3,
      height: 0.2    
  },
  {
    x : 0.6,
    y : 1,
    width: 0.1,
    height: 0.8    
}
]



export default function Home() {
  return (
    <main >
      <h1> Virus simulation</h1>
    
      <PeopleMap data={getData(100)} obstacles={ getObstacles()} />
    </main>
  );

}
