import './App.css';
import { useState } from 'react';
import Navv from "./components/Navv";
import Movieslist from './components/Movieslist';
import Append from './components/Appendmovie.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Trailer from './components/Trailer';


function App() {
  const [movies,setMovies]=useState([
    {
      id: 0,
      title: "Resident Evil: Welcome to Raccoon City",
      posterUrl: "https://lh3.googleusercontent.com/proxy/0HE_vQjBj5t-ffMkqlH-I8f66hV5WyE8KX7fFZg-W5HdCwQBXX9yl8DtDDZbRbgsY4jJBMsD5vw4ooQ23tTksW3XTh-FiKshwOFtDXv7Xy1KoaDM57-5Ns75ALEgIlF3SdAXJkk9NQ",
      rate: 2,
      description:
        "A group of survivors trying to survive during a zombie outbreak in the small town of Raccoon City.",
      trailer:"https://www.youtube.com/embed/4q6UGCyHZCI",
    },
    {
      id: 1,
      title: "The Mitchells vs. the Machines",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_.jpg",
      rate: 4.5,
      description:
        " A robot apocalypse put the brakes on their cross-country road trip. Now it's up to the Mitchells",
      trailer:"https://www.youtube.com/embed/_ak5dFt8Ar0",
    },
    {
      id: 2,
      title: "The Craft: Legacy",
      posterUrl: "https://i.egycdn.com/pic/WmFwZndlY21ZTE5MdHRSY21qbVRqbWhMY3dUSQ.jpg",
      rate: 2.4,
      description:
      "A group of high school students form a coven of witches.",
      trailer:"https://www.youtube.com/embed/J60ueFp-jv8",
    },
    {
      id: 3,
      title: "Venom: Let There Be Carnage",
      posterUrl:
        "https://i.egycdn.com/pic/WmFwZndlY21tbUVtcG1tRXZ0Y0VjbXZtVGptanh4eEs.jpg",
      rate: 3,
      description:
        "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
        trailer:"https://www.youtube.com/embed/-FmWuCgJmxo",
    },
    {
      id: 4,
      title: "Red Notice",
      posterUrl:
        "https://i.egycdn.com/pic/WmFwZndlY21tbWJtWUxOcGFjYW1wemF2Tllidnc.jpg",
      rate: 3.5,
      description:
        "In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
        trailer:"https://www.youtube.com/embed/Pj0wz7zu3Ms",
    },
    {
      id: 5,
      title: "Love Hard",
      posterUrl:
        "https://i.egycdn.com/pic/WmFwZndlY21tbWJtcGptcHZtbUVjdmtOanhsd1RUag.jpg",
      rate: 3.4,
      description:
        "An LA girl, unlucky in love, falls for an East Coast guy on a dating app and decides to surprise him for the holidays, only to discover that she's been catfished.",
        trailer:"https://www.youtube.com/embed/3boMRfx6cjE",
    },
    {
      id: 6,
      title: "Cruella",
      posterUrl:
        "https://i.egycdn.com/pic/WmFwZndlY21IY21UYm12bXZ2UmN2Y2xtVG93UFBteg.jpg",
      rate: 4,
      description:
        "Estella Miller, an aspiring fashion designer, explores the path that will lead her to become a notorious up-and-coming fashion designer known as Cruella de Vil.",
        trailer:"https://www.youtube.com/embed/gmRKv7n2If8",
    },
    {
      id: 7,
      title: "Lethal Weapon",
      posterUrl:
        "https://i.egycdn.com/pic/WmFwZndlY21tbWJtSGN2Y21qbWVjbW1QeHhhdk52bWI.jpg",
      rate: 5,
      description:
        "An aspiring fashion designer is mysteriously able to enter the 1960s where she encounters a dazzling wannabe singer.",
        trailer:"https://www.youtube.com/embed/wN8h4-oyAbo",
    },
    {
      id: 8,
      title: "Last Night in Soho",
      posterUrl:
        "https://i.egycdn.com/pic/WmFwZndlY21tbWJtWVlvTmJFY2FsdndhYW1FbVRJ.jpg",
      rate: 4.2,
      description:
        "An animated short film that features characters from 'Luca'.",
        trailer:"https://www.youtube.com/embed/AcVnFrxjPjI",
    },
  ])

  
  const [search,setSearch]=useState("");
  const [searchRate,setSearchRate]=useState("");
  return (
    <Router>
    <div className="App">
    
    <Route path="/trailer/:id" render={(props)=> <Trailer  movies={movies} {...props} />}/>
    <Route path='/' exact  >
    <Navv setSearch={setSearch} setSearchRate={setSearchRate} />
    <Append movies={movies} setMovies={setMovies}></Append>
    <Movieslist movies={movies} search={search} searchRate={searchRate}  ></Movieslist>
    </Route>
      
    </div>
    </Router>
    
  );
}

export default App;
