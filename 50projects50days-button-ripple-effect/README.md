
Button Ripple Effect

Create a button that has a ripple effect based on where a user clicks within the button. 


## Lessons Learned
What did you learn while building this project? What challenges did you face and how did you overcome them?

- How to get mouse click coordinates relative to the entire viewport.
```
   const x = e.clientX
   const y = e.clientY
```

- Gets the button's position relative to its offset parent.
```
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

```

- How to calculate click coordinates inside of the button.
```
    const xInside = x - buttonLeft
    const yInside = y - buttonTop

```

- Positions the ripple (the span) exactly where the click happened.
```
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

```

## Future Improvements
- Also change the button background color on click


# Acknowledgements
Project instruction and inspirtation provided by Brad Traversy and Florin Pop via their 50 Projects in 50 Days HTML, CSS & JavaScript course found on Udemy: https://www.udemy.com/course/50-projects-50-days/?couponCode=KEEPLEARNING.

