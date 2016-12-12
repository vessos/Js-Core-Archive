/**
 * Created by MARK-Max on 22.9.2016 г..
 */
'use strict'
function nowplaying(data){
    let artistName = data[1];
    let trackName = data[0];
    let duration = data[2];
    //console.log('Now Playing: '+artistName+ " - "+trackName+' ['+duration+']');
    console.log("Now Playing: {0} - {1} [{2}]".replace(artistName,trackName,duration));
}
nowplaying(['Number One','Nelly','4:09'])