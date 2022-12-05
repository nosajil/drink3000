

/*let boissonSelectionnee = document.querySelector(".boisson")
let nomBoissonSelectionnee = document.querySelector("h2")
let choice = document.querySelector(".aucune")
boissonSelectionnee.addEventListener("click", () =>{
   // alert(nomBoissonSelectionnee.textContent)
choice.textContent=nomBoissonSelectionnee.textContent
})*/
let choice = document.querySelector(".aucune")
let nomBoissonSelectionnee = document.querySelectorAll("h2")

//const allBoissons = document.querySelectorAll(".boisson");
/*allBoissons.forEach(function (boisson) {
  boisson.addEventListener("click", () => {
    nomBoissonSelectionnee.forEach(drink => {
        choice.textContent=drink.textContent
        })
  });console.table(nomBoissonSelectionnee)
});*/

   
let selectbottom= document.querySelectorAll(".select-link")

console.log(selectbottom);

selectbottom.forEach(element => {
    element.addEventListener ("click", () => {
        choice.textContent = element.dataset.name
    })
} )
/**
 * JS NAV
 */
// Variables des balises HTML
let logo = document.querySelector('#logo');
let navSection = document.querySelector('.section-nav');
let nav = document.querySelector('#nav');
let topPage = 0;
let invisibleNav = 100;

document.addEventListener('scroll', (e) => {
    // Ecoute du scroll.
    topPage = window.scrollY;
    // Ajout et retrait des classes de style.
    if (topPage < invisibleNav) {
        navSection.classList.add('hidden');
        nav.classList.add('bg-transparent');
        logo.classList.add('text-align');

    } else if (topPage > invisibleNav) {
        navSection.classList.remove('hidden');
        nav.classList.remove('bg-transparent');
        logo.classList.remove('text-align');
    }
})

/**
 * JS RECETTES
 * 
 * ecouter le click des boutons 
 * modification du texte ("selectionner" en "indisponible")
 * rendre le bouton 'disabled'
 * 
 * filter les boissons qui sont energisante et desalterante et faire en sorte que les textes des boissons correspondantes changent
 * 
 * Gérer la section de selection de la boisson qui affiche le nom de la boisson selectionné.
 */
// Variables 
let btnEnergy = document.querySelector('#btn-energy');
let btnDesalt = document.querySelector('#btn-desalt');
let infoBtn = document.querySelectorAll('.disactivated');
let energyDrinks = document.querySelectorAll('.energisante');
let desaltDrinks = document.querySelectorAll('.desalterante');
let energyDrinksBtn = document.querySelectorAll('.energisante-btn');
let desaltDrinksBtn = document.querySelectorAll('.desalterante-btn');
let divBtn = document.querySelector('.energisantes-desalterantes');
let textEnergy = document.querySelectorAll('.text-energy');
let textDesalt = document.querySelectorAll('.text-desalt');



console.log(desaltDrinksBtn);
console.log(textDesalt);


const desactivatedBtn = "Indisponible"
const reactiveBtn = "Plus d'infos"
const empty = "";
let textDrinks;

function noAvailable(infoBtn, reactivebtn) {
    infoBtn.textContent = desactivatedBtn;
    reactivebtn.textContent = reactiveBtn;
}


// console.log(energyDrinksBtn.innerHTML);

divBtn.addEventListener('click', (e) => {
    if (e.target.value === "energy") {
        // for (let i = 0; i < energyDrinksBtn.length; i++) {
        //     noAvailable(energyDrinksBtn[i], desaltDrinksBtn[i])
        // textEnergy.p = empty;
        desaltDrinksBtn.forEach(element => {
            element.innerText = desactivatedBtn;
        });
        energyDrinksBtn.forEach(element => {
            element.innerText = reactiveBtn;
        });
        textDesalt.forEach(element => {
            textDrinks = element.innerText;
            element.innerText = empty;
        });
        textEnergy.forEach(element => {
            element.innerText = textDrinks;
        });

    }

    else if (e.target.value === "desalt") {
        // for (let i = 0; i < desaltDrinksBtn.length; i++) {
        //     noAvailable(desaltDrinksBtn[i], energyDrinksBtn[i])
        //     console.log(energyDrinksBtn[i].innerHTML);
            // textDesalt.p = empty;
            energyDrinksBtn.forEach(element => {
                element.innerText = desactivatedBtn;
            });
            desaltDrinksBtn.forEach(element => {
                element.innerText = reactiveBtn;
            });
            textEnergy.forEach(element => {
                textDrinks = element.innerText;
                element.innerText = empty;
            });
            textDesalt.forEach(element => {
                element.innerText = textDrinks;
            });
            
        }
    }

)


        


        







// class Drinks {
//     constructor (nom, type){
//         this.nom = nom;
//         this.type = type;
//     }
// }

// let original = new Drinks ("Original", "Energisante");
// let pinkTonic = new Drinks ("Pink Tonic", "Energisante");
// let mojito = new Drinks ("Mojito", "Désaltérante");
// let tropical = new Drinks ("Tropical", "Désaltérante");

// let drinks = [];
// drinks.push(original);
// drinks.push(pinkTonic);
// drinks.push(mojito);
// drinks.push(tropical);

// console.log(drinks);

// const energyDrinks = drinks.filter((drink) => {
//     return drink.type === "Energisante";
// })
// const desaltDrinks = drinks.filter((drink) => {
//     return drink.type === "Désaltérante";
// })

