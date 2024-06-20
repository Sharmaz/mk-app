import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-neutral-800">
      <h1 className="text-5xl text-blue-400 text-center">React</h1>
      <div className="p-8">
        <button
          className="bg-slate-950 px-4 py-2 rounded-lg text-slate-200"
          onClick={() => setCount((counter) => counter + 1)}
          type="button"
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
