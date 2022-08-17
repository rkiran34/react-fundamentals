// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  // Extra credit -1
  const usernameRef = React.useRef()
  const [username, setUsername] = React.useState('')
  const [error, setError] = React.useState('')

  const handleInputChange = event => {
    const value = event.target.value;
    setUsername(value.toLowerCase());

    // const isvalid = value === value.toLowerCase()
    // setError(isvalid ? '' : 'Username must be lower case')
  }

  // Extra credit - 3
  // Remove usage of isError

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(usernameRef.current.value)
  }

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameRef}
          id="username"
          type="text"
          onChange={handleInputChange}
          value={username}
        />
        {error && <div role="alert">{error}</div>}
      </div>
      <button type="submit" disabled={error}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
