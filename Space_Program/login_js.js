function checkCreds()
{
    // checking for the student name input;
    // ideally this would check against a database. 
    var studentName=document.getElementById("studentName").value
    // checking for a certain amount of inputs for the badge number.
    var badgeNumber=document.getElementById("badgeNumber").value
    // checking for the value of the password, which is "beans",
    // but any 5 letters or numbers will work for now.
    var password=document.getElementById("password").value
    // checking entry info conditions
    entryInfo=badgeNumber+" "+studentName;
    // defining the expected length of the entryInfo
    if (entryInfo.length >20 || entryInfo.length <3)
        {
            document.getElementById("loginStatus").innerHTML="invalid info"
        }
        //checking the password
    else if (password > 6 || password < 5)
    {
        document.getElementById("loginStatus").innerHTML="invalid password info"
    }
    else
    {
        //if all conditions are met, the user is greeted with this alert!
        alert("Access is granted! Welcome to the party!!")
        location.replace("UAT_Space_Page2.html")

    }
}