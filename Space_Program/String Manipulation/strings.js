function strings()
{
    var string1=document.getElementById("initString").value; // this is grabbing the value of initString from the HTML
    var string2=document.getElementById("2ndString").value; // this is grabbing the value of 2ndString from the HTML
    var str3=string1+string2;
    document.getElementById("Updated string").innerHTML="concatenate="+str3; //this is the updated string.
}