//store the products array in localstorage as "products"
var form = document.getElementById('products');
var productArray = JSON.parse(localStorage.getItem('products')) || []


// Creating Constructor Function for creating new Objects.
function ProductFunction(type, desc, price, image){
    this.type = type,
    this.desc = desc,
    this.price = price,
    this.image = image
}

//adding an eventlistener to form to fetch the form input values
form.addEventListener('submit', function(event){
    event.preventDefault();
    //creating an object with new keyword at each event and pushing to an array.
    var obj = new ProductFunction(form.type.value, form.desc.value, form.price.value, form.image.value)
    productArray.push(obj);
    // setting localstorage (database).
    localStorage.setItem('products', JSON.stringify(productArray));
    

    //making the input values empty after submitting 

    document.getElementById('type').value = ""
    document.getElementById('desc').value = ""
    document.getElementById('price').value = ""
    document.getElementById('image').value = ""
    window.location.reload();
})

//location change
function showProducts(){
    window.location.href = "../inventory.html"
}