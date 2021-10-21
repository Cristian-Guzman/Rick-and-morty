const URL = 'https://rickandmortyapi.com/api/character'; 

async function getApi(url){
try{
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data.results);
    
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
    chapter.classList.add('content');
    chapter.innerHTML = `
    <div class="chapters-grid">
        <div class="chapters-card">
            <img src="" alt="uno">
            <h2>Beta-Seven</h2>
            <h3>Alive - Alien</h3>
            <h4> Last known location:</h4>
            <h3>unknown</h3>
            First seen in:
            Auto Erotic Assimilation
        </div>
        

    `

    main.appendChild(chapter);
};
