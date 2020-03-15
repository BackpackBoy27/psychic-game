$(document).ready(function() {

    let newRandLetter = genRandLetter();
    console.log(newRandLetter)
    let totalWins = 0;
    let totalLoses = 0;
    let moves = 11;

    $(document).keyup( (event) => {
       console.log((event.key).toLowerCase());

       if(newRandLetter === (event.key).toLowerCase()){
           totalWins += 1;
        //    $('#totalWins').text(totalWins)
           moves = 10;
        //    $('#totalMoves').text(moves);
        newRandLetter = genRandLetter();
        console.log(newRandLetter)
       }

       if(newRandLetter !== (event.key).toLowerCase()){
           moves -= 1;
       }

       if(moves == 0) {
           totalLoses += 1;
           moves = 10;
       }


       $('#totalWins').text(totalWins);
       $('#totalLoses').text(totalLoses);
       $('#totalMoves').text(moves);

    });

    
    // Functions
    function genRandLetter(){
        const letters = "abcdefghijklmnopqrstuvwxyz";
        const randNum = Math.floor(Math.random() * letters.length);
        const randLetter = letters[randNum];
        return randLetter;
    }

   


});