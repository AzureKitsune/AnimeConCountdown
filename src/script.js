(function() {
    function createConventionBlock(convention) {
        var html = "<div convention-date='" + convention["date"] + "' class='convention-item'>\r\n";
        html += "<h3><a href='" + convention["website"] + "'>" + convention["name"] + "</a></h3>\r\n";
        html += "<p></p>\r\n</div>";

        return html;
    }

    function convertMillisecondsToTimeSpan(milliseconds) {
        //based on code from: https://stackoverflow.com/a/14297656
        var diff = milliseconds;

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -=  days * (1000 * 60 * 60 * 24);

        var hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);

        var mins = Math.floor(diff / (1000 * 60));
        diff -= mins * (1000 * 60);

        var seconds = Math.floor(diff / (1000));
        diff -= seconds * (1000);

        return { "days" : days, "hours": hours, "minutes": mins, "seconds": seconds };
    }

    function fakeGet(callback) {
        callback(
            '{"conventions": [{ "name": "Anime Milwaukee 2021*", "date": "2021-02-18", "website": "https://animemilwaukee.org/"},{ "name": "Daisho Con 2020", "date": "2020-11-20", "website": "http://www.daishocon.org/"}]}'
        );
    }

    $(document).ready(function() {
        $.get("data/conventions.json", function(data) {
        //fakeGet(function(data) {
            var jsonData = JSON.parse(data);
    
            var conventions = jsonData["conventions"];
    
            for(var convention in conventions) {
                $("#main-content").append(createConventionBlock(conventions[convention]));
            }
        });
    });

    setInterval(function() {
        $(".convention-item").each(function() {
            var dateStr = $(this).attr("convention-date");
            var date = new Date(dateStr);
            var now = new Date();

            $(this).children("p").each(function(){
                var timeDiffMs = date - now;
                var diffObj = convertMillisecondsToTimeSpan(timeDiffMs);

                var diffStr = diffObj["days"] + " days, " + diffObj["hours"] + " hours, " + diffObj["minutes"] + " minutes, " + diffObj["seconds"] + " seconds.";

                $(this).text(diffStr);
            })
        });
    }, 1);
})();