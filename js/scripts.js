var flavors = ["Bacon", "Bastani Sonnati", "Beer", "Birthday Cake", "Black Sesame Seed", "Blue Moon", "Brown Bread", "Butter Brickle", "Butter Pecan", "Candy Bar", "Cherry", "Chocolate", "Chocolate Chip", "Chocolate Chip Cookie Dough", "Coconut", "Cookie Dough", "Cookies and Cream", "Cotton Candy", "Crab", "Creme de Menthe", "Dulce de Leche", "Durian", "Egg Custard", "French Vanilla", "Garlic", "Grape", "Grape-Nuts", "Green Tea", "Halva", "Heath Bar", "Hokey Pokey", "Honeycomb Toffee", "Lucuma", "Mamey", "Mango", "Marshmallow creme", "Mint", "Mint Chocolate Chip", "Moon Mist", "Moose Tracks", "Neapolitan", "Nuts", "Oyster", "Peppermint", "Pistachio", "Raspberry Ripple", "Rocky Road", "Spearmint", "Spumoni", "Stracciatella", "Strawberry", "Superman", "Teaberry", "Tiger Tail", "Toffee", "Tutti Frutti", "Ube", "Vanilla", "Wintergreen"];

console.log(flavors);

var topTenFlavors = [];

topTenFlavors.push(flavors[57]);
topTenFlavors.push(flavors[11]);
topTenFlavors.push(flavors[16]);
topTenFlavors.push(flavors[37]);
topTenFlavors.push(flavors[13]);
topTenFlavors.push(flavors[8]);
topTenFlavors.push(flavors[15]);
topTenFlavors.push(flavors[50]);
topTenFlavors.push(flavors[39]);
topTenFlavors.push(flavors[40]);

console.log(topTenFlavors);

var myTopTenFlavors = [];

myTopTenFlavors.push(flavors[8]);
myTopTenFlavors.push(flavors[10]);
myTopTenFlavors.push(flavors[11]);
myTopTenFlavors.push(flavors[48]);
myTopTenFlavors.push(flavors[46]);
myTopTenFlavors.push(flavors[34]);
myTopTenFlavors.push(flavors[23]);
myTopTenFlavors.push(flavors[44]);
myTopTenFlavors.push(flavors[16]);
myTopTenFlavors.push("Rum Raisun");

console.log(myTopTenFlavors);


$(document).ready(function(){

  $("ol#americasTopTen").empty();
  $("ol#myTopTen").empty();
  $("ol#wiki").empty();

  topTenFlavors.forEach(function(flavor){
    $("ol#americasTopTen").append("<li>"+flavor+"</li>");
  });
  myTopTenFlavors.forEach(function(flavor){
    $("ol#myTopTen").append("<li>"+flavor+"</li>");
  });
  flavors.forEach(function(flavor){
    $("ol#wiki").append("<li>"+flavor+"</li>");
  });

});
