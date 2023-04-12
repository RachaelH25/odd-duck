"use script";

let productContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
let maxClicksAllowed = 3;
// change max to 25 once finished.

const state = {
    allProductsArray: [],
};

function Products(name, src) {
    this.name = name;
    this.src = src;
    this.views = 0;
}

function getRandomNumber() {
    return Math.floor(Math.random() * state.allProductsArray.length);
}

function renderProducts() {
    let product1 = getRandomNumber();
    let product2 = getRandomNumber();
    let product3 = getRandomNumber();

    while (product1 === product2 || product1 === product3) {
        product1 = getRandomNumber();
    }
    if (product2 === product3) {
        product2 = getRandomNumber();
    }

    image1.src = state.allProductsArray[product1].src;
    image2.src = state.allProductsArray[product2].src;
    image3.src = state.allProductsArray[product3].src;
    image1.alt = state.allProductsArray[product1].name;
    image2.alt = state.allProductsArray[product2].name;
    image3.alt = state.allProductsArray[product3].name;
    state.allProductsArray[product1].views++;
    state.allProductsArray[product2].views++;
    state.allProductsArray[product3].views++;
}

productContainer.addEventListener("click", handleProdClick);

function handleProdClick(event) {
    if (event.target === productContainer) {
        alert("Please click on an image.");
    }
    clicks++;
    let clickProd = event.target.alt;
    for (let i = 0; i < allProductsArray.length; i++) {
        if (clickProd === state.allProductsArray.length[i].name) {
            state.allProductsArray[i].clicks++;
            break;
        }
    }
    if (clicks === maxClicksAllowed) {
        productContainer.removeEventListener("click", handleProdClick);
        resultButton.addEventListener("click", renderResults);
        productContainer.className = "no-voting";
    } else {
        renderProducts();
    }
}

function renderResults() {
    let ul = document.querySelector("ul");
    for (let i = 0; i < state.allProductsArray; i++) {
        let li = document.createElement("li");
        li.textContent = `${state.allProductsArray[i].name} had ${state.allProductsArray[i].views} views and was clicked ${state.allProductsArray[i].clicks} times.`;
        ul.appendChild(li);
    }
}

let bag = new Products("r2d2 bag", "images/bag.jpg");
let banana = new Products("banana slicer", "images/banana.jpg");
let bathroom = new Products("bathroom stand", "images/bathroom.jpg");
let boots = new Products("yellow boots", "images/boots.jpg");
let breakfast = new Products("breakfast appliance", "images/breakfast.jpg");
let bubblegum = new Products("meatball bubblegum", "images/bubblegum.jpg");
let chair = new Products("useless chair", "images/chair.jpg");
let cthulu = new Products("cthulu figure", "images/cthulu.jpg");
let dogduck = new Products("dog-duck", "images/dog-duck.jpg");
let dragon = new Products("dragon meat", "images/dragon.jpg");
let pen = new Products("cutlery pen", "images/pen.jpg");
let petsweep = new Products("pet sweep", "images/pet-sweep.jpg");
let scissors = new Products("pizza scissors", "images/scissors.jpg");
let shark = new Products("shark plush", "images/shark.jpg");
let sweep = new Products("baby sweep", "images/sweep.jpg");
let tauntaun = new Products("tauntaun bed", "images/tauntaun.jpg");
let unicorn = new Products("unicorn meat", "images/unicorn.jpg");
let watercan = new Products("self-watering-can", "images/water-can.jpg");
let wine = new Products("wine glass", "images/wine-glass.jpg");

renderProducts();
