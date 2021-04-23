# To Do App using Redux

In this workshop we will learn how to create a Redux-based app step by step.
All info and docs can be found in [Redux](https://redux.js.org/introduction/getting-started) and [React-Redux](https://react-redux.js.org/introduction/quick-start) official pages.

### Prerequisites
Please make sure to work on a working app, and install all the relevant dependencies `redux`, `react-redux`

> Note: `redux-thunk` is optional for this workshop

### Step 1 - Initiate a redux store
```javascript
import { createStore } from 'redux'
.
.
.
let store = createStore(rootReducer)
```
> In this phase your running app might crush as `rootReducer` is undefined, obviously.

### Step 2 - Connect the App with a Provider
Wrap your main app component with a `Provider` component. You should get something like this:
```javascript
<Provider store={store}>
  <App />
</Provider>
```

### Step 3 - Create your `rootReducer.js`
A root reducer is a combination of multiple reducers. You may start with a single one, for now, this is all you need, but you should feel free to add more reducers as you see fit to your needs.

### Step 4 - Create the reducer function for your ToDo
This reducer will will hold the todo(s) list and will calculate the logic needed to provide the todos info and reflect the actions being sent to it. The following actions must be covered:

* Add a todo,
* Toggle a todo
* Delete a todo

### Step 5 - Actions modules
Create Actions modules with the relevant actions as in the reducers
> You may use `uuid` library to assign each ToDo item a unique identifier upon creation. It will help you distinguish todo items.

### Step 6 - Create the UI
Create the following UI components and using `connect` function, connect them to the app's state. Please put your effort to consider which components are connected and which are staying as "dumb component"
#### List
Compose the relevant UI components to fulfill a user interface which will show the todo list,
#### Add todo
Provide a proper controller so the user will be able to add a todo item.
#### Todo item controllers
Add your own way so each item will have to ability to be toggled, deleted

Relevant snippet would look like:
```javascript
import { connect } from 'react-redux'
import {/*... some actions */ } from './actions'

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    //...
  }
}

const mapDispatchToProps = { /*... some actions */ }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponentName)
```

### Step 7 - Items Visibility
Add another reducer, actions and UI component modules so the user will have the ability to define visibility mode

* Show All
* Show completed
* Show uncompleted

## You're Done!
