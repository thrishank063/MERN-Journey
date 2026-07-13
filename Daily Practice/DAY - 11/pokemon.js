let requestStatusEl = document.getElementById("requestStatus");

const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
const url2 = "https://pokeapi.co/api/v2/pokemon/typhlosion";


fetch(url)
async function fetchData() {
    try{
        const response = await fetch(url2);
        if(!response.ok){
            throw new Error(`Could not fetch resource`);
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
        requestStatusEl.textContent = error
    }
}


fetchData()