const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25,
        avatar : './img/john.png',
        icon : './img/john_icon.png',
        latitude : 43.604429,
        longitude : 1.443812
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5,
        avatar : './img/jane.png',
        icon : './img/jane_icon.png',
        latitude : 43.60792, 
        longitude : 1.44133
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500,
        avatar : './img/venerable.png',
        icon : './img/venerable_icon.png',
        latitude : 43.60053,
        longitude : 1.44590
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe",
        avatar : './img/chien.png',
        icon : './img/chien_icon.png',
        latitude : 43.60377,
        longitude : 1.43583
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable",
        avatar : './img/renard.jpg',
        icon : './img/renard_icon.png',
        latitude : 43.59602,
        longitude : 1.43692
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45,
        avatar : './img/wrex.png',
        icon : './img/wrex_icon.png',
        latitude : 43.59555,
        longitude : 1.45257
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35,
        avatar : './img/garrus.png',
        icon : './img/garrus_icon.png',
        latitude : 43.61108,
        longitude : 1.45539
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25,
        avatar : './img/liara.png',
        icon : './img/liara_icon.png',
        latitude : 43.61183,
        longitude :  1.43222
    }
];

// 1
const tabData = [];

// 2
tabData.push(usersHuman, usersPet, usersXeno);

// 3
function cardHuman(objet) { // 4
    const article = document.createElement("article");
    const titre = document.createElement("h2");
    titre.textContent = objet.name;
    const image = document.createElement("img");
    image.setAttribute("src", objet.avatar);
    image.setAttribute("alt", `Portrait de : ${objet.name}`);
    const texte = document.createElement("p");
    texte.textContent = `${objet.age} ans - ${objet.email}`;
    article.appendChild(titre);
    article.appendChild(image);
    article.appendChild(texte);
    article.setAttribute("class", "card");
    return article;
}

// 5
function cardPet(objet) { // 6
    const article = document.createElement("article");
    const titre = document.createElement("h2");
    titre.textContent = objet.name;
    const image = document.createElement("img");
    image.setAttribute("src", objet.avatar);
    image.setAttribute("alt", `Portrait de : ${objet.name}`);
    const texte = document.createElement("p");
    texte.textContent = `${objet.age} ans - ${objet.espece} - ${objet.propriétaire}`;
    article.appendChild(titre);
    article.appendChild(image);
    article.appendChild(texte);
    article.setAttribute("class", "card");
    return article;
}

// 7
function cardXeno(objet) { // 8
    const article = document.createElement("article");
    const titre = document.createElement("h2");
    titre.textContent = objet.name;
    const image = document.createElement("img");
    image.setAttribute("src", objet.avatar);
    image.setAttribute("alt", `Portrait de : ${objet.name}`);
    const texte = document.createElement("p");
    texte.textContent = `${objet.age} ans - ${objet.espece} - ${objet.menace}`;
    article.appendChild(titre);
    article.appendChild(image);
    article.appendChild(texte);
    article.setAttribute("class", "card");
    return article;
}

// 9
function profil(tab) {
    const cardList = [];  // 10

    for (const element of tab) {  // 11
        if (tab.type == "humain") {
            cardHuman(element);
            cardList.push(cardHuman(element));
        } else if ((tab.type == "animal de compagnie")) {
                cardPet(element);
                cardList.push(cardPet(element));                
                } else if (tab.type == "Xeno") {
                cardXeno(element);
                cardList.push(cardXeno(element));    
                } else {
                console.log("Type de Profil non Existant")
                }
    }
    return cardList // 12
}

profil(usersHuman);
profil(usersPet);
profil(usersXeno);