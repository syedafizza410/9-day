/* Q25  Alien Colors #1: Imagine an alien was just shot down in a game.
Assign 'green', 'yellow', or 'red' to a variable called alien_color.
Explain & TIP: Use an if statement to check the alien's color. This
introduces you to simple conditionals.*/
let alien_color = "green";
if (alien_color == "green") {
    console.log("Congrats, You just earned 5 points!");
}
/* Q26  Alien Colors #2: Choose a color for an
alien, then write an if-else chain.
Explain & TIP: Expanding on the previous exercise, if-else chains allow you
to handle multiple conditions.*/
//run the if block:
let alien_color2 = "yellow";
if (alien_color2 == "yellow") {
    console.log("Congrats, You just earned 5 points!");
}
else {
    console.log("You just earned 10 points!");
}
//run the else block:
alien_color2 = "yellow";
if (alien_color2 == "red") {
    console.log("Congrats, You just earned 5 points!");
}
else {
    console.log("You just earned 10 points!");
}
/* Q27 Alien Colors #3: Convert your if-else chain to handle three colors:
green, yellow, red.
Explain & TIP: This exercise introduces you to handling multiple specific
conditions in an if-else chain.*/
//red alien version:
let alien_color3 = "red";
if (alien_color3 == "red") {
    console.log("You just earned 5 points!");
}
else if (alien_color3 == "yellow") {
    console.log("You just earned 10 points!");
}
else if (alien_color3 == "green") {
    console.log("You just earned 15 points!");
}
//green alien version:
alien_color3 = "green";
if (alien_color3 == "green") {
    console.log("You just earned 5 points!");
}
else if (alien_color3 == "red") {
    console.log("You just earned 10 points!");
}
else if (alien_color3 == "yellow") {
    console.log("You just earned 15 points!");
}
//yellow alien version:
alien_color3 = "yellow";
if (alien_color3 == "yellow") {
    console.log("You just earned 5 points!");
}
else if (alien_color3 == "red") {
    console.log("You just earned 10 points!");
}
else if (alien_color3 == "green") {
    console.log("You just earned 15 points!");
}
export {};
