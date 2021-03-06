//$(document).ready(function($){
//    $('.formElements__container').css('background', 'rgba(255, 69, 0, 0.7)')
//})
import '../base_blocks/inputs/dropdown/dropdown'
import '../base_blocks/inputs/dateDropdown/dateDropdown'
import '../base_blocks/inputs/filterDateDropdown/filterDateDropdown'
import '../base_blocks/expandableCheckboxList/expandableCheckboxList'
import '../base_blocks/pagination/pagination'
import '../base_blocks/buttons/likeButton/likeButton'
import '../base_blocks/rangeSlider/rangeSlider'
import '../base_blocks/cards/roomSearch/roomSearch'
import '../base_blocks/cards/registrationCard/registrationCard'
import '../base_blocks/cards/entryCard/entryCard'
import '../base_blocks/cards/roomReservation/roomReservation'
import '../base_blocks/cards/roomPreview/roomPreview'
import '../base_blocks/header/header'
import 'nouislider'


// $('.cards__air-datepickerContainer').datepicker().data('datepicker').startDate(new Date(2019, 7, 8));
$('#uiKit-datepicker').datepicker({
    navTitles: {
        days: 'MM <i>yyyy</i>',
    },
    // onShow (inst, animationCompleted) {
    //     if (animationCompleted) {
    //         if (!inst.$datepicker.find('.datepicker--buttons .datepicker--button-apply').length) {
    //             $('<span class="datepicker--button datepicker--button-apply">Применить</span>').on('click', function (e) {
    //                 e.stopPropagation();
    //                 inst.hide();
    //             }).appendTo(inst.$datepicker.find('.datepicker--buttons'));
    //         }
    //     }
    // }
    onShow (inst, animationCompleted) {
        if (!inst.$datepicker.find('.datepicker--buttons .datepicker--button-apply').length) {
            $('<span class="datepicker--button datepicker--button-apply">Применить</span>').on('click', function (e) {
                e.stopPropagation();
                inst.hide();
            }).appendTo(inst.$datepicker.find('.datepicker--buttons'));
        }
    }
})
