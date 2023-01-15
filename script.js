
const MYFAVOURITEMOVIES = [

    { name : "Pride and Prejudice" , kind : "Romantic Drama"} ,
    { name : "A Beautiful Mind" , kind : "Biographical Drama"} ,
    { name : "The Green Mile" , kind : "Drama"} ,
    { name : "Inception" , kind : "Science Fiction"}
    
]

const LISTMOVIES = () => {

    MYFAVOURITEMOVIES.map((movie) => {
        console.log(movie.name);
    });
}

const ADDNEWMOVIE = (newMovie) => {

    const promise = new Promise ((resolve , reject) => {

        MYFAVOURITEMOVIES.push(newMovie);
        resolve(MYFAVOURITEMOVIES);
        // reject ("Bir hata oluştu. Yeni film eklenemedi.");
    });
    
    return promise;
}

async function showNewList () {

    try {

        await ADDNEWMOVIE ({ name : "Benim Dünyam" , kind : "Drama"});

        LISTMOVIES();
    }

    catch(err){

        console.log(err);
    }
}

showNewList ();