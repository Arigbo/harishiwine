
function availbleBottle(bottle) {
    return `<h1><strong class="avail_bottle">Available Bottle:</strong>${bottle}</h1>`;
};
function getProduct(){
    fetch('/products.json', {
    })
        .then(results => results.json())
        .then(data => {
            data.forEach(product => {
                document.querySelector(".products").insertAdjacentHTML('beforeend', `
        <a href="${product.bottles ? `/pages/pricing/product${product.name}.html` : ""}" class="product" onclick="productPage()">
        <div class="product_inner" >
        <img src="${product.image}" class="image">
        <div class="product_inner_inner">
        <h1 class="name">${product.name}</h1>
        <h1 class="price">${product.price}</h1>
        ${product.bottles ? availbleBottle(product.bottles) : `<h1>Not Available</h1>`}
        </div>
        </div>
        </a>
        `)
            });
        })
        ;
}
getProduct()
let drink = document.querySelector(".drink").value
let bottles = document.querySelector(".bottles").value
let amount = document.querySelector(".amount").value
function newDrink() {
    const newProduct = [
        {
            "name": drink,
            "price": amount,
            "bottles": bottles
        }
    ]
    fetch('/products.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    }).then(res => console.log(res.json()))
        .then(data => console.log(data))
      try {
        
      } catch (error) {
        console.log(error);
      } 
}
newDrink()