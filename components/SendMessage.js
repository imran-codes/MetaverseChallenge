import { useState } from "react";
import { useMoralis, ByMoralis, useMoralisQuery } from "react-moralis";

function SendMessage({endfOfMessageRef}) {

  const {user, Moralis} = useMoralis();
  const [message, setMessage] = useState('');
  console.log(message)

  const sendMessage = (e) => {
    e.preventDefault();
    if(!message) return;
    
    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();

    messages.save({
      message: message,
      username: user.getUsername(),
      ethAddress: user.get('ethAddress')
    }).then((message) => {
      console.log(message);
    }),
    (error) => {
      console.log(error.message);
    }

    endfOfMessageRef.current.scrollIntoView({ behavior: 'smooth'});
    setMessage('');
  }

  return (
    <form className='flex fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl w-11/12 shadow-xl rounded-full border-blue-400 z-50 border-4 justify-between'>
      <input
      value={message}
      onChange={e => setMessage(e.target.value)}
      placeholder={`Enter a message ${user.getUsername()}...`}
      className='outline-none bg-transparent text-white placeholder-gray-500 pr-5' type="text" />
      <button onClick = {sendMessage} className='font-bold text-pink-500'>Send</button>
    </form>
  )
}

export default SendMessage
