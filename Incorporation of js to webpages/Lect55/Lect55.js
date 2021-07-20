document.addEventListener("DOMContentLoaded",
    function (event) {
        function sayHello(event) {
            this.textContent = "Said it!";
            var name = document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!</h2>";
            // document.getElementById("content").textContent=message;
            document.getElementById("content").innerHTML = message;
            if (name === "student") {
                var title = document.querySelector("#title").textContent;
                title += " & lovin' it!";
                document.querySelector("h1").textContent = title;
            }
        };


        document.querySelector("button").addEventListener("click", sayHello);
        document.querySelector("body").addEventListener("mousemove",
            function (event) {
                if(event.shiftKey === true)    
                console.log("x: " + event.clientX);
                    console.log("y: " + event.clientY);
                }
            );
    }
);
