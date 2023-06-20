var menu = {
    "Caffè Americano": {price: 3.99, image: "images/americano.webp"},
    "Caffè Latte": { price: 4.59, image: "images/latte.jpg"},
    "Cappuccino": { price: 3.99, image: "images/cappuccino.jpg"},
    "Espresso": { price: 2.99, image: "images/espresso.jpg"},
    "Mocha": { price: 4.79, image: "images/mocha.png"},
    "White Chocolate Mocha": { price: 4.99, image: "images/starbucks"}, //Từ ảnh này xuống dưới lười tìm nên ko có và giống nhau
    "Caramel Macchiato": { price: 4.79, image: "images/starbucks.jpg"},
    "Java Chip Frappuccino": { price: 5.49, image: "images/starbucks.jpg"},
    "Green Tea Fappuccino": { price: 4.99, image: "images/starbucks.jpg"},
    "Chai Tea Latte": { price: 3.99, image: "images/starbucks.jpg"},
};

function createDrinkMenu() {
    var menuContainer = document.getElementById("menu-container");
    var menuList = document.createElement("ul");
    console.log("here");

    for (var drink in menu) {
        var price = menu[drink].price.toFixed(2);
        var image = menu[drink].image;

        var menuItem = document.createElement("li");
        var drinkImage = document.createElement("img");
        var drinkName = document.createElement("p");
        var drinkPrice = document.createElement("p");

        drinkImage.src = image;
        drinkImage.alt = drink;
        drinkName.textContent = drink;
        drinkPrice.textContent = "$" + price;

        menuItem.appendChild(drinkImage);
        menuItem.appendChild(drinkName);
        menuItem.appendChild(drinkPrice);

        menuList.appendChild(menuItem);
    }

    menuContainer.appendChild(menuList);

}

window.onload = createDrinkMenu;