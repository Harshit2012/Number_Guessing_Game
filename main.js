raw_number = Math.random() * (100 - 1) + 1;
const number = Math.round(raw_number);

function guess() {
    user_number = parseInt(document.getElementById("guessInput").value);
    length_num = user_number.toString().length;
    if (length_num == 0) {
        document.getElementById("result").innerHTML = "Please enter a number";
    }
    else if (user_number > 100 || user_number < 1) {
        document.getElementById("result").innerHTML = "Please enter a number between 1 and 100";
    }
    else if (user_number == number) {
        document.getElementById("result").innerHTML = "Congratulations! You guessed the right number! Refresh to play again.";
    }
    else if (user_number > number) {
        document.getElementById("result").innerHTML = "Too high";
    }
    else {
        document.getElementById("result").innerHTML = "Too low";
    }
}
