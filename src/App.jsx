import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [label, setLabel] = useState("Click Me");
  const [size , setsize] =useState("medium");

  return (
    
    <div className="h-screen flex flex-col bg-stone-900 text-white"> 
      
      {/* Header */}
      <div className="font-bold p-4"> 
        <h1 className="text-4xl">Component Playground</h1>
      </div>

      {/* Main Content Area */}
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
          {/*size input section*/}
          <label className="block mt-4 mb-2 text-sm font-medium">Button Size</label>
       <select 
            className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
            value={size}
            onChange={(e) => setsize(e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>  

        {/* Preview (w-1/2) - MUST be flexed to center content */}
        <div className="w-1/2 flex items-center justify-center"> 
          <Button label={label} size={size} />
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