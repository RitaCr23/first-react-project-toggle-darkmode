#  ⚛️ My First React Project
## ☀️ Updated with a toggle for a dark/light theme 🌙

## ℹ️ About this project

This is a solo project that is a part of [Scrimba's React Course](https://scrimba.com/learn/learnreact) by Bob Ziroll.

At the end of every module, there's a solo project to practise all the concepts that were taught on the same module.

Every solo project has a list of features that need to be on the project, and a [Figma design](https://www.figma.com/file/4ctPLUvIn5b5Ep6YPOZWWd/Digital-Business-Card?node-id=0%3A1) to replicate.

In this project I had to create a Digital Business Card, with four different components.

The main goal of the project was to practise how to create different components and display them on a page.

A few months later, while learning React on the same course, I got too curious on how theme toggles work, so I decided to pick up this project again and implement a toggle for a dark-mode and light-mode to learn how it's done.

🌐 [Live Demo of this project]()

## 🧰 Technologies used

- HTML
- CSS
- JavaScript
- ReactJS

## ✅ Solo Project Requirements

- `Build a React-App from scratch`
- `Add separate components for Info (photo, name, title and buttons), About, Interests and Footer with social Icons`

## 💡 How this project was created

1.
- Created a components folder inside src directory to create a `Info`, `About`, `Interests`, `Footer` and a `Toggler` component. 

- Created an images folder to add the image I wanted to display on the Business Card

2. 
- The `Info` component is rendering an Image, name, title, description and two buttons, this component is styled on the CSS file 

- The `About` and `Interests` components are rendering random text and styled on the CSS file

- The `Footer` component is rendering buttons imported from FontAwesome 

- The `Toggler` component was the last one being added and is adding the toggler to the project, through props, is receiving the logic to switch themes  

3. 

- Import all components to the `App` component 

- Create a toggleDarkMode function to switch between light mode and dark mode 

- Display each component on the page

## 💻 Setup
To run this project, install it locally using npm:

```
$ cd first-react-project
$ npm install
$ npm start
```
