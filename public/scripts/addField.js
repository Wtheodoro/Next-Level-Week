// get button
document.querySelector('#add-time').addEventListener('click', cloneField)
//add a action when hit the button

//manipulate DOM
function cloneField() {
    // cloneNode serve para clonar algo no HTML .cloneNode(true) pega os parent .cloneNode(false) pega so o proprio node( no caso só o <div>)
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar  os  campos
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(element => {
        element.value = ''
    });

    //onde colocar
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}