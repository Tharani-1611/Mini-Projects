let ampm=document.getElementById('ampm')

function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=padZero(dateTime.getMinutes());
    let sec=padZero(dateTime.getSeconds());
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='PM'
    }
        
    else
       ampm.innerHTML='AM'
    document.getElementById('hours').innerHTML=hr;
    document.getElementById('mins').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
}

function padZero(num){
    return num<10?"0"+num:num
}

//displays current displayTime ah ovoru 500ms call pannirukom 
//ms is important  
setInterval(displayTime,500)
