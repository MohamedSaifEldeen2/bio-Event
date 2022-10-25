$(document).ready(function () {

    $('.navbtn').click(function () {

        if ($('.mynav').css("left") == "-250px") {
            $('.mynav').animate({ left: "0px" }, 500)
        }
        else {
            $('.mynav').animate({ left: -$('.mynav').width() }, 500)

        }
    })

    $('.close-btn').click(function () {
        $('.mynav').animate({ left: -$('.mynav').width() }, 1000)
    })

    $('.close-btn').hover(function () {
        if ($('.close-btn').attr('class') == 'close-btn fa-solid fa-arrow-left position-absolute') {
            $('.close-btn').attr('class', 'close-btn fa-solid fa-xmark position-absolute')
        }
        else {
            $('.close-btn').attr('class', 'close-btn fa-solid fa-arrow-left position-absolute')

        }
    })


    $('.col-md-12 h3').click(function () {

        $(this).next().slideToggle(600);

        $(".sec2 .instructor-info").not($(this).next()).slideUp(600);



    })
    
    $("#countdown").countdown({
        date: "30 december 2022 12:00:00",
        format: "on"
    },

        function () {

        });


    $("textarea").keyup(function () {

        $("span").html(100 - $("textarea").val().length)
        if ($("textarea").val().length >= 100) {

            $("#validation").text("your available character finished")
            $("form p ").text("")
        }
        else {
            $("form p ").text("Character Reamining")
        }


    })
})

