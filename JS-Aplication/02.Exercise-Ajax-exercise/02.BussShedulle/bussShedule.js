/**
 * Created by MARK-Max on 17.11.2016 г..
 */
function solve() {
    let bussStop = 'depot';
    let bussNext ='';
    function depart(){
        $.get(`https://judgetests.firebaseio.com/schedule/${bussStop}.json`)
            .then(function currentState (data) {
                $(".info").text(`Next stop ${data.name}`)
                bussStop = data.next;
                bussNext=data.name;
        });
        $("#depart").attr("disabled", true);
        $("#arrive").attr("disabled", false);
    }
    function arrive(){
        $.get(`https://judgetests.firebaseio.com/schedule/${bussStop}.json`)
            .then(function currentState (data) {
                $(".info").text(`Arriving at ${bussNext}`)
            });
        $("#depart").attr("disabled", false);
        $("#arrive").attr("disabled", true);
    }
    return {
        depart,
        arrive
    };
}
let result = solve();