const num = document.querySelector('#num').value = id;
const title = modal.querySelector('#title').value = title;
const actor = modal.querySelector('#actor').value = leadActor;
const year = modal.querySelector('#year').value = yearOfProduction;

// const num = document.getElementById('num').value = id;
// const title = document.getElementById('title').value = title;
// const actor = document.getElementById('actor').value = leadActor;
// const year = document.getElementById('year').value = yearOfProduction;
  
async function getAll(category){
    try {
        const response = await fetch(`http://localhost:3000/${category}`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function getItem(category, id) {
    try {
        const response = await fetch(`http://localhost:3000/${category}/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

getAll(movies);
