// 1
const info = document.createElement("div"); 

// 2
Object.assign(info.style, {
    height : "300px",
    width : "200px",
    margin : "16px 0",
    border : "3px solid grey",
    padding : "16px 12px 24px 12px",
});

// 3
const cardMeteo = document.querySelector(".cardMeteo");
const charger = document.querySelector("button")

cardMeteo.insertBefore(info, charger);

// 4
for (let i = 0; i < 4; i++) {
    const p = document.createElement("p");
    p.setAttribute("id", "p" + (i+1));
    p.setAttribute("style", "padding : 10px");
    info.appendChild(p);
};

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");

function addInfo(element, texte) {
    element.textContent = texte;
};

// 5
function bouton() { 
    charger.setAttribute("class", "button__cardMeteo")
}

// 6
charger.addEventListener("mousedown", () => {
    charger.style.backgroundColor = "orange";
})

// 7
window.addEventListener("mouseup", () => {
    charger.style.backgroundColor = null;
})

// 8

const getMeteoJson = async () => {
    return await fetch ("https://prevision-meteo.ch/services/json/toulouse")
        .then(response => {
            return response.json();
        })
}

charger.addEventListener("click", () => {
        getMeteoJson().then(data => {
            addInfo(p1, `La condition actuelle : ${data.current_condition.condition}`);
            addInfo(p2, `La température actuelle : ${data.current_condition.tmp}`);
            addInfo(p3, `La température maximum : ${data.fcst_day_0.tmax}`);
            addInfo(p4, `La température minimum : ${data.fcst_day_0.tmin}`);
            bouton(); // 9
        });
})