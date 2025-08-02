import Aboutpic from "./img/Aboutpic.jpg"
import Me from "./img/Me.png"
import Bubble from "./img/Bubble.png"
import Square from "./img/Square.jpg"
import SplitText from "./components/ui/SplitText/SplitText"
import TextType from "./components/ui/TextType/TextType"
import GooeyNav from "./components/ui/GooeyNav/GooeyNav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin, 
  faJs,
  faHtml5,
  faReact,
  faPython,
  faJava,faCss3Alt
 } from "@fortawesome/free-brands-svg-icons";

import './App.css'

function App() {

    const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
    const items = [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
       { label: "Project", href: "#" },
      { label: "Contact", href: "#" },
    ];

  return (
    <>
      <main className='min-h-screen bg-[#232946]'>

      {/* Header */}
      <header className="fixed h-[90px] w-full top-0 py-3 flex justify-center items-center border bg-[#232946] overflow-hidden  border-blue-400 pointer-events-none z-50">
        <nav className="text-l font-semibold w-fit h-full flex items-center justify-center rounded-md pointer-events-auto">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </nav>
      </header>
        {/* landing section */}
        <section className='h-screen flex flex-row border  border-red-400 '>
          
          {/* text */}
          <div className="w-full flex flex-col justify-center items-center ">
            <SplitText
                text="Portfolio"
                className="text-white text-[200px] custom-font font-semibold"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            <h2 className=" text-white text-[30px]">Jumilyn Anne |  Developer</h2>
          </div>
          <div className="w-full h-screen relative  ">
            <img src={Me} className="absolute top-[100px]  w-fit h-[1000px]"/>
            <img src={Bubble} className="absolute top-[135px] left-[500px] w-fit h-[300px]"/>
          </div>

        </section>
        {/* about section */}
        <section className=' h-screen border flex flex-row justify-center '>
                    
              <div className='w-full flex justify-center items-center'>
                <img src={Aboutpic} className='w-fit h-[600px] border-[25px] border-[#EEBBC3] shadow-[10px]' />
              </div>

              <div className='w-full flex flex-col justify-center gap-[36px]'>
                <h1 className='text-white text-[120px] font-semibold custom-font '>About</h1>
               
                 <TextType 
                    text={"I am Jumilyn Anne, a dedicated and motivated third-year Bachelor of Science in Information Technology student at Mapúa University. With a strong foundation in programming, system design, and data management, I am passionate about using technology to solve real-world problems. I am eager to apply my skills in a dynamic and challenging environment where I can contribute to innovative projects and continue to grow as an IT professional."}
                    className="text-white text-[25px] mr-[220px] "
                    typingSpeed={10}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                  
                <div className="flex gap-[10px]   ">
                
                  <a href=""className="text-[#EEBBC3] text-[50px] ">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://www.facebook.com/jumilyn10" target="_blank" className="text-[#EEBBC3] text-[50px] ">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#"className="text-[#EEBBC3] text-[50px] ">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
             
            
        </section>
        {/* Skills  */}
        <section className="h-screen flex flex-col  justify-center relative  border border-t-purple-200">

                <h1 className=" absolute top-[100px] left-[830px]
                 text-white text-[120px] border border-r-red-300 font-semibold custom-font">Skills </h1>
              
             
             <div className="absolute top-[300px] left-[200px] flex-row">
                <h2 className=" text-white text-[50px] "> Frontend </h2>
                <div className="grid grid-cols-3 gap-5">
                  <FontAwesomeIcon icon={faJs} className="text-[#EEBBC3] text-[152px]"/>
                  <FontAwesomeIcon icon={faHtml5} className="text-[#EEBBC3] text-[152px]"/>
                  <FontAwesomeIcon icon={faCss3Alt} className="text-[#EEBBC3] text-[152px]"/>
                  <FontAwesomeIcon icon={faReact} className="text-[#EEBBC3] text-[152px]"/>
                </div>
             </div>

             <div className="absolute left-[1300px] top-[300px]  ">
              <h2 className=" text-white text-[50px]"> Backend </h2>
                <FontAwesomeIcon icon={faPython} className="text-[#EEBBC3] text-[152px]"/>
                <FontAwesomeIcon icon={faJava} className="text-[#EEBBC3] text-[152px]"/>
             </div>


        </section>
        {/* files/ works */}
        <section className="h-screen border border-pink-400">
          <div> 
            <h1 className="flex justify-center text-white text-[150px] font-semibold custom-font">Works</h1>
          </div>

          {/* folder */}
          <div className="flex justify-evenly ">
          {/* first folder */}
          <div> 
            <img src={Square} className=" w-fit h-[450px]" />
          </div>

          {/* second */}
              <div> 
            <img src={Square} className=" w-fit h-[450px]" />
          </div>

          {/* third */}
            <div> 
            <img src={Square} className=" w-fit h-[450px]" />
          </div>

          </div>
          
        </section>
      </main>

    </>
  )
}

export default App
