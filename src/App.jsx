function App() {
  return (
    <>
      <div className="font-bold">
        {/*Header */}
        <h1>Component Playground</h1>
      </div>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4">
          <h2 className="font-bold">Sidebar</h2>
        </div>

        {/* Preview */}
        <div className="w-1/2 flex items-center justify-center bg-white border-x">
          <h2 className="font-bold">Preview</h2>
        </div>

        {/* Code */}
        <div className="w-1/4 bg-gray-50 p-4">
          <h2 className="font-bold">Code</h2>
        </div>
      </div>
    </>
  )
}
export default App