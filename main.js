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

// function startCounter(limit, targetElement) {
//     let counter = 0;
//     let interval = setInterval(() => {
//       if (counter < limit) {
//         counter++;
//         targetElement.innerHTML = counter;
//         console.log(counter);
//       } else {
//         clearInterval(interval);
//       }
//     }, 1);
//   }
  
//   // Utilizza la funzione startCounter per iniziare un nuovo conteggio
//   startCounter(1000, articlesNumber);
//   // Esempio di utilizzo per aggiornare "#usersNumber"
// startCounter(2000, usersNumber);

// // Esempio di utilizzo per aggiornare "#productsNumber"
// startCounter(500, productsNumber);

    document.addEventListener("DOMContentLoaded", function () {
        let searchButton = document.getElementById("searchButton");

        searchButton.addEventListener("click", function () {
            // Cambia il colore del tasto di ricerca a rosso
            searchButton.classList.remove("btn-secondary");
            searchButton.classList.add("btn-danger");
        });
    });

    function createInterval(finalN, elemento, frequenza){
      let counter = 0;
  
      let interval = setInterval( ()=>{
  
      if(counter < finalN){
          counter++
          elemento.innerHTML = counter;
      } else {
          clearInterval(interval)
      }
      }, frequenza)
  }
  
  
  // INTERSECTION OBSERVER
  // E' una classe che ci mette a disposizione Javascript per creare un oggetto con una determinata struttura, quindi metodi e proprietà specifici. Ci permette di far scattare la nostra callback con il nostro codice al suo interno, quando l'elemento sarà intersecato dal nostro schermo.
  //Attraverso il THRESHOLD possiamo decidere quale percentuale dell'elemento deve essere intersecata per far scattare la callback.
  
  let isEntered = false;
  
  
  let observer = new IntersectionObserver( (entries)=>{
      entries.forEach( (entry)=>{
          if(entry.isIntersecting && isEntered == false){
              createInterval(1000, articlesNumber, 5)
              createInterval(500, usersNumber, 10)
              createInterval(120, productsNumber, 20)
              isEntered = true;
          }
      })
  },  { threshold: 1 })
  
  
  observer.observe(articlesNumber);

  let annunci = [
    {nome: "Katana di Hattori Hanzo", categoria: "Accessori", prezzo: 500, url: "https://picsum.photos/208"},
    {nome: "Occhio di Pai Mei", categoria: "Reliquie", prezzo: 1500, url: "https://picsum.photos/209"},
    {nome: "Vaso Ming", categoria: "Arredamento", prezzo: 350, url: "https://colasanticasadaste.files.wordpress.com/2017/10/vaso-pesce-ming.jpg?w=1000"},
    {nome: "Soldato di Terracotta", categoria: "Oggettistica", prezzo: 2000, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbYlI1WNbTYc4HoxwXX8w-yqpds3OW3eqmg&usqp=CAU"},
    {nome: "Kimono Giapponese", categoria: "Abbigliamento", prezzo: 700, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLCAis9NDShedcW7tgE9BvgiH8ptXmFRqZQ&usqp=CAU"},
]

let annunciWrapper = document.querySelector("#annunciWrapper")

annunci.forEach((annuncio, i)=>{
    if(i >= annunci.length - 3){

        let div = document.createElement("div")
        div.classList.add("col-12", "col-md-6", "col-lg-3", "my-5" )
        div.innerHTML = `
            <div class="card">
                <div class="overflow-hidden">
                    <img src="${annuncio.url}" class="card-img-top transition img-prop" alt="...">
                </div>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">NEW</span>
                <div class="card-body shadow">
                <h5 class="card-title">${annuncio.nome}</h5>
                <p class="card-text">${annuncio.categoria}</p>
                <p class="card-text fw-bold">Prezzo: ${annuncio.prezzo}$</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-secondary secondary1">Aggiungi al carrello</a>
                    <i class="bi bi-heart fs-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg></i>
                </div>
                <p class="card-text mt-3 text-end"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        `
        annunciWrapper.appendChild(div)

    }
    
})

let hearts = document.querySelectorAll(".bi-heart");

hearts.forEach((heart)=>{

  heart.addEventListener("click", ()=>{
      heart.classList.toggle("bi-heart")
      heart.classList.toggle("bi-heart-fill")
      heart.classList.toggle("text-danger")
  })


})

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination"
    }
  });
