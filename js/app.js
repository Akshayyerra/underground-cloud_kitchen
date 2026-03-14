let cart = []
let total = 0

function add(name, price){

cart.push({
name:name,
price:price
})

total += price

updateCart()

}

function updateCart(){

let cartList = document.getElementById("cart")

cartList.innerHTML = ""

cart.forEach(item=>{

let li = document.createElement("li")

li.innerText = item.name + " ₹" + item.price

cartList.appendChild(li)

})

document.getElementById("total").innerText = total

}


function order(){

let name = document.getElementById("name").value
let phone = document.getElementById("phone").value
let payment = document.getElementById("payment").value

let items=""

cart.forEach(item=>{
items += item.name + " ₹" + item.price + "\n"
})

let message =
"New Order - Underground Cloud Kitchen\n\n"+
"Customer: "+name+"\n"+
"Phone: "+phone+"\n\n"+
"Items:\n"+items+"\n"+
"Total: ₹"+total+"\n"+
"Payment: "+payment+"\n\n"+
"Please send your location."

let whatsappNumber = "917981694394"

let whatsappURL =
"https://wa.me/"+whatsappNumber+
"?text="+encodeURIComponent(message)


// SEND ORDER TO SERVER
fetch("/order",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:name,
phone:phone,
items:cart,
total:total,
payment:payment
})

})
.then(res=>res.json())
.then(data=>{

alert("Order Placed Successfully")

// REDIRECT TO WHATSAPP
window.location.href = whatsappURL

})

}