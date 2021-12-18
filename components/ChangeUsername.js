import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, user, userError, logout } = useMoralis();

  const setUsername = () => {
    const username = prompt(`Enter your new username (Current: ${user.getUsername()})`);

    if(!username) return;

    setUserData({
      username,
    })
  }

  return (
    <div className='flex-col text-sm absolute top-5 right-5'>
      <div className='mb-5'><button disabled={isUserUpdating} onClick={setUsername} className='hover:text-pink-700'>Change your username</button></div>
      <div className='mb-5'><p>OR</p></div>
      <div><button onClick={logout}  className ="bg-yellow-500 rounded-sm p-5 font-bold animate-pulse">Logout of the Metaverse</button></div>
    </div>
  )
}

export default ChangeUsername
