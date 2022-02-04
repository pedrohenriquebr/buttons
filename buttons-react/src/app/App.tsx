import './App.scss'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <header>Buttons</header>
      <main>
        <div>
          <Button label="Default" />
        </div>
        <div>
          <Button variant="outline" label="Default" />
        </div>
        <div>
          <Button variant="text" label="Default"></Button>
        </div>
        <div>
          <Button disableShadow={true} label="Default"></Button>
        </div>
        <div>
          <Button disabled={true} label="Default"></Button>
          <Button variant="text" disabled={true} label="Default"></Button>
        </div>
        <div>
          <Button startIcon="local_grocery_store" label="Default"></Button>
          <Button endIcon="local_grocery_store" label="Default"></Button>
        </div>
        <div>
          <Button size="sm" label="Default"></Button>
          <Button size="md" label="Default"></Button>
          <Button size="lg" label="Default"></Button>
        </div>
        <div>
          <Button color="default" label="Default"></Button>
          <Button label="Primary" color="primary" ></Button>
          <Button label="Secondary" color="secondary" />
          <Button label="Danger" color="danger" />
        </div>
        <div className="icons-text">
          Icons: htpps://material.io/resources/icons/?style=round
        </div>
      </main>
      <footer>
        created by
        <span className="username">username</span>- devchallenges.io
      </footer>
    </div>
  )
}

export default App
