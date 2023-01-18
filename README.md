# Digital Watch

With this simple script using JavaScript you can display the current time in the appearance of an digital watch. Right now there will be displayed the hours and the minutes. It also uses some CSS to make it prettier.

In general you can implement this in your own projects under the condition you follow the given license. I would appreciate it a lot if you could come up with new ideas or a better and simpler way as i did.

---

## How to use?

Nothing simpler as that, you only will need to refer to the script and to the CSS-file and you're good to go:

In your HTML-File you have to add the following code to your `<head>` tag:
```html
<link rel="stylesheet" href="style.css">
<script defer src="script.js"></script>
```
> The refereed files **must** contain the code provided by this GitHub Repository, otherwise it won't work. 

And you also should define a container where the digits will appear, like this:
```html
<section class="digit-display"></section>
```
That's it, as I told you, it is very simple to use.

---

## How does this works?

And now for the guys among you that want to get a bit deeper into how that work.
We'll only focus on the JavaScript files as I'm convinced that you all know how to add some style to an element :wink:.

First of all we need to put some code into the Class `class display {}`, what would look like this.

```js
this.UUID = crypto.randomUUID();

        const digitSection = document.querySelector('.digit-display')
        const digitContainer = document.createElement('div');

        digitSection.appendChild(digitContainer);
        digitContainer.classList.add('digit-container');
        digitContainer.id = this.UUID;
        digitContainer.innerHTML = `
            <div class="segments-left">
                <div class="segment off" id="topleft-${this.UUID}"></div>
                <div class="segment off" id="botleft-${this.UUID}"></div>
            </div>
            <div class="segments-middle">
                <div class="segment off" id="topmid-${this.UUID}"></div>
                <div class="segment off" id="midmid-${this.UUID}"></div>
                <div class="segment off" id="botmid-${this.UUID}"></div>
            </div>
            <div class="segments-right">
                <div class="segment off" id="topright-${this.UUID}"></div>
                <div class="segment off" id="botright-${this.UUID}"></div>
            </div>
            `;

        this.topleft = document.getElementById(`topleft-${this.UUID}`);
        this.topmid = document.getElementById(`topmid-${this.UUID}`);
        this.topright = document.getElementById(`topright-${this.UUID}`);
        this.midmid = document.getElementById(`midmid-${this.UUID}`);
        this.botleft = document.getElementById(`botleft-${this.UUID}`);
        this.botmid = document.getElementById(`botmid-${this.UUID}`);
        this.botright = document.getElementById(`botright-${this.UUID}`);
```

We don't want to mix up the different segments and digits later therefore we're assigning every segment an UUID, we do this for the digits too.

```js
this.UUID = crypto.randomUUID();

digitContainer.id = this.UUID;

<div class="segment off" id="topleft-${this.UUID}"></div>
```

What we're doing next is that we're creating 7 segment that will later be switched on and off to work as a display. You can create an element using the `document.createElement()` function. With `element.classList.add()` and `element.id` we can add a class and an id to our new-born element.

Then we use `.innerHTML` to paste some content into the empty container.

To make us life easier later on we're using `this.element = document.getElementById();` to set a variable we can access later.

> :bulb: I would recomend using `document.querySelector()` instead of the shown method above.

The rest of the class is only used to switch the right segments on and off.

> to be continued
