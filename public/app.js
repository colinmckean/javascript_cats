var createUL = function () {
  var catUL = document.createElement('ul');
  catUL.classList.add('cat');
  return catUL;
};

var createNameLI = function (name) {
  var catNameLI = document.createElement('li');
  catNameLI.innerText = ("Name: " + name);
  return catNameLI;
};

var createFoodLI = function (food) {
  var catFoodLI = document.createElement('li');
  catFoodLI.innerText = ("Favourite food: " + food);
  return catFoodLI;
};

var createIMG = function (imageUrl) {
  var listItem = document.createElement('li'), catIMG = document.createElement('img');
  catIMG.setAttribute("src", imageUrl);
  catIMG.setAttribute("width", 500);
  //this also works.
  //  catIMG.src = imageUrl;
  // catIMG.width = 500;
  listItem.appendChild(catIMG);
  return listItem;
};

var appendElements = function (cats, catUL, catLI, catFoodLi, imageUrl) {
  catUL.appendChild(catLI);
  catUL.appendChild(catFoodLi);
  catUL.appendChild(imageUrl);
  cats.appendChild(catUL);
};

var addCat = function (name, food, imageUrl) {
  var catUL = createUL();
  var catNameLI = createNameLI(name);
  var catFoodLI = createFoodLI(food);
  var catIMG = createIMG(imageUrl);
  var cats = document.getElementById('cats');
  appendElements(cats, catUL, catNameLI, catFoodLI, catIMG);
};

var catsArray = [{
  name: "Colin",
  favouriteFood: "Cheese Burger",
  imageUrl: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
},
{
  name: "Boba",
  favouriteFood: "Sock fluff",
  imageUrl: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
},
{
  name: "Barnaby",
  favouriteFood: "Tuna",
  imageUrl: "http://66.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"
},
{
  name: "Max",
  favouriteFood: "Whiskas Temptations",
  imageUrl: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
}];

var app = function () {
  for (var cat of catsArray) {
    addCat(cat.name, cat.favouriteFood, cat.imageUrl);
  }
};

window.onload = app;