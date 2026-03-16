let cart = [];

function add(name,price){

let item = cart.find(i => i.name === name);

if(item){
item.qty++;
}else{
cart.push({
name:name,
price:price,
qty:1
});
}

updateCart();

}


function updateCart(){

let cartList = document.getElementById("cart");
cartList.innerHTML="";

let subtotal = 0;

cart.forEach((item,index)=>{

let li = document.createElement("li");

li.innerHTML = `
${item.name} - ₹${item.price}
<br>
<button onclick="decrease(${index})">-</button>
${item.qty}
<button onclick="increase(${index})">+</button>
`;

cartList.appendChild(li);

subtotal += item.price * item.qty;

});

document.getElementById("subtotal").innerText = subtotal;

let delivery = 0;

if(subtotal < 300 && subtotal > 0){
delivery = 49;
}

document.getElementById("delivery").innerText = delivery;

let total = subtotal + delivery;

document.getElementById("total").innerText = total;

document.getElementById("viewCartCount").innerText = cart.length;

}


function increase(index){

cart[index].qty++;
updateCart();

}


function decrease(index){

cart[index].qty--;

if(cart[index].qty <= 0){
cart.splice(index,1);
}

updateCart();

}


function openCart(){

document.getElementById("cartPopup").style.display="flex";

}


function closeCart(){

document.getElementById("cartPopup").style.display="none";

}


function order(){

let name = document.getElementById("name").value.trim();
let phone = document.getElementById("phone").value.trim();
let payment = document.getElementById("payment").value;

if(name === "" || phone === ""){
alert("Enter name and phone number");
return;
}

if(cart.length === 0){
alert("Cart is empty");
return;
}

let message = "New Order - Underground Cloud Kitchen\n\n";

let subtotal = 0;

cart.forEach(item=>{
message += item.name + " x" + item.qty + " - ₹" + (item.price * item.qty) + "\n";
subtotal += item.price * item.qty;
});

let delivery = subtotal < 300 ? 49 : 0;

let total = subtotal + delivery;

message += "\nSubtotal: ₹" + subtotal;
message += "\nDelivery: ₹" + delivery;
message += "\nTotal: ₹" + total;
message += "\nName: " + name;
message += "\nPhone: " + phone;
message += "\nPayment: " + payment;

let number = "917981694394";

let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

window.location.href = url;

}