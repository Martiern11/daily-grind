// alert("can you see this?");

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = {};
console.log(myDay);

function coffeeTemplate(coffee) {
  return `
    <p>
        <img
          src="${coffee.pic}"
          alt="${coffee.alt}"
          id="coffee"/>
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily
        coffee special is <strong class="feature">${coffee.name}</strong>,
       ${coffee.desc}!
      </p>

    `;
}

// use location object
switch (myDay) {
  case 0:
    today = "Sunday";
    coffee = {
      name: "Cold Brew",
      pic: "images/cold-brew.jpg",
      alt: "This is a picture of some cold brew",
      color: "yellow",
      day: "Sunday",
      desc: "I like me some Cold Brew!!",
    };
    break;

  case 1:
    today = "Monday";
    coffee = {
      name: "Mocha",
      pic: "images/mocha.jpg",
      alt: "a picture of a mocha coffee",
      color: "brown",
      day: "Monday",
      desc: "I love Mocha!!",
    };
    break;

  case 2:
    today = "Tuesday";
    coffee = {
      name: "Bubble Tea",
      pic: "images/Bubble-Tea.jpg",
      alt: "a picture of a bubble tea",
      color: "pink",
      day: "Tuesday",
      desc: "I like Bubble Tea!!",
    };
    break;

  case 3:
    today = "Wednesday";
    coffee = {
      name: "Drip",
      pic: "images/drip.jpg",
      alt: "a picture of a drip",
      color: "green",
      day: "Wednesday",
      desc: "I like me some drip!",
    };
    break;

  case 4:
    today = "Thursday";
    coffee = {
      name: "Caramel-latte",
      pic: "images/caramel-latte.jpg",
      alt: "a picture of a caramel-latte",
      color: "red",
      day: "Thursday",
      desc: "I enjoy some caramek-latte!",
    };
  case 5:
    today = "Friday";
    coffee = {
      name: "frappacino",
      pic: "images/frappacino.jpg",
      alt: "a picture of a frappacino",
      color: "purple",
      day: "Friday",
      desc: "I like me some frappacino!",
    };
    break;
  case 6:
    today = "Saturday";
    coffee = {
      name: "pumpkin-spice-latte",
      pic: "images/pumkin-spice-latte.jpg",
      alt: "a picture of a pumpkin-spice-latte",
      color: "orange",
      day: "Saturday",
      desc: "I like me some pumpkin-spice-latte!",
    };
    break;
  default:
    today = "something went wrong!";
}

console.log(today);

// Places our coffee object on the page. //
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;
