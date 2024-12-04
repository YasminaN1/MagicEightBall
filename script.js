let userName=prompt('Hi, whats your name?');

userName ? document.getElementById('greeting').innerText = `Hello, ${userName}!` : document.getElementById('greeting').innerText = `Hello!`;

function shakeMagicEightBall(){

    const randomNumber = Math.floor(Math.random() * 8); 
    
    let eightBall = ''; 
    let responseImg; 

    let userQuestion = prompt('What is your question for the Eight Ball?');
    
    switch (randomNumber) {
      case 0:
        eightBall = 'As I see it yes';
        responseImg = "imgs/SeeItYes.jpg";
        break;
      case 1:
        eightBall = 'It is decidedly so';
         responseImg = "imgs/itsdecidedly.jpg";
        break;
      case 2:
        eightBall = 'Reply hazy try again';
         responseImg = "imgs/replyhazy.png";
        break;
      case 3:
        eightBall = 'Cannot predict now';
         responseImg = "imgs/Cannotpredict.jpg";
        break;
      case 4:
        eightBall = 'Do not count on it';
         responseImg = "imgs/Dontcount.jpg";
        break;
      case 5:
        eightBall = 'My sources say no';
         responseImg = "imgs/mysources.jpg";
        break;
      case 6:
        eightBall = 'Outlook not so good';
         responseImg = "imgs/Outlook.webp";
        break;
      case 7:
        eightBall = 'Signs point to yes';
         responseImg = "imgs/signspoint.png";
        break;
    }
    console.log(eightBall);
     document.getElementById('response-text').innerText = `${userName} has asked the Magic Eight Ball ${userQuestion}. The wise and wondrous Eight Ball has replied ${eightBall}`;

     document.getElementById('response-image').src = responseImg;
}