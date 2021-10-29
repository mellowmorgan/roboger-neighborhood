Describe: beepBoop()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: {0}

Test: "It should return an array with 0 through 5 if input 5 and change 1, 2, 3 with "Beep!", Boop!", "Won't you be my neighbor?"
Code: beepBoop(5);
Expected Output: {0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5}

Test: "It should return an array with 0 through 11 with all numbers containing a 1 replaced with "Beep!" as well now."
Code: beepBoop(13);
Expected Output: {0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"}


Describe: intFinder(number)

Test: "It should return "Beep!" for input of 1."
Code: inFinder(1;
Expected Output: "Beep!"

Test: "It should return "Boop!" for input of 2."
Code: intFinder(2);
Expected Output: "Boop!"

Test: "It should return "Beep!" for input 10."
Code: intFinder(10);
Expected Output: "Beep!"

Test: "It should return "Boop!" for input 21."
Code: intFinder(21);
Expected Output: "Boop!"


# Mr. Roboger's Neighborhood

#### By Morgan Waites

#### Webpage converts integers to array from 0 to user inputted number then displays it with certain numbers changed depending on whether conditions met.

## Technologies Used

* HTML
* CSS
* Javascript/JQuery

## Description

Webpage converts integers to range of results with index from 0 to inputted integer, with different values for each number. Two forms available, one will add name to some of the results.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open index.html.

## Known Bugs

* No known bugs.

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Morgan Waites