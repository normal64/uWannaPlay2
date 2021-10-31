//one day i may refactor code toget rid of bloody query


$(document).ready(function(){
    $surface    =   $(".pavement");
    $car    =   $(".car");
    $img    =   $(".car img");
    let flag = true;
    let play    = false;
    const cars = ["/assets/Img_06.png","/assets/Img_05.png" ]

    $(document).on("keypress", function(e){
        if(e.which  == 13){
            if(!play){
            this.sound = document.getElementById('menuAudio');
            this.sound.volume = 0.05;
            play = true;
            this.sound.play();
             }else {
                this.sound = document.getElementById('menuAudio');
                this.sound.pause();
                play    = !play;
             }
            $($surface).toggleClass("moveRight");
            $($car).toggleClass("suspension");
        }
    })
    $(document).on("keypress", function(e){
        if(e.which  == 119){
            if(flag){
                flag    = false;
                $img.attr("src",cars[0]);
            }else   {
                flag    =   true;
                 $img.attr("src",cars[1]);
            }
        }
    })

})