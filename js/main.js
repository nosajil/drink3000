

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

