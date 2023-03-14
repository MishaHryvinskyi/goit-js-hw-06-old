const liItem = document.querySelectorAll(".item");

liItem.forEach(elem =>{
    console.log('Category:', elem.firstElementChild.textContent);
    console.log('Elements:', elem.lastElementChild.children.length);
});