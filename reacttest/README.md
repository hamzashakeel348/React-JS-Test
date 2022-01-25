# Getting Started with Create React App

This project is purely based on React Js along witht the TypeScript.
I have used Sass(Scss) for the styling of the Components.

## Available Scripts

In the project directory, you have to run the following scripts in order to run it:

### `npm install`

It will install all of the required Node Modules.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Structure of the Project

There is a Reacttest folder in the Repo. As when you will clone it you have to run the mentioned scripts inorder to install dependencies and the other stuff.
In the Src Folder, you will see the two different folders:

- Components
- State

###In Components
You will get another two required Components:

- SignUp
- Wallet

In SignUp, there are two folder:

- Styles
- Views

Apart from these there are the three files, named as:

- Button.tsx (it provides the Generic Button for the SignUp Components)
- Header.tsx (it provides the Generic Header for the all signup views.)
- SignUp.tsx (it provides the conditional rendering for the SignUp Views)

In Views, there are three different views:

- ScreenOne
- ScreenTwo
- ScreenThree

In Styles, there are the stylesheets for each view, Button, and header

In Wallet, you will get the three folders:

- Helper
- Styles
- Views

Apart from these there are two files in it:

- Header.tsx (it provides the Generic Header for the all signup views.)
- Wallet.tsx

In Helper, there are two helper components, which maintains the reusability of the components:

- Domain.tsx
- Category.tsx

In Views, there are two views:

- WalletOne
- WalletTwo

In Styles, there are files for styling:

- it includes stylesheets for all of the Views

### `npm install`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
