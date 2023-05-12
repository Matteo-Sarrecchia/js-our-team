// VARIBILI GLOBALI
const headerRow = document.getElementById("header-row")
const container = document.getElementById("container")

// creo array per contenere oggetti
const personTeam = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "img": "angela-caroll-chief-editor.jpg"
    },

    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "img": "walter-gordon-office-manager.jpg"
    },

    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "img": "angela-lopez-social-media-manager.jpg"
    },

    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "img": "scott-estrada-developer.jpg"
    },

    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "img": "barbara-ramos-graphic-designer.jpg"
    },

];

const squareHeader =document.createElement("div");
headerRow.append(squareHeader);
squareHeader.innerHTML = `<h2>OUR TEAM</h2>
<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illum fugit sapiente blanditiis delectus eum id labore dolor, earum iure incidunt facere, quis non nesciunt consequuntur, quidem assumenda sit cumque.</div>`


for (let i = 0; i < personTeam.length; i++ ){
    let objIesimo = personTeam[i]
    console.log(objIesimo)

        let square = document.createElement("div")
        square.classList.add("square")
        container.append(square)
        square.innerHTML = 
        `<img src="img/${objIesimo.img}" alt="">
        <h3>${objIesimo.nome}</h3>
        <div>${objIesimo.ruolo}</div>`
}