
    var cards = {
        diamond:
        {
            name: "Diamond",
            value: 0
        },
        club:
        {
            name: "Club",
            value: 0
        },
        heart:
        {
            name: "heart",
            value: 0
        },
        spade:
        {
            name: "spade",
            value: 0
        }
    }

    var winCounter = 0;
    var loseCounter = 0;
    var currentScore = 0;
    var targetScore = 0;
    var redScore = 0;
    var blackScore = 0;

    function getRandom (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function gameStart() {

        currentScore = 0 ;
        redScore =0;
        blackScore = 0;
        targetScore = getRandom(19, 100);

        cards.diamond.value = getRandom(1, 12);
        cards.club.value = getRandom(1, 12);
        cards.heart.value = getRandom(1, 12);
        cards.spade.value = getRandom(1, 12);

        $("#your-score").text(currentScore);
        $("#target-score").text(targetScore);

        // add values to each cards in the beginning of each game
        $("#diamond").val(cards.diamond.value);
        $("#club").val(cards.club.value);
        $("#heart").val(cards.heart.value);
        $("#spade").val(cards.spade.value)

        //sets bar1 to targeted score so we can have it be displayed.
        $('#bar1').css('width', targetScore + '%').attr('aria-valuemax', targetScore);
        $('#bar2').css('width', '0%').attr('aria-valuenow', 0);
        $('#bar3').css('width', '0%').attr('aria-valuenow', 0);
        $('#barCS').css('width', '0%').attr('aria-valuenow', 0);

        console.log("-----------------------------------");
        console.log("Target Score: " + targetScore);
        console.log(
            " diamond: " + cards.diamond.value +
            " | club: " + cards.club.value +
            " | heart: " + cards.heart.value +
            " | spade: " + cards.spade.value
        );
        console.log("-----------------------------------");

    }

    function checkWin () {

        if (currentScore > targetScore) {
            loseCounter++;
            confirm("You Lose!play again!");
            $("#lose-counter").text(loseCounter);
           setTimeout(function() {
            gameStart();
           }, 50); 
        }

        else if (currentScore === targetScore) {
            winCounter++;
            confirm("You win! play again!");
            $("#win-counter").text(winCounter);
            
            setTimeout(function() {
                gameStart();
               }, 50); 

        }
    }


    $("#diamond").click(function () {

        addValues(cards.diamond);
        redScore += cards.diamond.value;
        $('#bar3').css('width', redScore + '%').attr('aria-valuenow', redScore);

        console.log(redScore);
        console.log(blackScore);
        
    });
    $("#club").click(function () {

        addValues(cards.club);
        blackScore += cards.club.value;
        $('#bar2').css('width', blackScore + '%').attr('aria-valuenow', blackScore);

        console.log(redScore);
        console.log(blackScore);
        
    });
    $("#heart").click(function () {

        addValues(cards.heart);
        redScore += cards.heart.value;
        $('#bar3').css('width', redScore + '%').attr('aria-valuenow', redScore);

        console.log(redScore);
        console.log(blackScore);
        
    });
    $("#spade").click(function () {

        addValues(cards.spade);
        blackScore += cards.spade.value;
        $('#bar2').css('width', blackScore + '%').attr('aria-valuenow', blackScore);
    
        console.log(redScore);
        console.log(blackScore);
        
    });



    function addValues (clickedStone) {
        currentScore += clickedStone.value;
        $("#your-score").text(currentScore);
        $('#barCS').css('width', currentScore + '%').attr('aria-valuenow', currentScore);
        checkWin();
        console.log("Your Score: " + currentScore);

    }

    gameStart();
