
import 'air-datepicker'

let elements = document.querySelectorAll('.filterDateDropdown__input')
console.log(elements)
let dateDropdowns = []
for (let elem of elements) {
    dateDropdowns.push(document.getElementById(elem.getAttribute('id')))
}
console.log(dateDropdowns)
for(let elem of dateDropdowns){
    $('#' + elem.getAttribute('id')).datepicker({
        range: true,
        multipleDatesSeparator: ' - ',
        toggleSelected: false,
        dateFormat: 'd M'
    })
    console.log('SSSSSSSSSSS')
}

