var love = 'Гэрлээ';
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTIme');

var phoneMark = localStorage.getItem('phoneMark');

var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
    alert(love + '\n' + 'Өчигдөр л уулзсан мөртлөө зөндөө санаад байх юм...')
    localStorage.setItem('alerted','yes');
}

if (setupTime == null) {
    localStorage.setItem('setupTime', now);
    localStorage.setItem('phoneMark', NodeList)
}
else {
    if (now-setupTime > 7*60*60*1000){
        localStorage.clear();
        localStorage.setItem("setupTime", now);
    }
}
// localStorage.clear();
console.log(localStorage.getItem('setupTime', now));

// play music
// 1 is toohguildee
// 2 is my mother told me
var audio = null;

function play(number){
    if (audio != null){
        audio.pause();
    }
    if (number == 'stop'){
        audio.pause();
    }
    else {
        var arr = ["toohguildee.mp3", "my-mother-told-me.mp3", 'badboys.mp3']
        var music = new Audio('./songs/' + arr[parseInt(number) - 1]);
        audio = music;
        music.play();
    }
    
}