# Getting Started with Create React App
1. Redux is a state management tool for solving props drilling and state lifting. Redux has four segments which includes store, reducer, action and view. To use it, we first need to set up the actions and reducer. Then we need to pass reducer to createStore to generate our store. Finally we can use store to get the state or perform an action. React has adopted redux into react-redux that allow you to use hooks to manage your state without calling getState or subscribe. We can also import developer tool in redux. We can track how states are changed in each render.
2. Flux use to be the solution for passing state across multiple children before Redux. It has four segments which are Store, Action, Dispatcher and View. The difference is Store in Flux is responsible for store the state and also make changes to the states according to the action. On the other hand, Store in Redux is only for storing the states. Redux has only one store but Flux has multiple store. Therefore, Redux doesn’t need a dispatcher instead it has a new segment called reducer to handle the modification to the state. 
3. Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components. To use context we first need to create a context object. We can use context.provider to pass the state/function to all children component.
4. advantage and disadvantage of Redux:
Pros: Developer took allow us to track how state is changed in each rendering. React has adopt redux so we can use hooks to manage states,
Cons: Redux is pretty complex to use for small projects. Redux can have significant amount of overhead.
5.advantage and disadvantage of Context API:
Pros: Context is lightweight compared to redux. Context is easier to use.
Cons: Context doesn’t provide global state management. If the project become large and complex, it is hard for context to debug and manage the states.
6. For class component, we need to use connect function and pass mapStateToProps and mapDispatchToProps to connect components with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
