const currentItem = document.querySelector("#current-item");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const amount = document.getElementById("priceTag");
const sum = document.getElementById("sum");
const finalQuantity = document.getElementById("total");
const filledCart = document.getElementById("checkout");
const emptyCart = document.getElementById("checkout-nothing");
const cart= document.getElementById("cart");
const user = document.getElementById("user");
const checkOutBox= document.getElementById("checkout-box");
const cartAmount= document.getElementById("amount");
const addToCart= document.getElementById("add-to-cart");

  const clicked=(i)=>{
    currentItem.src= i.src
  }

  let quantity = 0;
  let price = 125;
 cartAmount.style.visibility= "hidden";

 const plusQuantity = ()=>{
    quantity++;
    let total = quantity * price ;

    amount.textContent = quantity;
    finalQuantity.textContent = quantity;
    cartAmount.textContent= quantity;
    
    sum.textContent = total;
    filledCart.style.visibility ="visible";
    emptyCart.style.visibility="hidden";
 }
 const minusQuantity = ()=>{
    quantity--;
    if(quantity>0){
        filledCart.style.visibility ="visible";
        emptyCart.style.visibility="hidden"
    }
    else{
        quantity=0
        filledCart.style.visibility ="hidden"
        cartAmount.style.visibility= "hidden";
        emptyCart.style.visibility="visible"
    }
    let total = quantity * price ;
    amount.textContent = quantity;
    finalQuantity.textContent = quantity;
    sum.textContent = total;
    cartAmount.textContent= quantity;
 }
 const del =()=> {
    quantity = 0;
    sum.textContent = 0;
    amount.textContent = quantity;
    finalQuantity.textContent = quantity;
    cartAmount.textContent= quantity;
    filledCart.style.visibility ="hidden"
    emptyCart.style.visibility="visible"
};
  minus.addEventListener("click", minusQuantity)
  plus.addEventListener("click", plusQuantity)

  const showCart=()=>{
    if(quantity==0){    
    emptyCart.style.visibility="visible"
    }
    if(checkOutBox.style.display=="block"){
      checkOutBox.style.display="none";
    }else{
      checkOutBox.style.display="block";
    }
}

user.addEventListener("click", showCart)
cart.addEventListener("click", showCart)
addToCart.addEventListener("click", ()=>{
  if(quantity>0){
    
    cartAmount.style.visibility= "visible";
    cartAmount.textContent= quantity;
  }
})