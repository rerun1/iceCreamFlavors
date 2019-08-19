var flavors = ["Bacon", "Bastani Sonnati", "Beer", "Birthday Cake", "Black Sesame Seed", "Blue Moon", "Brown Bread", "Butter Brickle", "Butter Pecan", "Candy Bar", "Cherry", "Chocolate", "Chocolate Chip", "Chocolate Chip Cookie Dough", "Coconut", "Cookie Dough", "Cookies and Cream", "Cotton Candy", "Crab", "Creme de Menthe", "Dulce de Leche", "Durian", "Egg Custard", "French Vanilla", "Garlic", "Grape", "Grape-Nuts", "Green Tea", "Halva", "Heath Bar", "Hokey Pokey", "Honeycomb Toffee", "Lucuma", "Mamey", "Mango", "Marshmallow creme", "Mint", "Mint Chocolate Chip", "Moon Mist", "Moose Tracks", "Neapolitan", "Nuts", "Oyster", "Peppermint", "Pistachio", "Raspberry Ripple", "Rocky Road", "Spearmint", "Spumoni", "Stracciatella", "Strawberry", "Superman", "Teaberry", "Tiger Tail", "Toffee", "Tutti Frutti", "Ube", "Vanilla", "Wintergreen"];

var americasTopTen = ["Vanilla", "Chocolate", "Cookies and Cream", "Mint Chocolate Chip", "Chocolate Chip Cookie Dough", "Butter Pecan", "Cookie Dough", "Strawberry", "Moose Tracks", "Neapolitan"];

var myTopTen = ["Butter Pecan", "Cherry", "Chocolate", "Spumoni", "Rocky Road", "Mango", "French Vanilla", "Pistachio", "Cookies and Cream", "Rum Raisun"];



$(document).ready(function(){

  $("ol#americasTopTen").empty();
  $("ol#myTopTen").empty();
  $("ol#wiki").empty();

  for (var flavor = 0; flavor < americasTopTen.length; flavor += 1) {
    $("ol#americasTopTen").append("<li>"+americasTopTen[flavor]+"</li>");
  }
  for (var flavor = 0; flavor < myTopTen.length; flavor += 1) {
    $("ol#myTopTen").append("<li>"+myTopTen[flavor]+"</li>");
  }
  for (var flavor = 0; flavor < flavors.length; flavor += 1) {
    $("ol#wiki").append("<li>"+flavors[flavor]+"</li>")
  }
});
