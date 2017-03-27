Quiz
What does DOM stand for?
document object model.

What is the name of the object we can use to get information about the browser enviroment?
window

What is the name of the object that we can use to get access to the DOM representation of the page?
document

What type of files might we see in the Network tab for in Chrome devTools?
images, js, css

What version of HTML is document.querySelector from?
HTML5

Which event do we hook into when we want to know the DOM has loaded, window.onload or document.onload?
window.onload seems like the better option as it's fired after all images and other external content is loaded, document.load is fired when the DOM is ready which can be before external content has loaded.

We use window.createElement to make new DOM elements, true or false?
false. document.createElement

List two ways to get all the elements by class 'cat'
document.getElementsByClass('cat');
document.querySelectorAll('.cat');

List two ways to retrieve the element with id "goat"
document.getElementById('goat');
document.querySelector('#goat');

List two ways to get all the li elements
document.getElementsByTagName('li');
document.querySelectorAll('li');

List two ways to get the first li element
document.getElementsByTagName('li')[0];
document.querySelectorAll('li')[0];
document.querySelector('li');

How can we set the a given element to be hidden?
.....style.visibility = "hidden"