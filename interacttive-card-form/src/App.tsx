 
import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls  } from '@react-three/drei';
import Experience from './Components/Experience';
import Form from './Components/Form';

 


 

function App() {
 

  return (
  
 
        <main className='w-full h-screen bg-black grid grid-cols-10'>
          <div className='gradient col-span-3'  >
              <Canvas
                flat
                linear>
                  <OrbitControls/>
                  <ambientLight intesnity={0.9}/>
                  <Experience/>
              </Canvas>
          </div>

          <div className='col-span-7  bg-zinc-100 flex items-center justify-center text-lg'>
          <Form/>
           </div>
</main>
 
  
  )
}

export default App
