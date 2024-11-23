import './App.css'
import { Button } from './components/ui/button'

function App() {
  const tmp = () => {
    console.log("tmp");
  }

  return (
    <div>
      <Button onClick={tmp}>Click me</Button>
    </div>
  )  
}

export default App
