import Image from "next/image";
import { createRoot } from 'react-dom/client';
import styles from "./virus-sim.module.css"

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}


export default function Home() {
  return (
    <main >
      <h1> Virus simulation</h1>
      <svg className={styles.sim} >
        <circle cx={120} cy={80} r={10} ></circle>
        <circle cx={160} cy={80} r={10} ></circle>
        
      </svg>


    </main>
  );

}
