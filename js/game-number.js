function numberGuess() {
  let secretNumber = Math.floor(Math.random() * 10 + 1);
  //   console.log(secretNumber);
  // const numberAttempts = prompt(
  //   "Choose the number of attempts, but remember - more attempts - less points. 1 attempt - 1000 points, 5 - only 10 points"
  // );
  const numberAttempts = 3;
  let yourNumber = Number(
    prompt(
      `New Game!!! 
      Guess the number I thought from 1 to 10. You have ${numberAttempts} ${properEnding(
        numberAttempts,
        "attempt"
      )}`
    )
  );

  for (let i = 0; i < numberAttempts; i += 1) {
    if (Number(yourNumber) === secretNumber) {
      console.log("Hurray!");
      alert(
        `You win!! You used only ${i + 1} ${properEnding(
          i + 1,
          "try"
        )}!! You must be genius! You've got ${pointsCalc(
          numberAttempts
        )} points`
      );
      return "Hurray!";
    } else if (i < numberAttempts - 1) {
      yourNumber = prompt(
        `Your number is too ${numberComparison(
          yourNumber,
          secretNumber
        )}. Guess the number I thought - you have ${
          numberAttempts - 1 - i
        } more ${properEnding(numberAttempts - 1 - i, "attempt")}`
      );
    } else {
      alert(
        `You loose!! You used all your ${numberAttempts} ${properEnding(
          numberAttempts,
          "attempt"
        )} for nothing and got no points.
        The number was ${secretNumber}! Try again!`
      );
    }
  }
}
numberGuess();

function numberComparison(a, b) {
  if (a > b) {
    console.log(`you entered ${a}, the secret number is smaller`);
    return "big";
  } else {
    console.log(`you entered ${a}, the secret number is bigger`);
    return "small";
  }
}

function properEnding(a, checkedWord) {
  if (a > 1 && checkedWord === "try") {
    return "tries";
  } else if (a == 1 && checkedWord === "try") {
    return "try";
  }
  if (a > 1) {
    return `${checkedWord}s`;
  } else if (a == 1) {
    return `${checkedWord}`;
  }
}

function pointsCalc(a, b) {
  if (a == 1) {
    return 1000;
  } else if (a == 2) {
    return 500;
  } else if (a == 3) {
    return 200;
  } else if (a == 4) {
    return 50;
  } else if (a == 5) {
    return 10;
  } else if (a > 5) {
    return 1;
  }
}
