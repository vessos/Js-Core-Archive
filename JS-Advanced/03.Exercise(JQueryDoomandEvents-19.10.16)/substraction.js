/**
 * Created by MARK-Max on 19.10.2016 г..
 */
function subtract() {
    let firstNumber = $('#firstNumber');
    let secondNumber = $('#secondNumber');
    let result = $('#result')
    let resultat = parseFloat(firstNumber.val()) - parseFloat(secondNumber.val());
    result[0].textContent = resultat;
}
