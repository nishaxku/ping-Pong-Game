document.addEventListener("DOMContentLoaded",() => {
    let ball = document.getElementById('ball');
    let table =document.getElementById('ping-pong-table');
     let ballx = 50
     let bally = 50
     let dx = 2;
     let dy = 2;
     ball.style.left = `${ballx}px`;
     ball.style.top = `${bally}px`;

     setInterval(function exce(){
        ballx += dx;
        bally +=dy;
        ball.style.left=`${ballx}px`
        ball.style.top=`${bally}px`

        // if(ballx>700-20 || ballx<=0)dx*=-1;
        // if(bally>400-20 || bally<=0)dy*=-1;
        if(ballx > table.offsetWidth - ball.offsetWidth || ballx<=0) dx*=-1;
        if(bally > table.offsetHeight - ball.offsetHeight || bally<=0) dy*=-1;


     },1);

     
});