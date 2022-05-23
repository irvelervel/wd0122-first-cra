import './App.css'
// let's here now import FirstComponent, so we can make it reach the page!
import FirstComponent from './components/FirstComponent'
import PowerfulComponent from './components/PowerfulComponent'
import Welcome from './components/Welcome'

// App is a React Component! A React Component can be as simple as a function!
// A React Component created as a function has to return the content
// the content returned has a structure similar to HTML...
// this structure is written in JSX

// a React Component can be as simple as a function returning JSX!

const App = () => {
  const name = 'Sidath'

  return (
    <div className="App">
      <header className="App-header">
        {/* <FirstComponent />
        <h2>My First Component</h2>
        <h3>My name is: {name}</h3>
        <ul>
          <li className="red-text">First</li>
          <li style={{ color: 'blue' }}>Second</li>
          <li>Third</li>
        </ul> */}
        <FirstComponent />
        <h2>NAME SECTION!</h2>
        <Welcome name="Stefano" textColor="red" />
        <Welcome name="Sidath" textColor="green" />
        <Welcome name="Farshad" textColor="blue" />
        <Welcome name="Simon" textColor="purple" />
        <PowerfulComponent title="EPICODE" h1color="orange" />
      </header>
    </div>
  )
}

export default App
