"use script";

let productContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");
let chartDestroy = false;
let blankChart;

let clicks = 0;
let maxClicksAllowed = 5;
// change max to 25 once finished.

const state = {
    allProductsArray: [],
};

function Products(name, src) {
    this.name = name;
    this.src = src;
    this.views = 0;
    this.clicks = 0;
}

function getRandomNumber() {
    return Math.floor(Math.random() * state.allProductsArray.length);
}

let usedProducts = [];

function renderProducts() {
    let product1 = getRandomNumber();
    let product2 = getRandomNumber();
    let product3 = getRandomNumber();
    console.log(product1, product2, product3);
    while (
        product1 === product2 ||
        product1 === product3 ||
        product2 === product3 ||
        usedProducts.includes(product1) ||
        usedProducts.includes(product2) ||
        usedProducts.includes(product3)
    ) {
        product1 = getRandomNumber();
        product2 = getRandomNumber();
        product3 = getRandomNumber();
        // console.log("while");
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

    usedProducts = [];
    usedProducts.push(product1, product2, product3);
}

function handleProdClick(event) {
    if (event.target === productContainer) {
        alert("Please click on an image.");
    }
    clicks++;
    let clickProd = event.target.alt;
    for (let i = 0; i < state.allProductsArray.length; i++) {
        // console.log("for 1");
        if (clickProd === state.allProductsArray[i].name) {
            state.allProductsArray[i].clicks++;
            break;
        }
    }
    if (clicks === maxClicksAllowed) {
        productContainer.removeEventListener("click", handleProdClick);
        resultButton.addEventListener("click", renderChart);
        // productContainer.className = "no-voting";
    } else {
        renderProducts();
    }
}

// function renderResults() {
//     let ul = document.querySelector("ul");
//     for (let i = 0; i < state.allProductsArray.length; i++) {
//         console.log("for 2");
//         let li = document.createElement("li");
//         li.textContent = `${state.allProductsArray[i].name} had ${state.allProductsArray[i].views} views and was clicked ${state.allProductsArray[i].clicks} times.`;
//         ul.appendChild(li);
//     }
// }

function renderChart() {
    if (chartDestroy == true) {
        blankChart.destroy();
    }

    const labelArray = [];
    const clicksArray = [];
    const viewsArray = [];

    for (let i = 0; i < state.allProductsArray.length; i++) {
        let thisProd = state.allProductsArray[i];
        labelArray.push(thisProd.name);
        clicksArray.push(thisProd.clicks);
        viewsArray.push(thisProd.views);
    }
    console.log(clicksArray);
    const data = {
        labels: labelArray,
        datasets: [
            {
                label: "Views",
                data: viewsArray,
                backgroundColor: "whitesmoke",
                // [
                //     "rgba(255, 99, 132, 0.2)",
                //     "rgba(255, 159, 64, 0.2)",
                //     "rgba(255, 205, 86, 0.2)",
                //     "rgba(75, 192, 192, 0.2)",
                //     "rgba(54, 162, 235, 0.2)",
                //     "rgba(153, 102, 255, 0.2)",
                //     "rgba(201, 203, 207, 0.2)",
                // ],
                borderColor: "black",
                // [
                //     "rgb(255, 99, 132)",
                //     "rgb(255, 159, 64)",
                //     "rgb(255, 205, 86)",
                //     "rgb(75, 192, 192)",
                //     "rgb(54, 162, 235)",
                //     "rgb(153, 102, 255)",
                //     "rgb(201, 203, 207)",
                // ],
                borderWidth: 2,
            },
            {
                label: "Clicks",
                data: clicksArray,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                ],
                borderWidth: 2,
            },
        ],
    };
    const config = {
        type: "bar",
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
            //  indexAxis: "y",
        },
    };
    const canvasChart = document.getElementById("myGraph");
    new Chart(canvasChart, config);
    blankChart = new Chart(canvasChart, config);
    chartDestroy = true;
}

let bag = new Products("r2d2bag", "images/bag.jpg");
let banana = new Products("banana slicer", "images/banana.jpg");
let bathroom = new Products("bathroom stand", "images/bathroom.jpg");
let boots = new Products("yellow boots", "images/boots.jpg");
let breakfast = new Products("breakfast appliance", "images/breakfast.jpg");
let bubblegum = new Products("meatball bubblegum", "images/bubblegum.jpg");
let chair = new Products("useless chair", "images/chair.jpg");
let cthulhu = new Products("cthulhu figure", "images/cthulhu.jpg");
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

state.allProductsArray.push(
    bag,
    banana,
    bathroom,
    boots,
    breakfast,
    bubblegum,
    chair,
    cthulhu,
    dogduck,
    dragon,
    pen,
    petsweep,
    scissors,
    shark,
    sweep,
    tauntaun,
    unicorn,
    watercan,
    wine
);

renderProducts();

productContainer.addEventListener("click", handleProdClick);
