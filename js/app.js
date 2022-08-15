// todo: implement this method all h2 to color lightblue
const h2All = document.querySelectorAll("h2");
for (const h2 of h2All) {
  h2.style.color = "lightblue";
}

// todo: implement this method to backpack background color to tomato.
document.getElementById("back-pack").style.backgroundColor = "tomato";

// todo: implement this method to card class to uee border radius to 30 pixels.
const cards = document.querySelectorAll(".card");
for (const card of cards) {
  card.style.backgroundColor = "green";
  card.style.borderRadius = "30px";
}

// todo: implement this method to buy now button click and show result on console.
document.addEventListener("click", function buyNow() {
  console.log("buy now button clicked");
});

// todo: implement this method to buy now button click and remove from website.
const buyNowButton = document.querySelectorAll("button");
for (const button of buyNowButton) {
    document.addEventListener("click", function (event) {
      event.target.remove();
  });
}
