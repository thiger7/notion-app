import './App.css'

function App() {

  return (
    <div className='flex h-screen'>
      <div className='w-[300px] bg-gray-100 p-4'>
        <div className='mb-4'>
          <button className='w-full p-2 bg-blue-500 text-white font-bold rounded'>
            新規作成
          </button>
        </div>
      </div>
      <div className='flex-1 p-4'>
          <div className='mb-4 flex justify-between'>
            <h2 className='text-lg font-bold'>Note Editor</h2>
            <button className='p-2 bg-green-500 text-white font-bold rounded'>
              Preview
            </button>
          </div>
        </div>
    </div>
  )
}

export default App
