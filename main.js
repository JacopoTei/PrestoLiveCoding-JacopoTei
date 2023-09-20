let navbar = document.querySelector("#navbar")

window.addEventListener("scroll", ()=>{
    // console.log(window.scrollY)
    if(window.scrollY > 0){
        navbar.classList.add("navbar-custom")
    }else {
        navbar.classList.remove("navbar-custom")

    }
})

let articlesNumber = document.querySelector("#articlesNumber");
let usersNumber = document.querySelector("#usersNumber");
let productsNumber = document.querySelector("#productsNumber");

function startCounter(limit, targetElement) {
    let counter = 0;
    let interval = setInterval(() => {
      if (counter < limit) {
        counter++;
        targetElement.innerHTML = counter;
        console.log(counter);
      } else {
        clearInterval(interval);
      }
    }, 1);
  }
  
  // Utilizza la funzione startCounter per iniziare un nuovo conteggio
  startCounter(1000, articlesNumber);
  // Esempio di utilizzo per aggiornare "#usersNumber"
startCounter(2000, usersNumber);

// Esempio di utilizzo per aggiornare "#productsNumber"
startCounter(500, productsNumber);

    document.addEventListener("DOMContentLoaded", function () {
        let searchButton = document.getElementById("searchButton");

        searchButton.addEventListener("click", function () {
            // Cambia il colore del tasto di ricerca a rosso
            searchButton.classList.remove("btn-secondary");
            searchButton.classList.add("btn-danger");
        });
    });

    

   


