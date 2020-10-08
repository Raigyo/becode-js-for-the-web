# Becode - JavaScript for the Web Exercises

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)

*February 2019*

> 🔨  Javascript Exercises. [Github page](https://raigyo.github.io/becode-js-for-the-web)
* * *


# First serie of JavaScript for the Web Exercises

## 1.1 - Color selector

Display three buttons named "Blue", "Red" and "Green" as well as a `<div>` shaped like a square which should be black by default.

When you click on any of these buttons it should change the color of the `<div>` to the corresponding color.

## 1.2 - Calculator

Display two text boxes and four buttons named "+", "-", "x" and "/". Make the calculator work correctly by displaying the result of the operation when the user clicks one of the buttons.

## 1.3 - Super Vilain application form

Display a form asking for the user's super vilain name, super power, motivation and plan to conquer the world.

The form should have two buttons, "Reset" and "Display". When clicking "Reset" it should erase the value of all the form elements to allow re-entering everything. When clicking "Display" it should erase the whole form and the buttons from the screen and display a text with headers showing the result collected in the previous form.

When it's done, fill the form, display the result, print it and give it to your coach. He received special instructions and knows what to do with it.

## 1.4 - Age calculator

Display three select boxes allowing to enter a birthdate. When the user selects a value for each of the select boxes, display its age.

Bonus: Make your components smart by making it impossible to enter a date that doesn't exist. (Like 1990-04-31 or 1991-02-29.)

## 1.5 - Cat cycler

Use your Google Images skills to collect a dozen of cat images.

Display these cat images in your app one by one by cycling automatically every second. These images must be displayed in a 500x500 pixel square and should be resized and cropped automatically to fit in this space regardless of their original resolution or aspect-ratio. (Purposedly choosing images that all have the same resolution or aspect-ratio is considered cheating.)

If you ever alter the aspect-ratio of an image to make it deformed we swear we will do this your car. (Or your bike if you don't have a car.)

<img src="https://github.com/becodeorg/LIE-Jepsen-1.9/blob/master/01-La-prairie/js-web/car.png" width="300px">

Bonus: Choose cats that are really really cute.

### Hint

When using Parcel static ressources (like images) work a bit differently. You might want to try this syntax in your JS file:

```javascript
import img1 from "./images/img1.jpg";
```

You can even try something like this:

```javascript
import imgs from "./images/*.jpg";
```

## 1.6 - Cat randomizer

Re-use the collection of cat images you made for the last exercise but this time display all of them at the same time in 100x100 pixel squares. When you click on a button randomize the order of the cats.

This screen should be fully [responsive](https://en.wikipedia.org/wiki/Responsive_web_design) and display nicely even on phones. (Use your browser's device emulation mode to test.)

## 1.7 - Troll button

Display a button saying "Click me". When the user moves the mouse on top of the button to click on it the button should jump to a completely different place on the page which is not under the mouse cursor anymore. It should continue to do so regardless the number of times the user tries to relocate the mouse cursor to try to click on it and always jump at a random place.

Bonus: after a few misclicks, display insulting messages to let the user know he can't even click on a button.


# Second serie of the JavaScript for the Web Exercises

## HTTP requests

Some of these exercises will ask you to perform HTTP Request. It is recommended to use [axios](https://github.com/axios/axios). To do so you can install it with:

```bash
npm install --save axios
```

Then to import it:

```javascript
import axios from 'axios';
```

Using axios it is strongly recommended to use the [async/await](https://javascript.info/async-await) syntax when working with asynchronous operations.

To test APIs rapidly before coding you should use [Postman](https://www.getpostman.com/).

## 2.1 - Improved cat cycler

Exactly the same exercise than the cat cycler in the first serie, you can even re-use your code. Except now you can't use your collection of cat images any more and must use the [random.cat API](https://aws.random.cat/meow).

## 2.2 - Beer displayer

Use the [Punk API](https://punkapi.com/documentation/v2) to make an application that displays beers. For each beer it should display its name, tagline, its year of first brewery and its image.

Each beer should be presented in a rectangle and multiple rectangles should be shown on the same line. The application should be responsive.

*Hey, while you're at it you could take a look at [Bootstrap](https://getbootstrap.com/) which is already included in the exercise theme. Maybe it contains useful tools to help present all that...*

## 2.3 - Cookie Clicker

Create a clone of [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/).

It should display nicely at every step of the creation.

### 2.3.1 - Base Game

Create a cookie button and a cookie counter. When you click on the cookie it should increment the counter.

The cookie button must use the same image than the one used in the official game. *You have to steal that image from the offical game.*

### 2.3.2 - Animation

Add a "bump" animation why you click on the cookie.

### 2.3.3 - Multiplier

When you reach 50 cookies add a button allowing to buy a multiplier. When you have one multiplier each click on the cookie will earn you 2 cookies. When you have two multipliers it will become 4, etc...

The price of the multiplier is multiplied by 1.5 each time you buy it.

### 2.3.4 - Autoclicker

When you reach 100 cookies add a button allowing to buy an autoclicker. The autoclicker will automatically click on the cookie every 0.1 seconds.

The price of the autoclicker is multiplied by 1.5 each time you buy it.

### 2.3.5 - Facebook share

Add a facebook button to share a message on Facebook saying "I collected plenty cookies with my Becode Cookie Clicker!".

## 2.4 - Character Manager

In this exercise we will use the [Character Database API](https://character-database.becode.xyz/) to make a Character Manager.

### 2.4.1 - List the characters

Display the list of all the characters contained in the database. You can use a table or a list of cards to display them, at your convenience.

Make sure the following fields are displayed:

* `name`
* `short_description`

### 2.4.1 - Display image

Also add the image in your list of characters.

**Hint**: [Data URIs](https://css-tricks.com/data-uris/)

### 2.4.2 - Long description

When we click on one of the characters in the list, display a [modal window](https://en.wikipedia.org/wiki/Modal_window) that will show all the information about that specific character including the `description` field. You can use the modals provided by Bootstrap or any other solution as long as it looks and work like a model. Also be warned that the `description` field is in Markdown and, of course, we want to display it as HTML in your application.

### 2.4.3 - Creation of a character

Add a "Create" button that will open a modal. That modal should contain a form with an input for each of the following fields:

* `name`
* `shortDescription`
* `description` (you can just let the user enter Markdown)

When the form is completed create the character, close the modal and reactualize the list of characters.

### 2.4.4 - Edition of a character

Add an edit button next to each character in the list. When clicked it opens a modal allowing to edit the character.

### 2.4.5 - Images edition

Modify both the create and edit modals to allow the edition of the image.

**Hint**: [Reading local files in JavaScript](https://www.html5rocks.com/en/tutorials/file/dndfiles/)

### 2.4.6 - Delete

Add a "Delete" button to delete characters. It should display a modal asking for confirmation.

# Useful links

- [Becode: JavaScript for the Web](https://github.com/becodeorg/LIE-Jepsen-1.9/tree/master/01-La-prairie/js-web)