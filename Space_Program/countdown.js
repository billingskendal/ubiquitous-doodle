function start()
{
    // I need a countdown timer
    var count=10;

    // The main loop for the timeout function.
    for(i=0; i <11; i++) {
        setTimeout(function() {
            document.write("Countdown "+ count + "<br>");
        
            // this is the new stuff for the change order
            if(count <= 5) {
                document.write("Warning, less than 1/2 way to launch, "+ count +" seconds left<br>");
            }
            count=count-1;

            //finally the delay
            }, 1000*i)
        }
        // alert to play on screen at the completion of the countdown
        setTimeout(function() {
            alert("Blastoff!!!");
        }, 11000)
                
}
