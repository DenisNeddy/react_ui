import TodoApplication from "./components/TodoApplication/TodoApplication"




function App() {
  const items = [
    {
      task: "Feed the plants",
      done: false,
      index: 0
    },
    {
      task: "Water the dishes",
      done: false,
      index: 1
    },  {
      task: "Clean the cat",
      done: false,
      index: 2
    }
  ]
  return (
    <>
     <TodoApplication initialList={items} />
    </>
  )
}

export default App
