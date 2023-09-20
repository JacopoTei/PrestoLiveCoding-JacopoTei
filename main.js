const cardData = [
    {
        title: "Card 1",
        description: "Descrizione per Card 1",
        buttonText: "Bottone 1",
        buttonColor: "primary"
    },
    {
        title: "Card 2",
        description: "Descrizione per Card 2",
        buttonText: "Bottone 2",
        buttonColor: "secondary"
    },
    {
        title: "Card 3",
        description: "Descrizione per Card 3",
        buttonText: "Bottone 3",
        buttonColor: "success"
    },
    {
        title: "Card 4",
        description: "Descrizione per Card 4",
        buttonText: "Bottone 4",
        buttonColor: "danger"
    },
    {
        title: "Card 5",
        description: "Descrizione per Card 5",
        buttonText: "Bottone 5",
        buttonColor: "warning"
    },
    {
        title: "Card 6",
        description: "Descrizione per Card 6",
        buttonText: "Bottone 6",
        buttonColor: "info"
    }
];

// Funzione per generare le card orizzontali
function generateHorizontalCards() {
    const cardContainer = document.getElementById("cardContainer");

    cardData.forEach((data, index) => {
        const cardHtml = `
            <div class="card mb-3 mt-5">
                <div class="row g-0 ">
                    
                       
                    
                    <div class="col-md-12">
                        <div class="card-body">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-text">${data.description}</p>
                            <button class="btn btn-${data.buttonColor}">${data.buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cardContainer.innerHTML += cardHtml;
    });
}

// Chiama la funzione per generare le card orizzontali
generateHorizontalCards();

    document.addEventListener("DOMContentLoaded", function () {
        const searchButton = document.getElementById("searchButton");

        searchButton.addEventListener("click", function () {
            // Cambia il colore del tasto di ricerca a rosso
            searchButton.classList.remove("btn-secondary");
            searchButton.classList.add("btn-danger");
        });
    });
