import { SetStateAction, useState } from 'react'

const Form = (props: any) => {
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
    <section>
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
    </section>
  )
}

export default Form