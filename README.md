# Conditional Rendering and Event Listeners in React

## Inline If w/ Logical && Operator
  * true && expression always evaluates to expression and will render the element
  * false && expression always evaluates to false, and React will ignore
  ```
    {
      subscribed && 
      <h3>Thanks for subscribing, you made it!</h3>
    }
  ```

## Inline If-Else Conditional Operator
  ```
  <button onClick={ () => setAlerts(prevAlert => !prevAlert) }>
          { alerts? 'Turn off Notifications' : "Set Notifications" }
  </button> 
  ```


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
