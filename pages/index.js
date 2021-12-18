import Head from 'next/head';
import Login from '../components/Login';
import Header from '../components/Header';
import Messages from '../components/Messages';
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, isInitializing } = useMoralis();

  if(isInitializing) return 'Loading....';
  if(!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Metaverse Challenge</h1>

      
        <div className ='max-w-screen-2xl mx-auto'>
          <Header />
          <Messages />
        </div>
    </div>
  )
}
