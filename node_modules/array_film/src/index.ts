import {v4 as uuidv4} from 'uuid'; 
export const getFilms = () => { 
    return [
    {
        name: "Halloween Kills",
        genre: "Horror/Thriller",
        actor: [
            {name: "Jamie Lee Curtis"},
            {name: "James Jude Courtney"},
            {name: "Kyle Richards"},
            {name: "Anthony Michael Hall"},
            {name: "Amber Sienna"},
           ],
        duration: "1h 45m",
        id:uuidv4() 
    },
    {
        name: "Venom - La furia di Carnage",
        genere: "Azione/Sci-fi",
        actor: [
            {name: "JTom Hardy"},
            {name: "Michelle Williams"},
            {name: "Naomie Harris"},
            {name: "Ed Kear"},
            {name: "Amber Sienna"},
           ],
        duration: "1h 38m",
        id:uuidv4() 
    },
    {
        name: "Eternals",
        genere: "Avventura/Azione",
        actor: [
            {name: "Angelina Jolie"},
            {name: "Richard Madden"},
            {name: "Kumail Nanjiani"},
            {name: "Lia McHugh"},
            {name: "Amber Sienna"},
           ],
        duration: "2h 37m",
        id:uuidv4() 
    },
    {
        name: "Freaks Out",
        genere: "Cinema fantastico/Drammatico",
        actor: [
            {name: "Aurora Giovinazzo"},
            {name: "Pietro Castellitto"},
            {name: "Astrid Meloni"},
            {name: "Edoardo Purgatori"},
            {name: "Amber Sienna"},
           ],
        duration: "2h",
        id:uuidv4() 
    },
    ]}

    
console.log(getFilms());