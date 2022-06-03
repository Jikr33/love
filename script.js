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
console.log(hours);