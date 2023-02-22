function countTo(){
    let from = 0;
    let to = 256;
    let step = to > from ? 1 : -1;
    let interval = 20;

    if(from == to){
        document.querySelector("#countdownP").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#countdownP").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}
countTo();

function countTo2(){
    let from = 0;
    let to = 355;
    let step = to > from ? 1 : -1;
    let interval = 15;

    if(from == to){
        document.querySelector("#countdownK").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#countdownK").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}
countTo2();

function countTo3(){
    let from = 0;
    let to = 825;
    let step = to > from ? 1 : -1;
    let interval = 5;

    if(from == to){
        document.querySelector("#countdownC").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#countdownC").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}
countTo3();

function countTo4(){
    let from = 0;
    let to = 75;
    let step = to > from ? 1 : -1;
    let interval = 20;

    if(from == to){
        document.querySelector("#cP").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#cP").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}
countTo4();