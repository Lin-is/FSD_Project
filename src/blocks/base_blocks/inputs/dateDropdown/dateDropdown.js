import 'air-datepicker'

let elements = document.querySelectorAll('.dateDropdown__input')
console.log(elements)
let dateDropdowns = []
for (let elem of elements) {
    dateDropdowns.push(document.getElementById(elem.getAttribute('id')))
}
console.log(dateDropdowns)
for(let elem of dateDropdowns){
    $('#' + elem.getAttribute('id')).datepicker({
        classes: 'added_datepicker',
    })
    console.log('SSSSSSSSSSS')
}


