// CART ARRAY
let cart = [];
let total = 0;

// ADD ITEM
function add(name, price){

cart.push({name:name, price:price});

total += price;

updateCart();

}

// UPDATE CART
function updateCart(){

let cartList = document.getElementById("cart");

cartList.innerHTML = "";

cart.forEach((item,index)=>{

let li = document.createElement("li");

li.innerText = item.name + " - ₹" + item.price;

cartList.appendChild(li);

});

document.getElementById("total").innerText = total;

}


// PLACE ORDER
function order(){

let name = document.getElementById("name").value.trim();
let phone = document.getElementById("phone").value.trim();
let payment = document.getElementById("payment").value;

if(name === "" || phone === ""){
alert("Please enter name and phone number");
return;
}

if(cart.length === 0){
alert("Cart is empty");
return;
}

// BUILD MESSAGE
let message = "New Order - Underground Cloud Kitchen\n\n";

cart.forEach(item=>{
message += item.name + " - ₹" + item.price + "\n";
});

message += "\nTotal: ₹" + total;
message += "\nName: " + name;
message += "\nPhone: " + phone;
message += "\nPayment: " + payment;

// YOUR WHATSAPP NUMBER
let whatsappNumber = "917981694394";

let url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

// OPEN WHATSAPP
window.location.href = url;

}