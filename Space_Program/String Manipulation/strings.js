function strings()
{
    var string1=document.getElementById("initString").value;
    var string2=document.getElementById("2ndString").value;
    var str3=string1+string2;
    document.getElementById("Updated string").innerHTML="concatenate="+str3;
}