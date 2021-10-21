const URL = 'https://rickandmortyapi.com/api/character'; 

async function getApi(url){
try{
    const res = await fetch(URL);
    const data = await res.json();
    // console.log(data.results);
    showCartel();
}catch(error){
    console.log("Error en la ejecucion " + error);
}
}
getApi(URL);

function showCartel (data){
    
    const main = document.getElementById('main');
    main.innerHTML= ``;
    const chapter = document.createElement('div');
    chapter.innerHTML = `
               
    `
    main.appendChild(chapter);
};
