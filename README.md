
# Profile Card UI

This is a small frontend project where I built a profile card interface using **React** and **Tailwind CSS**.  
I created this project mainly to practice **React components** and understand how **props are passed between components**.

## What this project does

The app displays multiple profile cards using data from an array.  
Each card shows basic user information like profile image, name, role, and some stats.

Instead of hardcoding multiple cards, I used React’s `map()` function to generate them dynamically.  
The data flows from the parent component to child components using **props**.

## Tech Used

- React
- Tailwind CSS
- JavaScript

## What I learned

- How to split UI into small reusable components
- How props work in React
- How to pass data from parent to child (props drilling)
- How to render components dynamically using arrays
- Basics of styling using Tailwind utility classes

## Component Structure

- `App.jsx`  
  Contains the profile data and renders the cards.

- `Card.jsx`  
  Acts as the main card container.

- `Top.jsx`  
  Displays the profile image.

- `Middle.jsx`  
  Shows the name, role, and verification icon.

- `Bottom.jsx`  
  Shows follower/post details and actions.

## Why I built this

I built this project to strengthen my understanding of React fundamentals and improve my confidence in building UI components using Tailwind CSS.

## Future Improvements

- Add follow/unfollow functionality
- Improve responsiveness for different screen sizes
- Load profile data from an API
- Add subtle animations and hover effects

## Note

This project is built for learning and practice purposes.
```


