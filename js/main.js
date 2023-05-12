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

console.log(personTeam)


for (let i = 0; i < personTeam.length; i++ ){
    let objIesimo = personTeam[i]
    console.log(objIesimo)

    for (key in objIesimo){
        // console.log(objIesimo[key])
        let square = document.createElement("div")
        square.classList.add("square")
        square.innerHTML = objIesimo[key]
        container.append(square) 
    }   
}