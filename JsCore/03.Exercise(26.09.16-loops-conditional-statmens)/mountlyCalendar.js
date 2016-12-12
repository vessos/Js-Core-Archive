/**
 * Created by MARK-Max on 26.9.2016 г..
 */
function calendar([day,mounth,year]) {
    [day,mounth,year]=[day,mounth,year].map(Number);
    let firstDay = new Date(year,mounth-1,1);
    let firstDateOfCalendar = new Date(firstDay);
    firstDateOfCalendar.setDate(firstDateOfCalendar.getDate()-)

}
