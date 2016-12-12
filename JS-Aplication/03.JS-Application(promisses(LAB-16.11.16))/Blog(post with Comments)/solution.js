/**
 * Created by MARK-Max on 28.11.2016 г..
 */
function attachEvents() {
    $(document).ready(function () {
        const kinveyAppId = "kid_B15S6I9Zl";
        const serviceUrl = "https://baas.kinvey.com/appdata/" + kinveyAppId;
        const kinveyUsername = "peter";
        const kinveyPassword = "p";
        const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
        const authHeaders = {"Authorization": "Basic " + base64auth};

        $("#btnLoadPosts").click(loadPostsClicked);
        $("#btnViewPost").click(viewPostsClicked)


        function loadPostsClicked() {
            $.ajax({
                method: "GET",
                url: serviceUrl + "/posts",
                headers: authHeaders
            }).then(displayPostsInDropDown)
                .catch(displayError)
        }

        function displayPostsInDropDown(posts) {
            for (let post of posts) {
                let option = $("<option>");
                option.text(post.title);
                option.val(post._id);
                $("#posts").append(option)
            }
        }

        function displayError(error) {
            let errDiv = $("<div>").text("Error: " + error.status + ' (' + error.statusText + ') ');
            $(document.body).prepend(errDiv)
            setTimeout(function () {
                errDiv.fadeOut(function () {
                    errDiv.remove()
                })
            }, 2000)
        }

        function viewPostsClicked() {
            let selectedPostId = $('#posts').val();
            let postRequest = $.ajax({
                method: "GET",
                url: serviceUrl + "/posts/" + selectedPostId,
                headers: authHeaders
            });

            let commentsRequest = $.ajax({
                method: "GET",
                url: serviceUrl + `/comments/?query={"post_id":"${selectedPostId}"}`,
                headers: authHeaders
            });
            Promise.all([postRequest, commentsRequest])
                .then(displayPostWithComments)
                .catch(displayError);
        }

        function displayPostWithComments([post,comments]) {
            $("#post-title").text(post.title);
            $("#post-body").text(post.body);

            $("#post-comments").empty();
            for (let comment of comments) {
                $("<li>").text(comment.text).appendTo($("#post-comments"))
            }
        }


    })
}