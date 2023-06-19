import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("PuppyList:", puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup); 

  return (
    <>
      <div className="App">
        <h1>Puppy Pals</h1>
        { 
          puppies.map((puppy)=> {
            return <p onClick = {()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
         })
       }
       {featPupId && <p> {featPupId}</p> }
     </div>

     {featPupId && (
       <div>
        <h2>{featuredPup.name}</h2>
          <ul>
            <li><em>Age:</em> {featuredPup.age}</li>
            <li><em>Email:</em> {featuredPup.email}</li>
         </ul>
       </div>
     )} 
    </>
        );//from the return 
}

export default App
