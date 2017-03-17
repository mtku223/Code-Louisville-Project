function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 125,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();

// Hamburger menu


if ($(window).width() < 600) {
        $( ".cross" ).hide();
        $( ".nav" ).hide();
        $( ".hamburger" ).click(function() {
        $( "img.hero" )
        $( ".nav" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
        });
        });

        $( ".cross" ).click(function() {
        $( ".nav" ).slideToggle( "slow", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        });
        });   
} else {
    $( ".cross" ).hide();
    $( ".hamburger" ).hide();
    $( ".nav" ).show();
}



// insta information
// client id 	95ce76841080474798f24ad05df32651
//user id 4287091103
//http://localhost/#access_token=4287091103.95ce768.9c7d2a639dd94e31a240df10790322ce