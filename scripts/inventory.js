var allProducts = document.getElementById('all_products');

var productArray = JSON.parse(localStorage.getItem('products'))

// creating product card for each item in the localstorage
productArray.forEach((element, index) => {
    var card = document.createElement('div');

    var imgProduct = document.createElement('img');
    imgProduct.src = element.image;

    var p1 = document.createElement('p');
    p1.innerText = element.type

    var p2 = document.createElement('p');
    p2.innerText = element.desc

    var p3 = document.createElement('p');
    p3.innerText = "Rs "+element.price

    var btn = document.createElement('button');
    btn.innerText = "Remove Product"
    btn.setAttribute("id", "remove_product");
    btn.addEventListener('click', function(event){
        deleteProduct(index);
    })

    card.append(imgProduct, p1, p2, p3, btn)
    allProducts.append(card);
});


// function to delete a particular product

function deleteProduct(index){
    productArray.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(productArray));
    window.location.reload();
}

// location change

function addMoreProducts(){
    window.location.href = "../index.html"
}