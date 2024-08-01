console.log('js connected');

// array con titolo e descrizione
const immagini = [
    { url: "img/IMG_5255.jpg", title: "Uomo Afghano con bambino", description: "Foto scattata sul confine tra Pakistan e Afghanistan durante un controllo alla frontiera" },
    { url: "img/IMG_5267.jpg", title: "Nomads", description: "Un gruppo di bambini figli di pastori nomadi si avvicinano incuriositi dalla macchina fotografica" },
    { url: "img/IMG_5287.jpg", title: "Glimpses", description: "Uno scorcio panoramico delle vette Pakistane" },
    { url: "img/IMG_5611.jpg", title: "Kalash Festival", description: "Nel Kalash ogni anno gli abitanti del luogo si riuniscono per augurarsi un buon raccolto, vestendendosi con i loro abiti tradizionali e intonando vecchi canti popolari." },
    { url: "img/IMG_5620.jpg", title: "La ragazza Kalash", description: "Durante queste cerimonie le ragazze Kalash scelgono coloi che diventera il loro partner per il resto della vita, un momento molto atteso per la vita degli abitanti del villaggio." },
    { url: "img/IMG_5399.jpg", title: "Non e un paese per vecchi", description: "Un uomo anziano che cammina lungo le impervie strade di montagna Pakistane" }
];

console.log("La dimensione dell'array è: " + immagini.length);

const carouselContainer = document.getElementById("pictures");

// Crea gli elementi del carosello
for (let i = 0; i < immagini.length; i++) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add('carousel-item');
    
    const img = document.createElement("img");
    img.src = immagini[i].url;
    img.classList.add('carousel-image');

    const title = document.createElement("h2");
    title.innerText = immagini[i].title;
    
    const description = document.createElement("p");
    description.innerText = immagini[i].description;

    imgContainer.appendChild(img);
    imgContainer.appendChild(title);
    imgContainer.appendChild(description);

    if (i === 0) {
        imgContainer.classList.add('visible');
    }

    carouselContainer.appendChild(imgContainer);
}

const nextButton = document.getElementById("button-right");
const prevButton = document.getElementById("button-left");

// Gestione del clic sul pulsante "next"
nextButton.addEventListener('click', function() {
    const items = document.querySelectorAll('.carousel-item');
    const visibleItem = document.querySelector('.carousel-item.visible');
    visibleItem.classList.remove('visible');
    const nextItem = visibleItem.nextElementSibling || items[0];
    nextItem.classList.add('visible');
});

// Gestione del clic sul pulsante "prev"
prevButton.addEventListener('click', function() {
    const items = document.querySelectorAll('.carousel-item');
    const visibleItem = document.querySelector('.carousel-item.visible');
    visibleItem.classList.remove('visible');
    const prevItem = visibleItem.previousElementSibling || items[items.length - 1];
    prevItem.classList.add('visible');
});
