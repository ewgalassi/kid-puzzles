$(document).ready(() => {

    var clicked = false;
    var selected;
    var selected2;
    var readyForNext = true;
    var counter = 0;


    function revealPic(target) {
        if ($(target).attr("data-id") == "volcano") {
            $(target).html("<img src='images/volcano.jpg'>");
            selected = "volcano";
            clicked = true;
        }
        if ($(target).attr("data-id") == "dragon") {
            $(target).html("<img src='images/dragon.jpg'>");
            selected = "dragon";
            clicked = true;
        }
        if ($(target).attr("data-id") == "dinosaur") {
            $(target).html("<img src='images/dinosaur.jpg'>");
            selected = "dinosaur";
            clicked = true;
        }
        if ($(target).attr("data-id") == "octopus") {
            $(target).html("<img src='images/octopus.jpg'>");
            selected = "octopus";
            clicked = true;
        }
        if ($(target).attr("data-id") == "excavator") {
            $(target).html("<img src='images/excavator.jpg'>");
            selected = "excavator";
            clicked = true;
        }
        if ($(target).attr("data-id") == "boat") {
            $(target).html("<img src='images/boat.jpg'>");
            selected = "boat";
            clicked = true;
        }
        if ($(target).attr("data-id") == "truck") {
            $(target).html("<img src='images/truck.jpg'>");
            selected = "truck";
            clicked = true;
        }
        if ($(target).attr("data-id") == "acorn") {
            $(target).html("<img src='images/acorn.png'>");
            selected = "acorn";
            clicked = true;
        }
        if ($(target).attr("data-id") == "lego") {
            $(target).html("<img src='images/lego.png'>");
            selected = "lego";
            clicked = true;
        }
        if ($(target).attr("data-id") == "rocket") {
            $(target).html("<img src='images/rocket.png'>");
            selected = "rocket";
            clicked = true;
        }
        console.log(selected);
    };

    function wrongPic(target) {
        if ($(target).attr("data-id") == "volcano") {
            $(target).html("<img src='images/volcano.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "dragon") {
            $(target).html("<img src='images/dragon.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "dinosaur") {
            $(target).html("<img src='images/dinosaur.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "octopus") {
            $(target).html("<img src='images/octopus.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "excavator") {
            $(target).html("<img src='images/excavator.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "boat") {
            $(target).html("<img src='images/boat.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "truck") {
            $(target).html("<img src='images/truck.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "acorn") {
            $(target).html("<img src='images/acorn.png'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "lego") {
            $(target).html("<img src='images/lego.png'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "rocket") {
            $(target).html("<img src='images/rocket.png'>");
            clicked = true;
        }
        console.log(selected);
    };

    function hidePic() {
        $("[data-id=" + selected2 + "]").empty();
        $("[data-id=" + selected + "]").empty();
        $("[data-id=" + selected + "]").attr("data-clicked", "false");
    }

    function clearSelected() {
        clicked = false;
        selected = "";
        selected2 = "";
        readyForNext = true;
    }

    $(".dot").on("click", function () {
        if (!clicked && readyForNext && $(this).attr("data-clicked") == "false") {
            revealPic(this);
            $(this).attr("data-clicked", "true");
        }
        else if (clicked && readyForNext && $(this).attr("data-clicked") == "false") {
            if ($(this).attr("data-id") != selected) {
                selected2 = $(this).attr("data-id");
                wrongPic(this);
                readyForNext = false;
                setTimeout(hidePic, 1200);
                setTimeout(clearSelected, 1220);
            }
            else {
                revealPic(this);
                $(this).attr("data-clicked", "true");
                clicked = false;
                selected = "";
                selected2 = "";
                counter++;
                if (counter === 10) {
                    alert("You won!");
                    location.reload();
                }
            }
        }
    });
});