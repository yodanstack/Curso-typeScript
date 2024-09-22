interface audioplayer{
    audioVolume:number;
    songduration:number;
    song:string;
    details: Details;
}

interface Details{
    author: string;
    year: number
}

const audioplayer: audioplayer = {
    audioVolume: 90,
    songduration: 36,
    song: "mess",
    details: {
      author:'ed sehran',
      year:2015  
    }
}


// const song = 'new song'; 

// const {song: anotherSong, 
//        songduration:duration, 
//    details:{author}  //metodo uno de desestructuracion de una interfas
//     } = audioplayer;

//    const {author} = details; //segundo metodo de destructuracion

// console.log('song', anotherSong);
// console.log('author', audioplayer.details.author);
// console.log('author', author);
// console.log('duration:', duration);



const [p1, p2, trunks]: string[] = ['goku', 'vegeta', 'trunks'];
// const trunks = dbz[3] || 'no hay personaje';

    console.error ('personaje 3:', trunks, p1 );


export{};