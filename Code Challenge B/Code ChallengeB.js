let n = Math.floor(Math.random() * 10) +1;
console.log(n);

let a = 0;

function Guess() {
    let x = document.getElementById('goodLuck');
    let m = x.value;

    if(m>10 || m<0){
        alert("You did wrong type, again type please from 1 to 10");
        j--;
    }
    else{
    if(m==n) {
        alert("You did true guess, This number is goodluck: " + n);
        a=1;
    }
    else {
        alert("You did wrong guess! No stop, fighting and Goodluck for you!!!");
    }
    } 
}

let j = 0;
function count() {
    if(j<3) Guess();
    j++;
    if(j>=3 && a==0) {
        alert("Goodluck for you next time. Because You did guess to pass 3 times. Today, goodluck number is: " + n);
    }
}

function enterGuess(e) {
    if(e.key == 'Enter'){
        e.preventDefault();
        count();
    }
}