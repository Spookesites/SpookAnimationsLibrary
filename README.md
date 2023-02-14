# Spook Animations Library

Spook Animations Library is a lightweight JavaScript library for adding animations to your website.

## Instalación

You can download the library directly from GitHub or clone the repository using Git:


```sh
git clone https://github.com/TU_USUARIO/animations-js.git
```
Or you can download the script from GitHub and include it in your HTML file:
```html
<script src="path/to/animations.js"></script>
```
*Also, make sure to include the CSS file that defines the animations and effects:*
```html
<link rel="stylesheet" href="ruta/a/animations.css">
```
## Functions
The different functions included in the library are described below:

# `scrollAnimation(element, animationClass)`

Adds an animation class to an element when it is visible in the browser window during scrolling.

- element: The HTML element to which the animation class will be added.
- animationClass: the CSS class that defines the animation.

Example: 
```javascript
const element = document.querySelector('.my-element');
scrollAnimation(element, 'animate');
```

In your HTML file, add a CSS class that defines the animation you want to add:
```css
.animate {
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.5s ease-in-out;
}
.animate.visible {
  opacity: 1;
  transform: translateY(0);
}

```


## Credits

Animations.js was created by [Spook](https://your-website.com). 

## Acknowledgments

- Thanks to [My Friends](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley) for providing inspiration and guidance during the creation of this library.

## Version History

- 1.0.0 (2023-02-14): Initial release.

