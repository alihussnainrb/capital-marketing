window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("op-0");
    setTimeout(()=>{
        document.querySelector(".preloader").style.display="none"
    },1000)

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
})








if(document.readyState=='loading'){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}




function ready(){

    var RemoveCartItem=document.getElementsByClassName("remove-cart")
    var TotalRemoveCartItem=RemoveCartItem.length

    for(var i=0;i<TotalRemoveCartItem;i++){
        var removebtn=RemoveCartItem[i];
        removebtn.addEventListener("click", removecartitem)
    }


    var quantityinputs=document.getElementsByClassName("qtty-input")
    for(var i=0;i<quantityinputs.length;i++){
        var input=quantityinputs[i]
        input.addEventListener("change", quantitychanged)
    }

}










function removecartitem(event){
    var removebtnClicked= event.target;
    removebtnClicked.parentElement.parentElement.remove();
    UpdateCartTotal();
}




var AddCartBtn=document.getElementsByClassName("add-cart")
    var totalAddCartBtn=AddCartBtn.length
    
    for(var i=0; i<totalAddCartBtn;i++){
        var AddBtn=AddCartBtn[i]
        AddBtn.addEventListener("click", AddToCartClicked)
    }








function AddToCartClicked(event){
    var AddBtn=event.target
    var shopitem=AddBtn.parentElement.parentElement
    var title=shopitem.getElementsByClassName("shop-title")[0].innerText
    var price=shopitem.getElementsByClassName("shop-price")[0].innerText
    var imgsrc=shopitem.getElementsByClassName("shop-img")[0].src
    addToCart(title,price,imgsrc);
    UpdateCartTotal();
}






function addToCart(title,price,imgsrc){
    const cartitem=document.createElement("div");
    const allcarts=document.getElementsByClassName("all-carts")[0];
    cartitem.classList.add("cart-item");
    cartitemTitle=allcarts.getElementsByClassName("title");
    for(let i = 0; i<cartitemTitle.length; i++)
    {
        if(cartitemTitle[i].innerText == title){
            alert("This item is already added to the cart.")
            return
        }
    }
    itemContent = `
        <div class="cart-img">
            <img class="cart-img" src="${imgsrc}">
        </div>
        <div class="cart-info">
            <div class="name">
                <h1 class="title">${title}</h1>
            </div>
            <div class="pric">
                <h1 class="price" style="font-size: 15px;">${price}</h1>
            </div>
            <div class="qtty">
                <h1 class="qntty">Quantity : </h1>
                <input type="number" name="" value="1" class="qtty-input">
            </div>
        </div>
        <div class="option">
            <button class="remove-cart btn">Remove</button>
        </div>`
    cartitem.innerHTML = itemContent;
    allcarts.append(cartitem);
    cartitem.getElementsByClassName("remove-cart")[0].addEventListener("click", removecartitem);
    cartitem.getElementsByClassName("qtty-input")[0].addEventListener("change", quantitychanged);
}





function quantitychanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value=1
    }
    UpdateCartTotal();
}



function UpdateCartTotal(){
    var CartItemContainer=document.getElementsByClassName("all-carts")[0];
    var CartItems=CartItemContainer.getElementsByClassName("cart-item");
    var total = 0
    for(var i=0;i<CartItems.length;i++){
        var cartitem=CartItems[i]
        var cartprice = cartitem.getElementsByClassName("price")[0]
        var cartqtty = cartitem.getElementsByClassName("qtty-input")[0]
        var price = parseFloat(cartprice.innerText.replace('Rs.',''))
        var qtty = cartqtty.value
        total = total + (price * qtty)
    }
    total = Math.round(total * 100)/100
    document.getElementsByClassName("cart-total-price")[0].innerText = 'Total Amount : Rs.' + total
}

























const nav = document.querySelector(".nav-options");
const navBtns = nav.querySelectorAll("li");
const navToggler=document.querySelector(".nav-toggler");
const TopNav = document.querySelector(".navbar");
const SideNav=document.querySelector(".aside");
const body = document.querySelector(".body");








for(let i=0; i<navBtns.length; i++)
{
    navBtns[i].addEventListener("click",function(){
         for(let j=0; j<navBtns.length; j++)
         {
            navBtns[j].querySelector("a").classList.remove("active");
         }
        navBtns[i].querySelector("a").classList.add("active");
    })
}


















