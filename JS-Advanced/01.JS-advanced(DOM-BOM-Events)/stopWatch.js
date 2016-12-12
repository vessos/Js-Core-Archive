/**
 * Created by MARK-Max on 21.10.2016 г..
 */
function stopwatch (){
    let time;
    let interval;
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn')

    startButton.addEventListener('click',function(){
        time=-1;
        incrementTime();
        interval = setInterval(incrementTime,1000);
        startButton.disabled=true;
        stopButton.disabled=false;
    })
    stopButton.addEventListener('click',function () {
        clearInterval(interval);
        stopButton.disabled=true;
        startButton.disabled=false;
    })
    function incrementTime(){
        time++;
        document.getElementById('time').textContent =
            ("0" + Math.trunc(time / 60)).slice(-2) +
            ':' + ("0" + (time % 60)).slice(-2);
    }
}
