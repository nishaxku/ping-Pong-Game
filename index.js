document.addEventListener("DOMContentLoaded",() => {
    let ball = document.getElementById('ball');
    let table =document.getElementById('ping-pong-table');
    let paddle = document.getElementById('paddle')

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


     let paddleY = 0;
     let pdy = 5;

     document.addEventListener('keydown',(event) => {
        if(event.keyCode == 38 && paddleY > 0 ){
            paddleY += (-1)*pdy;;
            console.log("up",paddleY)
        }else if(event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight){
            paddleY += pdy;

        }
        paddle.style.top = `${paddleY}px`;
     })

     
});