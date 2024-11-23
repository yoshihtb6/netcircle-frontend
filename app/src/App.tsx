import './App.css'

function App() {
  const onClick = () => {
    console.log('testtest')
  }

  return (
    <>
      <div>
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buttonaaa
        </button>
      </div>
    </>
  )
}

export default App
