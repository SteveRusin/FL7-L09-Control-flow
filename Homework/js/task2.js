var start = confirm('Hi! Do you want to start the game?');
var askContinue = true;
var startAgain = true;
var counter = 0;
var prize = 1;
var prizeTotal = 0;
var coef = 1;

if (start) {

    do {

        var randomNumber = Math.round(Math.random() * 5);
        var tries = 3;


        do {

            var userAnswer = parseInt(prompt('Try to guess the number from 0 to 5. You have ' + tries + ' tries remain!', ''));
            if (isNaN(userAnswer)) {
                alert('Enter a number value.');
            }else if(userAnswer>5){
                alert('Only numbers from 0 to 5 are available!');
            } else if (userAnswer === randomNumber) {
                break;
            }
            tries--;
        } while (tries > 0)


        switch (tries) {
          case 3:
            prize = 10 * coef;
            break;
          case 2:
            prize = 5 * coef;
            break;
          case 1:
            prize = 2 * coef;
            break;
          default:
            console.log('Your prize - ' + prize * 0 + '$');
            startAgain = confirm('You lost! Do you want to play again?');
            break;
        }


        if (tries > 0) {
            alert('Congratulations! You have won ' + prize + '$');
            askContinue = confirm('Do you want to continue?');
            prizeTotal += prize;
            counter++;
            coef = 3 * counter;
        } else {
            counter = 0;
            coef = 1;
            prizeTotal = 0;
        }

        if (!askContinue) {
            console.log('Thanks for playing. Your total prize is - ' + prizeTotal + '$');
        } else if (!startAgain) {
            break;
        }


    } while (askContinue === true)
} else {
    console.log('You have not won a million today, but you could!');
}