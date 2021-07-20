document.addEventListener("DOMContentLoaded",
    function (event) {
        //Unobstrusive event binding
        document.querySelector("button")
            .addEventListener("click", function () {
                // Call server to get the name
                $ajaxUtils
                    .sendGetRequest("./chicken.json",
                        function (res) {
                            var message =
                                res.firstName + " " + res.lastName + " ";
                            if (res.likesChicken) {
                                message += " Likes chicken";
                            }
                            else {
                                message += " hates chicken";
                            }
                            message += " and uses ";
                            message += res.numberOfDisplays;
                            message += " displays for coding.";

                            document.querySelector("#content")
                            .innerHTML = "<h2>" + message + "</h2>";
                        });


    });
    }
);
