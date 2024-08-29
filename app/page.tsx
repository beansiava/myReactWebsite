//Always import bootstrap into top level file.  It will trickle down
import "bootstrap/dist/css/bootstrap.min.css";


import Testimony from '../components/Testimony.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="z-10 w-full items-center font-mono text-sm ">
        <Header /> 
        {/* <p>I'm going to test a "card" component here</p>


        <p>Here is where I'm going to test my timeline component</p>

        <p>Here is where I'm going to test my "testimony" component</p>
        <Testimony /> 
        <Footer />  */}
        <Footer />
      </div>
    </main>
  );
}
