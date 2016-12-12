/**
 * Created by MARK-Max on 23.10.2016 г..
 */
function initializeTable(){
   $('#createLink').click(function(){
       let countryName = $('#newCountryText').val();
       let capital = $('#newCapitalText').val();
       appendCountryToTable(countryName,capital,true);
       $('#newCountryText').val('');
       $('#newCapitalText').val('');
       fixRowActions();
   });

    appendCountryToTable('Bulgaria','Sofia');
    appendCountryToTable('Germany','Berlin');
    appendCountryToTable('Russia','Moscow');
    function appendCountryToTable(countryName,capital){
        let tr =$('<tr>');
        tr.append($("<td>").text(countryName));
        tr.append($("<td>").text(capital));
        let upLink= $("<a href='#'>[Up]</a>")
            .click(moveUp);
        let downLink= $("<a href='#'>[Down]</a>")
            .click(moveDown);
        let delLink= $("<a href='#'>[Delete]</a>")
            .click(deleteItem);
        tr.append($("<td>")
            .append(upLink)
            .append(" ")
            .append(downLink)
            .append(" ")
            .append(delLink)
        );
        tr.css('display','none')
        $('#countriesTable').append(tr);
        tr.fadeIn();
        //fixRowActions();
    }
    function deleteItem (){
        let row = $(this).parent().parent();
        row.fadeOut(function(){
            row.remove();
            fixRowActions();
        })


    }
    function moveUp(){
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.prev().insertAfter(row)
            row.fadeIn();
            fixRowActions();
        });

    }
    function moveDown(){
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.next().insertBefore(row)
            row.fadeIn();
            fixRowActions();
        });

    }
    function fixRowActions(){
       let rows= $('#countriesTable tr').toArray();
        $(rows).find("td a").show();
        $(rows[2]).find("td a:contains('Up')").hide();
        $(rows[rows.length-1]).find("td a:contains('Down')").hide();

    }
}