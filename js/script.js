
var x = 0; // Controls how many times the mode chane butt on is clicked


function mode_change() 
        {
            x++;
            if (x % 2 != 0) 
                {
                    dark_mode();
                    console.log("exececuted dark mode");
                    document.getElementById("mode_change_button").innerHTML = "Light Mode";
                } 
            else 
                {
                    light_mode();
                    document.getElementById("mode_change_button").innerHTML = "Dark Mode";
                }
        }
function light_mode() 
        {
            document.querySelector("html").style.backgroundImage = "none";
            document.getElementById("mode_change_button").style.backgroundColor="rgb(65,55,55)";
            document.getElementById("mode_change_button").style.color="white";
            // document.querySelector("body > h2").style.color="black";
            var x = document.querySelectorAll("a,h1,h2,h3");
            var i;
            for (i = 0; i < x.length; i++) 
                {
                    x[i].style.color = "black";
                }
       
        }

function dark_mode() 
        {
        document.querySelector("html").style.backgroundImage =
            "url(https://i.pinimg.com/originals/1f/3d/85/1f3d85148ab183f085a42b5649069499.jpg)";
        document.getElementById("mode_change_button").style.backgroundColor="white";
        document.getElementById("mode_change_button").style.color="black";
        document.getElementById("logo").style.border="solid white";
        // document.querySelector("body > h2").style.color="aqua";
        var x = document.querySelectorAll("a,h1,h2,h3");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.color = "aqua";
        }

        }
// document.getElementById("download_button").addEventListener("onclick",function(){alert("currently not available");} );
function alert_download()
        {
            alert("Not Available Currently")
        }
