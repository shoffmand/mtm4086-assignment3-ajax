$('#save').click(function () {
    // add loading image to div
    $('#loading').html('<img src="http://preloaders.net/preloaders/287/Filling%20broken%20ring.gif"> loading...');
    
    // run ajax request dateFormat(data.created_at, 'dd/MM/yy')
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/shoffmand",
        success: function (data) {
            console.log(data);
            setTimeout(function () {
                $('#loading').html('<img src="' + data.avatar_url + '"><br>' + '<p>' + data.login + '</p>' + '<a href="' + data.html_url + '">My GitHub<a/>' + '<br>' + '<p>Public Repos: ' + data.public_repos + '</p>' + '<p>Date Created: ' + data.created_at + '</p>');
            }, 2000);
        }
    });
});