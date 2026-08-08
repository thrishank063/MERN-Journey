//---------------PROMISES-------------------
function walkDog() {
    return new Promise((resolve, reject) => {
        let dogWalk = true;
        if (dogWalk) {
            setTimeout(() => {
                resolve(`Take the dog to the walk`)
            }, 1000);
        } else {
            reject(`You didn't take out the dog`)
        }
    })
}

function coding() {
    return new Promise((resolve, reject) => {
        let doneCoding = true;
        if (doneCoding) {
            setTimeout(() => {
                resolve(`Spend the time on coding`)
            }, 2500)
        } else {
            reject(`you Not yet done the coding`);
        }
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        let trashOut = false;
        if (trashOut) {
            setTimeout(() => {
                resolve(`take the trash out `);

            }, 500)
        } else {
            reject(`you didn't take the trash out`)
        }
    })
}


walkDog().then((response) => {
    console.log(response);
    return coding()
}).then((response) => {
    console.log(response);
    return takeOutTrash();
})
    .then((response) => console.log(response))
    .catch(err => console.error(err))




async function doChors() {
    try {
        const result = await walkDog();
        console.log(result);

        const codingResult = await coding();
        console.log(codingResult);

        const trashResult = await takeOutTrash();
        console.log(trashResult);
    } catch (err) {
        console.error(err)
    }
}
doChors()


// --------------------------------------------------------
// pokeman API


const fetchBtn = document.getElementById("fetchBtn");


fetchBtn.addEventListener('click', fetchUrl);




async function fetchUrl() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();;
    
    console.log(pokemonName);
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`could not fetch the resources`);
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src =pokemonSprite;
        imgElement.style.display ="block";

    } catch (error) {
        console.log(error)
    }
}

const url2 = 'https://pokeapi.co/api/v2/pokemon/pikachu';



