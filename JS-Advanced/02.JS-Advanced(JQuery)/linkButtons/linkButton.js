/**
 * Created by MARK-Max on 23.10.2016 г..
 */
function attachEvent() {
    $('a.button').on('click', buttonClicked);
    function buttonClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        // "this" is the event source (the hyperlink clicked)
    }
}
