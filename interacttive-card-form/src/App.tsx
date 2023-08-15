import { SetStateAction, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Stage } from '@react-three/drei';
import Logo from '/images/card-logo.svg'

console.log(Logo)


 

function App() {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCVC] = useState('');

  const handleCardholderNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCardholderName(e.target.value);
  };

  const handleCardNumberChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCardNumber(e.target.value);
  };

  const handleExpDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setExpDate(e.target.value);
  };

  const handleCVCChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCVC(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('submit')
  };

  return (
  
      <div className='bg-yellow-700 w-screen h-screen'>
        <main className='w-full h-full bg-black grid grid-cols-10'>
          <div className='gradient col-span-3'  >
              <Canvas
                flat
                linear>
                  <OrbitControls/>
                <ambientLight intesnity={0.9}/>

                <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">

                <mesh position={[0,-4,-10]} rotation={[Math.PI * .0185 ,Math.PI * -.85, Math.PI *  -1.0025]}>
                  <boxGeometry  args={[8,5.2, 2]}/>
                  <meshStandardMaterial
                color="blue"
                transparent  
                opacity={0}  // Set opacity value (0.0 to 1.0)
                side={2}  
              />
          
                <Html 
                  transform
                  center
                  position={[0,0,-.001]} 
                  rotation={[0, Math.PI * 1, Math.PI * 1]}
                  >
                  <div className='cardFront '>
                    <div className='p-4 rounded-md w-full h-full flex flex-col items-start justify-between'>

                    <img src={Logo} className='w-20 h-10 '/>
                    <div className=' w-full'>
                     
                        <h2 className='text-white text-2xl mb-6 tracking-widest '> 1234 1234 1234 1234</h2>
                        <ul className='w-full text-white flex items-center justify-between'>
                          <p className='text-xl tracking-widest'>John Doe</p>
                          <p className='text-xl tracking-widest'>00/00</p>
                        </ul>
                    
                    </div>
                    </div>
                  </div>
                </Html>
                <Html 
                  transform
                  center
                  position={[0,0,.001]}
                  rotation={[0, 0, Math.PI * 1]}>
                  <div className='cardBack'>
              
                    <p className='absolute right-8 top-16 my-4 pt-1 text-xl text-white '>000</p>
                  </div>
                </Html>
                     </mesh>
                    </Stage>
              </Canvas>
          </div>

          <div className='col-span-7  bg-zinc-100 flex items-center justify-center text-lg'>
            <form className='px-4 py-2  flex flex-col items-start justify-center  '>
            <div className='mb-3 flex flex-col w-full' >
              <label>Cardholder's Name</label>
              <input className='border border-gray-400 rounded-md' type="text" value={cardholderName} onChange={handleCardholderNameChange} />
            </div>
            <div className='mb-3 flex flex-col w-full'>
              <label>Card Number</label>
              <input className="w-full border border-gray-400 rounded-md" type="text" value={cardNumber} onChange={handleCardNumberChange} />
            </div>

            <section className='flex justify-between w-full'>

            <div className='mb-3 flex flex-col border '>
              <label>Expiration Date (MM/YYYY)</label>
              <div className='flex'>

              <input className='bg-none border border-gray-400 rounded-md w-12' type="number" max={2} value={expDate} onChange={handleExpDateChange} />
              <input  className='bg-none border border-gray-400 rounded-md w-12'  type="number" max={2} value={expDate} onChange={handleExpDateChange} />
              </div>

            </div>
            <div className='mb-3 flex flex-col mx-2'>
              <label>CVC Number</label>
              <input className='border border-gray-400 rounded-md  w-12' type="text" value={cvc} onChange={handleCVCChange} />
          </div>
            </section>
          <button className='bg-violet-800 rounded-md text-white w-20 h-12' type="submit" onSubmit={handleSubmit}>Submit</button>
    </form>
  </div>
</main>
</div>
  
  )
}

export default App
