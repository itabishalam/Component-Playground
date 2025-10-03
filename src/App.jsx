import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [label, setLabel] = useState("Click Me");

  return (
    // 1. Outer Container: h-screen (full height), flex-col (stacks children vertically)
    <div className="h-screen flex flex-col bg-stone-900 text-white"> 
      
      {/* Header (Takes up necessary height at the top) */}
      <div className="font-bold p-4"> 
        <h1 className="text-4xl">Component Playground</h1>
      </div>

      {/* 2. Main Content Row: flex-1 (fills ALL remaining vertical space) */}
      {/* This row's children (Sidebar, Preview, Code) align HORIZONTALLY (default flex) */}
      <div className="flex flex-1"> 
        
        {/* Sidebar (w-1/4) */}
        <div className="w-1/4 p-4 border-r border-gray-700">
          <h2 className="font-bold mb-4">Customization</h2> 
          
          {/* Label Input Section */}
          <label className="block mb-2 text-sm font-medium">Button Label</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white" 
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>

        {/* Preview (w-1/2) - MUST be flexed to center content */}
        <div className="w-1/2 flex items-center justify-center"> 
          <Button label={label} />
        </div>

        {/* Code (w-1/4) */}
        <div className="w-1/4 p-4 border-l border-gray-700">
          <h2 className="font-bold">Code</h2>
        </div>
      </div>
    </div>
  )
}

export default App