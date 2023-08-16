import { SetStateAction, useState, useRef, useEffect } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Stage  } from '@react-three/drei';
import Logo from '/images/card-logo.svg'
import Confirmed from '/images/icon-complete.svg'
import { format } from 'date-fns';
import * as THREE from 'three'
 


 

function App() {
  const card = useRef<THREE.Mesh | null>(null);

  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('01/23');
  const [cvc, setCVC] = useState(' ');
  const [confirmed, setConfirmed] = useState(false)
  const [isTypingCVC, setIsTypingCVC] = useState(false);

  
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
    const newCVC = e.target.value;
    setCVC(newCVC);
     setIsTypingCVC(newCVC.length > 0);

  // Rotate the card when typing starts
  if(card.current){

    card.current.rotation.y = Math.PI;
  }
  };

 

  useEffect(() => {
    let typingTimeout: number | undefined;
  
    if (!isTypingCVC) {
      // Delay the rotation reset to give a smoother experience
      typingTimeout = setTimeout(() => {
        if (card.current) {
          card.current.rotation.y = 0;
        }
      }, 300);
    }
  
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [isTypingCVC]);
  
  
  return (
  
 
    <main className='w-full h-screen bg-black grid grid-cols-10'>
          <div className='gradient col-span-3'  >
              <Canvas
                flat
                linear>
                  <OrbitControls/>
                  <ambientLight intensity={0.9}/>
                  <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">
                   
              {/* card */}
                  <group rotation={[Math.PI * .0185 ,Math.PI * -.85, Math.PI *  -1.0045]}>
                  <mesh ref={card} position={[0, -3, -10]} rotation-y={isTypingCVC ? Math.PI : 0}>
                      <boxGeometry  args={[8,4, 2]}/>
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
                        
                            <h2 className='text-white text-2xl mb-6 tracking-widest '> {cardNumber}</h2>
                            <ul className='w-full text-white flex items-center justify-between'>
                              <p className='text-xl tracking-widest'>{cardholderName}</p>
                              <p className='text-xl tracking-widest'>{format(new Date(expDate), "MM/yy")}</p>
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

                        <p className='absolute right-8 top-16 my-4 pt-1 text-xl text-white '>{cvc}</p>
                      </div>
                    </Html>
                        </mesh>
                      </group>

                    </Stage>
                                  </Canvas>
                              </div>

          <div className='col-span-7  bg-zinc-100 flex items-center justify-center text-lg'>
          <section className='mx-auto'>

           {!confirmed && <form className='px-4 py-2 mx-auto flex flex-col items-start justify-center  '>
            
            <div className='mb-3 flex flex-col w-full' >
              <label>Cardholder's Name</label>
              <input className='border border-gray-400 rounded-md' type="text" placeholder='John Doe' value={cardholderName} onChange={handleCardholderNameChange} />
            </div>
            <div className='mb-3 flex flex-col w-full'>
              <label htmlFor="cvc" >Card Number</label>
              <input 
              name='cvc'
                className="w-full border border-gray-400 rounded-md" 
                type="text" 
                placeholder='e.g. 1234 1234 1234 1234' 

                value={
                  cardNumber
                  .replace(/\s/g,"")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim() } 
                onChange={handleCardNumberChange} 
                maxLength={19}/>
            </div>

            <section className='flex justify-between w-full gap-4'>

                    <div className='mb-3 flex  flex-col   '>
                      <label>Exp. Date (MM/YY)</label>
                      
                      <input 
                        className='bg-none border border-gray-400 rounded-md flex-1' 
                        type="month" max={2} 
                        value={expDate} onChange={handleExpDateChange} />
                    </div>

                    <div className='mb-3 flex flex-col mx-2 flex-1'>
                      <label>CVC Number</label>
                      <input 
                        className='border border-gray-400 rounded-md ' 
                        type="number" 
                        value={cvc} 
                        onChange={handleCVCChange} 
                        maxLength={4} placeholder='000'/>
                  </div>
                    </section>
                  <button 
                      className='bg-violet-800 rounded-md text-white hover:bg-black  w-full h-12' 
                      type="submit" 
                   
                      onClick={() => setConfirmed(!confirmed)}>Submit</button>
            </form> }

            {confirmed && <ThankYou setConfirmed={setConfirmed} />}
                  
            </section>
          </div>
                    
    </main>
 
  
  )
}

export default App

interface ThankYouProps {
  setConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
}

  function ThankYou( {setConfirmed}:ThankYouProps ) {
  return(
    <section className='flex mx-auto flex-col justify-center items-center '>
      <img src={Confirmed} className='h-20 w-20 mb-2'/>
      <h1 className='text-black text-5xl my-4'>Thank You</h1>
      <p className='text-gray-600'>We've added your details</p>
      <button className='bg-violet-900 text-white w-full h-11 rounded-lg mt-4 ' onClick={() => setConfirmed(false)}>CONTINUE</button>
    </section>
  )
}