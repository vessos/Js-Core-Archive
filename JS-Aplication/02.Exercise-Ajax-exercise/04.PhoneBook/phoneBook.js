/**
 * Created by MARK-Max on 17.11.2016 г..
 */
function attachEvents() {

    $("#btnLoad").click(function () {
        $("#phonebook li").remove();
        $.get("https://phonebook-nakov.firebaseio.com/phonebook.json")
            .then(getPhoneContact)
            .catch(getError)
        function getPhoneContact(data) {
            //console.log(data)
            for (let index in data) {
                //console.log(index)
                let btn = $(`<button id=delete>[Delete]</button>`);
                let li = $(`<li id="${index}">${data[index].person}: ${data[index].phone}</li>`);
                li.append(btn);
                $("#phonebook").append(li);
                $(btn).click(deleteButton)
            }

            function deleteButton() {
                let element = $(this).parent()[0];
                let idContact = element.id;
                //console.log(idContact)
                let pull = {
                    method: "DELETE",
                    url: "https://phonebook-nakov.firebaseio.com/phonebook/" + idContact + ".json"
                };
                console.log(pull.url);
                $.ajax(pull)
                    .then(deleteContact)
                    .catch(getError);
                function deleteContact(data) {
                    console.log(data);
                    element.remove();
                    getPhoneContact()
                }

            }
        }

    });
    $("#btnCreate").click(function () {

        let persons = $("#person").val();
        let phonee = $("#phone").val();
        $("#person").val('');
        $("#phone").val('');
        let body = JSON.stringify({
            person: persons,
            phone: phonee
        });
        //console.log(body);
        let fill = {
            method: "POST",
            url: "https://phonebook-nakov.firebaseio.com/phonebook.json",
            data: body
        };
        $.ajax(fill)
            .then(postPerson)
            .catch(getError);
        function postPerson(data) {
            console.log(data)

        }


    });
    function getError(err) {
        console.log(err)
    }

}