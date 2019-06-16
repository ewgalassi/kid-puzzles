$(document).ready(() => {
    var counter = 0;

    $(".dot").on("click", function () {
        var button = this.id;
        var buttonArr = ["", "", "", ""];

        switch (button[0]) {
            case "a":
                buttonArr.pop();
                buttonArr.splice(1, 1, "b" + button[1]);
                break;
            case "e":
                buttonArr.pop();
                buttonArr.splice(1, 1, "d" + button[1]);
                break;
            case "b":
                buttonArr.splice(1, 1, "a" + button[1]);
                buttonArr.splice(3, 1, "c" + button[1]);
                break;
            case "c":
                buttonArr.splice(1, 1, "b" + button[1]);
                buttonArr.splice(3, 1, "d" + button[1]);
                break;
            case "d":
                buttonArr.splice(1, 1, "c" + button[1]);
                buttonArr.splice(3, 1, "e" + button[1]);
                break;
        }

        switch (button[1]) {
            case "1":
                buttonArr.shift();
                buttonArr.splice(1, 1, button[0] + "2");
                break;
            case "5":
                buttonArr.shift();
                buttonArr.splice(1, 1, button[0] + "4");
                break;
            case "2":
                buttonArr.splice(0, 1, button[0] + "1");
                buttonArr.splice(2, 1, button[0] + "3");
                break;
            case "3":
                buttonArr.splice(0, 1, button[0] + "2");
                buttonArr.splice(2, 1, button[0] + "4");
                break;
            case "4":
                buttonArr.splice(0, 1, button[0] + "3");
                buttonArr.splice(2, 1, button[0] + "5");
                break;
        }

        this.classList.toggle("selected");

        for (num in buttonArr) {
            document.getElementById(buttonArr[num]).classList.toggle("selected");
        };

        setTimeout(function() {
                if (document.querySelectorAll(".selected").length === 25) {
                    alert("You win!");
                };
        }, 200)
        
    });
});