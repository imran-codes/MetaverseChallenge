import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, isInitializing, logout } = useMoralis();

  if(isInitializing) return 'Loading....';
  if(!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Metaverse Challenge</h1>
      <button onClick={logout}  className ="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Logout of the Metaverse</button>
    </div>
  )
}
