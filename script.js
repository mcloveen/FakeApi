$(document).ready(function () {
    $("#dataSelect").on("change", function () {
        let selectedOption = $(this).val();
        $("#dataContainer tbody").empty();

        if (selectedOption === "posts") {
            $.get("https://jsonplaceholder.typicode.com/posts", function (posts) {
                posts.forEach(function (post) {
                    let row = $("<tr>");
                    $("<td>").text(post.id).appendTo(row);
                    $("<td>").text(post.title).appendTo(row);
                    $("<td>").text(post.body).appendTo(row);
                    $("<td>").text("").appendTo(row);
                    $("<td>").text("").appendTo(row);
                    $("#dataContainer tbody").append(row);
                });
            });
        } else if (selectedOption === "comments") {
            $.get("https://jsonplaceholder.typicode.com/comments", function (comments) {
                comments.forEach(function (comment) {
                    let row = $("<tr>");
                    $("<td>").text(comment.id).appendTo(row);
                    $("<td>").text(comment.name).appendTo(row);
                    $("<td>").text(comment.body).appendTo(row);
                    $("<td>").text(comment.email).appendTo(row);
                    $("<td>").text("").appendTo(row);
                    $("#dataContainer tbody").append(row);
                });
            });
        } else if (selectedOption === "albums") {
            $.get("https://jsonplaceholder.typicode.com/albums", function (albums) {
                albums.forEach(function (album) {
                    let row = $("<tr>");
                    $("<td>").text(album.id).appendTo(row);
                    $("<td>").text(album.title).appendTo(row);
                    $("<td>").text("").appendTo(row);
                    $("<td>").text("").appendTo(row);
                    $("<td>").text("").appendTo(row);
                    $("#dataContainer tbody").append(row);
                });
            });
        } else if (selectedOption === "photos") {
            $.get("https://jsonplaceholder.typicode.com/photos", function (photos) {
                photos.forEach(function (photo) {
                    let row = $("<tr>");
                    $("<td>").text(photo.id).appendTo(row);
                    $("<td>").text(photo.title).appendTo(row);
                    $("<td>").text("").appendTo(row);
                    $("<td>").text("").appendTo(row);
                    $("<td>").append($("<img>").attr("src", photo.thumbnailUrl).addClass("thumbnail")).appendTo(row);
                    $("#dataContainer tbody").append(row);
                });
            });
        } else if (selectedOption === "todos") {
            $.get("https://jsonplaceholder.typicode.com/todos", function (todos) {
                todos.forEach(function (todo) {
                    let row = $("<tr>");
                    $("<td>").text(todo.id).appendTo(row);
                    $("<td>").text(todo.title).appendTo(row);
                    $("<td>").text(todo.completed ? "Yes" : "No").appendTo(row);
                    $("#dataContainer tbody").append(row);
                });
            });
        } else if (selectedOption === "users") {
            $.get("https://jsonplaceholder.typicode.com/users", function (users) {
                users.forEach(function (user) {
                    let row = $("<tr>");
                    $("<td>").text(user.id).appendTo(row);
                    $("<td>").text(user.name).appendTo(row);
                    $("<td>").text(user.username).appendTo(row);
                    $("<td>").text(user.email).appendTo(row);
                    $("<td>").text(user.phone).appendTo(row);
                    $("#dataContainer tbody").append(row);
                });
            });
        }
    });
});
