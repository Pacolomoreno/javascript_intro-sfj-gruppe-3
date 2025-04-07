// const apiUrl="https://dragonball-api.com/api/characters";
// const apiUrl="https://dragonball-api.com/api/planets";
const apiUrl="https://dragonball-api.com/api/transformations";


async function dataImport(){
    const dataLoader= await fetch(apiUrl);
    const dataArray= await dataLoader.json();
    // const dataObject= await dataLoader.json();
    // const dataArray=dataObject.items

    dataArray.map((hero)=>{
console.log(hero);

// Adding html Div sections for ech hero
        const divHero=document.createElement("div");
        divHero.classList="dBall-div";

        const ttlHero=document.createElement("h1");
        ttlHero.textContent=hero.name;
        divHero.appendChild(ttlHero);

        const mkiHero=document.createElement("h2");
        mkiHero.textContent=hero.maxKi;
        divHero.appendChild(mkiHero);

        const imgHero=document.createElement("img");
        imgHero.src=hero.image;
        imgHero.alt="Bilde av "+ hero.name;
        imgHero.classList="dBall-img"
        divHero.appendChild(imgHero);
        
        const txtHero=document.createElement("p");
        txtHero.textContent=hero.description;
        divHero.appendChild(txtHero);

        root.appendChild(divHero);



    })

}

dataImport();