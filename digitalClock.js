function clock()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var day=date.getDay()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if (hh>12) 
        {
            hh=hh-12;   
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        mo="jan";
    }
    else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="June"
    }
    else if(mo==6)
    {
        mo="July"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else
    {
        mo="Dec"
    }
    console.log(mo)

    switch (day)
     {
        case 0:day="Sunday"
        document.body.style.backgroundImage="url(./world.webp)"
        break;

        case 1:day="Monday"
        document.body.style.backgroundImage="url(./tornado.webp"
        break;

        case 2:day="Tuesday"
        document.body.style.backgroundImage="url(./valcano.webp"
        break;

        case 3:day="Wednesday"
        document.body.style.backgroundImage="url(./water.webp"
        break;

        case 4:day="Thursday"
        document.body.style.backgroundImage="url(./lightning.webp"
        break;

        case 5:day="Friday"
        document.body.style.backgroundImage="url(./eathquake.webp"
        break;

        case 6:day="Saturday"
        document.body.style.backgroundImage="url(./floods.webp"
        break;
    
    }
    console.log(day);
    document.getElementById("time").innerHTML=`${hh} : ${mm} : ${am_pm}`
    document.getElementById("date").innerHTML=`${dd}/${mo}/${yy}`
    document.getElementById("day").innerHTML=day
    document.getElementById("sec").innerHTML=ss;
    setTimeout(clock,1000)
}
clock()


function alaramFunction()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if (hh>12) 
        {
            hh=hh-12;   
        }
    }
    if(hh==0)
    {
        hh=12;
    }

    var userGivenhh=document.getElementById("userhours").value
    var userGivenmm=document.getElementById("userMinutes").value
    var userGivenam_pm=document.getElementById("userAM_PM").value
    console.log(hh,mm,am_pm)
    console.log(userGivenhh,userGivenmm,userGivenam_pm)

    
    var audio=new Audio()
    audio.src="./Alarm.mp3";
    if(hh==userGivenhh && mm==userGivenmm && am_pm==userGivenam_pm)
    {
        audio.play()
        audio.loop=Infinity;
    }
    else
    {
        audio.pause()
    }
    setTimeout(alaramFunction,1000)
}
function closeWindow()
{
    document.getElementById("alaramContainer").style.display="none"
}
function openWindow()
{
    document.getElementById("alaramContainer").style.display="flex"
}