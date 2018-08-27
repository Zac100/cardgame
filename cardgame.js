var counter = 0;

var checkWinner = [];

var score = 0;
//hold the urls for each of the different cards
var urlObj = {
    2: "file:///Users/stevechen/Documents/dev/Card%20Game/cardimages/2.png",
    3: "file:///Users/stevechen/Documents/dev/Card%20Game/cardimages/3.png",
    4: "file:///Users/stevechen/Documents/dev/Card%20Game/cardimages/4.png",
    5: "file:///Users/stevechen/Documents/dev/Card%20Game/cardimages/5.png",
    6: "file:///Users/stevechen/Documents/dev/Card%20Game/cardimages/6.png",
    back: "file:///Users/stevechen/Documents/dev/Card%20Game/cardimages/backofcard.jpg",
}

function cardClick(para1){
    if(para1.src === urlObj[para1.id]){
        return;
    }

    score++;
    $('#score').text(score);

    checkWinner.push(para1);

    para1.src = urlObj[para1.id];
    
    // para1.onclick = '';

    if(checkWinner.length === 2){
            if(checkWinner[0].id===checkWinner[1].id){
                console.log('winner!');
                checkWinner[0].src = urlObj[checkWinner[0].id]
                // checkWinner[0].onclick='';
                checkWinner.splice(0,2);
            }
            else{
                setTimeout(function(){
                checkWinner[0].src = "file:///Users/stevechen/Documents/dev/Card%20Game/cardimages/backofcard.jpg";
                checkWinner[1].src = "file:///Users/stevechen/Documents/dev/Card%20Game/cardimages/backofcard.jpg";
                
                // checkWinner[0].setAttribute( "onclick", "javascript: cardClick(this);" )
                // checkWinner[1].setAttribute( "onclick", "javascript: cardClick(this);" )

                // checkWinner[0].onclick='cardClick(this)';
                // checkWinner[1].onclick='cardClick(this)';
                console.log(checkWinner);
                checkWinner.splice(0,2);
            
                },1000);
            }
    }
    else{
    }
}
