
import './App.css'
import FaceData from './component/FaceData'
import Com from './component/Main/Com'
import Main from './component/Main/Main'

function App() {
  return (
    <>
      <header className='container max-w-[90%] md:max-w-[80%] mx-auto py-5'>
        <Com></Com>
      </header>
      <main className='container max-w-[90%] md:max-w-[80%] mx-auto py-5'>
    <Main></Main>
    <FaceData></FaceData>
      </main>
    </>
  )
}

export default App
