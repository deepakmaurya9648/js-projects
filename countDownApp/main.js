const newYear='1 jan 2022';
const hourEle=document.getElementById('hour');
const daysEle=document.getElementById('days');
const minuteEle=document.getElementById('minute');
const secondEle=document.getElementById('second');
function countDown(){
    const newYearDate=new Date(newYear);
    const currentDate= new Date();
    const totalSecond=(newYearDate-currentDate)/1000;
    const day=Math.floor(totalSecond/3600/24);
    const hours=Math.floor(totalSecond/60)%24;
    const minutes=Math.floor(totalSecond/60)%60;
    const seconds=Math.floor(totalSecond)%60;
    hourEle.innerHTML=hours;
    daysEle.innerHTML=day;
    minuteEle.innerHTML=minutes;
    secondEle.innerHTML=seconds;
}
countDown();
setInterval(countDown,1000);