import {  Html, Stage } from '@react-three/drei';
import Logo from '/images/card-logo.svg'


const Experience = () => {
  return (
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
  )
}

export default Experience