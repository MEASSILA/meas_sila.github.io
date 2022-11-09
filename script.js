const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");

function Show() {
  document.getElementById("navbar").style.right = "0rem";
}
function Showhide() {
  document.getElementById("navbar").style.right = "0rem";
}
const clolth = [
  {
    img: "img/products/k1.PNG",
    title: "Sovann Sakor",
    des: "Khmer Pattern Shirt",
    price: 18,
  },
  {
    img: "img/products/k1.PNG",
    title: "Sovann Sakor",
    des: "Khmer Pattern Shirt",
    price: 18,
  },
  {
    img: "img/products/k1.PNG",
    title: "Sovann Sakor",
    des: "Khmer Pattern Shirt",
    price: 18,
  },
  {
    img: "img/products/k1.PNG",
    title: "Sovann Sakor",
    des: "Khmer Pattern Shirt",
    price: 18,
  },
  {
    img: "img/products/k1.PNG",
    title: "Sovann Sakor",
    des: "Khmer Pattern Shirt",
    price: 18,
  },
  {
    img: "img/products/k1.PNG",
    title: "Sovann Sakor",
    des: "Khmer Pattern Shirt",
    price: 18,
  },
];

function loopOut(x) {
  let str = "";
  x.map((i) => {
    str += `<div class="pro">
    <img src=${i.img}>
    <div class="des">
      <span>${i.title}</span>
      <h5>Khmer Pattern Shirt</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>${i.price} .00 $</h4>
    </div>
    <a href="#"><i class="fas fa-cart-shopping cart"></i></a>
</div>`;
  });
  document.querySelector(".content-clothe").innerHTML = str;
  console.log(str);
}
loopOut(clolth);
/* <div class="pro">
            <img src="img/products/k1.PNG" alt="">
            <div class="des">
              <span>Sovann Sakor</span>
              <h5>Khmer Pattern Shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$18</h4>
            </div>
            <a href="#"><i class="fas fa-cart-shopping cart"></i></a>
        </div> */
