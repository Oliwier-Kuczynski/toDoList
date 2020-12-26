let addToDoButton = document.querySelector('#addToDo');
let container = document.querySelector('#addToDoContainer');
let inputField = document.querySelector('#inputField');


addToDoButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    container.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "red";
    })
    paragraph.addEventListener('dblclick', () => {
        container.removeChild(paragraph);
    })
})

