function display()
{
    var currentTime=new Date()
    var hours=currentTime.getHours()
    var minutes=currentTime.getMinutes()
    var seconds=currentTime.getSeconds()
    var seconds=currentTime.getMilliseconds()
    if (minutes<10){
        minutes="0"+minutes
    }
    var t_str=hours+":"+minutes+" ";
    if(hours>11){
        t_str+="PM";
    } else {
        t_str+="AM";
    }
    document.getElementById("time_span").innerHTML=t_str;
}