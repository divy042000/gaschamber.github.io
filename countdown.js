const endate = new Date("31 December 2022 10:00 PM").getTime();
var x=setInterval(function()
{
    var now = new Date().getTime();
    var time=endate-now;
    var days=Math.floor(time/1000/60/24/60);
    var hours=Math.floor((time%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((time%(1000*60*60))/(1000*60));
    var seconds=Math.floor((time%(1000*60))/1000);
    // console.log(days);
    document.getElementById("days").value=days;
    document.getElementById("hrs").value=hours;
    document.getElementById("mins").value=minutes;
    document.getElementById("seconds").value=seconds;
    if(t<0)
    {
        clearInterval(x);
        document.getElementById("days").value=0;
        document.getElementById("hrs").value=0;
        document.getElementById("mins").value=0;
        document.getElementById("seconds").value=0;
    }
},1000);
