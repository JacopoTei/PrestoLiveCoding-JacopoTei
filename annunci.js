let navbar = document.querySelector("#navbar")

window.addEventListener("scroll", ()=>{
    // console.log(window.scrollY)
    if(window.scrollY > 0){
        navbar.classList.add("navbar-custom")
    }else {
        navbar.classList.remove("navbar-custom")

    }
})
fetch("./annunci.json").then((response)=> response.json()).then((data)=> {
    

    let cardsWrapper = document.querySelector("#cardsWrapper")


    function createCards(array){
        cardsWrapper.innerHTML = "";
        array.forEach((card, i) => {
            let div = document.createElement("div")
            div.classList.add("col-12", "col-md-6", "col-lg-4", "my-5" )
            div.innerHTML = `
                <div class="card">
                    <div class="overflow-hidden">
                        <img src="${card.url}" class="card-img-top transition img-prop" alt="...">
                    </div>
                    <div class="card-body shadow">
                    <h5 class="card-title text-truncate">${card.nome}</h5>
                    <p class="card-text">${card.categoria}</p>
                    <p class="card-text fw-bold">Prezzo: ${card.prezzo}$</p>
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
 
            cardsWrapper.appendChild(div);
        });
    }

    createCards(data);

    let categoryButtons = document.querySelector("#categoryButtons")

    function setCategories(){
        let categories = data.map( (el)=> el.categoria)

        let uniqueCategories = [];

        categories.forEach((categoria)=>{
            if(!uniqueCategories.includes(categoria)){
                uniqueCategories.push(categoria)
            }
        })

        uniqueCategories.forEach((uniqueCategory)=>{
            let div = document.createElement("div")
            div.classList.add("form-check")
            div.innerHTML = `
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${uniqueCategory}">
                <label class="form-check-label" for="${uniqueCategory}">
                ${uniqueCategory}
                </label>
            `
            categoryButtons.appendChild(div)
        })

    }
    setCategories();

    let inputChecks = document.querySelectorAll(".form-check-input");

    function filterByCategory(array){
        let arrayButtons = Array.from(inputChecks)
        let checked = arrayButtons.find((el)=> el.checked )

        if(checked.id == "All"){
           return data;

        }else {
            let filtered = array.filter((el)=> el.categoria == checked.id )
            return filtered;
        }


    }

    inputChecks.forEach((radioButton)=>{
        radioButton.addEventListener("click", ()=>{
            filterByCategory(data);
        })

    })


    let inputPrice = document.querySelector("#inputPrice");
    let price = document.querySelector("#price");

    function minMaxPrices(){
        let prices = data.map((el)=> el.prezzo)
        let max = Math.max(...prices)
        let min = Math.min(...prices)
        inputPrice.max = max;
        inputPrice.value = max;
        inputPrice.min = min;
        price.innerHTML = max;

    }
    minMaxPrices()

    function filterByPrice(array){
        // console.log(inputPrice.value)
        let filtered = array.filter((el)=> el.prezzo <= inputPrice.value).sort((a, b)=> b.prezzo - a.prezzo)
        price.innerHTML = inputPrice.value;
        return filtered;
    }

    inputPrice.addEventListener("input", ()=>{
        globalFilter();
    })
    
    let wordInput = document.querySelector("#wordInput");

    function filterByWord(array){
        let value = wordInput.value;
        let filtered = array.filter((el)=> el.nome.toLowerCase().includes(value.toLowerCase()))
        return filtered
    }

    wordInput.addEventListener("input", ()=>{
        globalFilter();
    })

    function globalFilter(){
    let filteredByCategory = filterByCategory (data)
    let filteredByPrice = filterByPrice (filteredByCategory)
    let filteredByWord = filterByWord (filteredByPrice)
    createCards(filteredByWord)
    }



})


  