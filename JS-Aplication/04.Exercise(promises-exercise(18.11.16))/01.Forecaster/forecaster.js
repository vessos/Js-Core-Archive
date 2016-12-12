/**
 * Created by MARK-Max on 18.11.2016 г..
 */
function attachEvents (){
    $("#submit").click(function(){
        let name=$("#location").val();
        let code ='';
        $("#current").find('span').remove()
        $("#upcoming").find('span').remove()
        $.get("https://judgetests.firebaseio.com/locations.json")
            .then(getLocationName)
            .catch(errorLocationName)

        function getLocationName(data){
            for(let location of data){
                console.log(location)
                if(name==location.name){
                    code=location.code
                }
            }
            $.get(`https://judgetests.firebaseio.com/forecast/today/${code}.json `)
                .then(getTownForecast)
                .catch(errorLocationName)

            function getTownForecast(data1){
                $("#forecast").css("display","inline")
                console.log(data1)
                //console.log(visibleWeather(data1.forecast.condition))
                //console.log(1)
                let span=$(`<span class="condition symbol">${visibleWeather(data1.forecast.condition)}</span>`)
                $("#current").append(span);
                let bigSpan=($("<span class='condition'></span>"))
                bigSpan.append($(`<span class='forecast-data'>${data1.name}</span>`))
                bigSpan.append($(`<span class='forecast-data'>${data1.forecast.low}&#176/${data1.forecast.high}&#176</span>`))
                bigSpan.append($(`<span class='forecast-data'>${data1.forecast.condition}</span>`))
                $("#current").append(bigSpan)

            }
            $.get(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json `)
                .then(getForecastThreeDay)
                .catch(errorLocationName)
            function getForecastThreeDay(data2){
                for(let index of data2.forecast){
                    console.log(index)
                    let span1=$('<span class="upcoming"></span>')
                    span1.append($(`<span class="symbol">${visibleWeather(index.condition)}</span>`))
                    span1.append($(`<span class='forecast-data'>${index.low}&#176/${index.high}&#176</span>`))
    span1.append($(`<span class="forecast-data">${index.condition}</span>`))
                    $("#upcoming").append(span1)
                }
            }
            function visibleWeather(weather){
                let foreCast = ''
                switch(weather){
                    case 'Sunny': foreCast='&#x2600'
                        break;
                    case 'Partly sunny': foreCast='&#x26C5'
                        break;
                    case 'Overcast': foreCast='&#x2601'
                        break;
                    case 'Rain': foreCast='&#x2614'
                        break;
                    case 'Degrees': foreCast='&#176'
                        break;
                }
                //console.dir(forecast)
                return foreCast;
            }
        }
        function errorLocationName(err){
            $("#forecast").append("<p>Error</p>")
        }
        $('#location').val('');
    })
}