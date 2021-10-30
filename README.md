## Tests

Describe: beepBoop()

Test: "It should return an array with a 0 if the number 0 is inputted"<br>
Code: beepBoop(0);<br>
Expected Output: [0]<br>

Test: "It should return an array with 0 through 5 if input 5 and change 1, 2, 3 with "Beep!", Boop!", "Won't you be my neighbor?"<br>
Code: beepBoop(5);<br>
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]<br>

Test: "It should return an array with 0 through 11 with all numbers containing a 1 replaced with "Beep!" as well now."<br>
Code: beepBoop(11);<br>
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]<br>

Test: "It should return an array with 0 through 13 with digits containing 3 having precedence, 2 having precendence over 1, 1 having precedence over rest."<br>
Code: beepBoop(13);<br>
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop", "Won't you be my neighbor?"]<br>

Describe: intFinder(number)

Test: "It should return "Beep!" for input of 1."<br>
Code: inFinder(1);<br>
Expected Output: "Beep!"<br>

Test: "It should return "Boop!" for input of 2."<br>
Code: intFinder(2);<br>
Expected Output: "Boop!"<br>

Test: "It should return "Beep!" for input 10."<br>
Code: intFinder(10);<br>
Expected Output: "Beep!"<br>

Test: "It should return "Boop!" for input 21."<br>
Code: intFinder(21);<br>
Expected Output: "Boop!"<br>

Test: "It should return "Won't you be my neighbor!" for input 32."<br>
Code: intFinder(32);<br>
Expected Output: "Won't you be my neighbor?"<br>

Describe: addNameToResults(array, name)<br>

Test: "It should return array with elements "Won't you be my neighbor!" changed to  "Won't you be my neighbor, " + name + "?" and name given is "Morgan."" <br>
Code: addNameToResults(array, name) <br>
Expected Output: array with element "Won't you be my neighbor!" changed to  "Won't you be my neighbor, Morgan?"<br>


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

## Github Page

https://mellowmorgan.github.io/roboger-neighborhood/

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Morgan Waites