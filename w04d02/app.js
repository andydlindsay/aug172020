// console.log(`hello ${name}`);

// const node = document.createElement("li"); // Create a <li> node
// const textnode = document.createTextNode("Four"); // Create a text node
// node.appendChild(textnode); // Append the text to <li>

// const myList = document.getElementById('main-list'); // grab something in the DOM
// // myList.appendChild(node); // Append <li> to <ul> with id="myList"
// myList.prepend(node);

// const arr = [1,2,3];

// // arr.filter().map().reduce();

// // jquery
// console.log(jQuery === $);

// // Create a <li> node
// const $li = $('<li>').text('Five'); // <li></li>
// // const $li = $('<li>Four</li>');

// const $mainList = $('#main-list');
// // $mainList.append($li);
// $mainList.prepend($li);

// $('#main-list').prepend('<li>Six</li>');

// // Events
// const $h1 = $('h1');
// $h1.on('click', (event) => {
//   console.log(event);
// });

// $h1.click(() => {});

$(() => {
  // all code in here
});

$(document).ready(() => {
  console.log(`hello ${name}`);

  const node = document.createElement("li"); // Create a <li> node
  const textnode = document.createTextNode("Four"); // Create a text node
  node.appendChild(textnode); // Append the text to <li>

  const myList = document.getElementById('main-list'); // grab something in the DOM
  // myList.appendChild(node); // Append <li> to <ul> with id="myList"
  myList.prepend(node);

  const arr = [1,2,3];

  // arr.filter().map().reduce();

  // jquery
  console.log(jQuery === $);

  // Create a <li> node
  const $li = $('<li>').text('Five'); // <li></li>
  // const $li = $('<li>Four</li>');

  const $mainList = $('#main-list');
  // $mainList.append($li);
  $mainList.prepend($li);

  $('#main-list').prepend('<li>Six</li>');

  // Events
  const $h1 = $('h1');
  $h1.on('click', (event) => {
    console.log(event);
  });
});



// 
