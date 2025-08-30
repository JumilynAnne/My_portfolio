import Aboutpic from "./img/Aboutpic.jpg"
import cloudr from "./img/cloudr.png"
import cloudl from "./img/cloudl.png"
import cloud3 from "./img/cloud3.png"
import SplitText from "./components/ui/SplitText/SplitText"
import TextType from "./components/ui/TextType/TextType"
import GooeyNav from "./components/ui/GooeyNav/GooeyNav"
import MagicBento from "./components/ui/MagicBento/MagicBento"
import { useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin, 
  faHtml5,
  faReact,
  faPython,
  faJava,faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";



function App() {
  const ref = useRef(null)

  const sectionRefs = {
    landing: useRef(),
    about: useRef(),
    skills: useRef(),
    project: useRef(),
    contact: useRef(),
  };

    const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
    const items = [
      { label: "Home", onclick: ()=> sectionRefs.landing.current?.scrollIntoView({ behavior: "smooth" }) },
      { label: "About", onclick: ()=> sectionRefs.about.current?.scrollIntoView({ behavior: "smooth" }) },
      { label: "Skills", onclick: ()=> sectionRefs.skills.current?.scrollIntoView({ behavior: "smooth" }) },
      { label: "Project", onclick: ()=> sectionRefs.project.current?.scrollIntoView({ behavior: "smooth" }) },
      { label: "Contact", onclick: ()=> sectionRefs.contact.current?.scrollIntoView({ behavior: "smooth" }) },
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
        <section className='h-screen flex flex-row border  border-red-400'
          ref={sectionRefs.landing}
        >
          
          {/* text */}
          {/* <div className="absolute top-[300px] left-[625px] ">
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
            <h2 className=" flex justify-center text-white text-[30px] custom-font">Jumilyn Anne |  Developer</h2>
          </div> */}

          {/* cloud   <img src={cloudr} />*/}
          <div className="relative flex  w-full h-full">
            {/* <img src={cloudl} className="absolute  bottom-[225px] left-[1000px] w-fit h-[190px] " />
            <img src={cloud3} className="absolute bottom-[200px] right-[100px] w-fit h-[190px] " />
            <img src={cloudr} className=" absolute top-[200px] left-[200px] w-fit h-[190px] " />
            <img src={cloudr} className=" absolute top-[300px] left-[100px] w-fit h-[190px] " /> */}

          </div> 
        </section>

        {/* about section */}
        <section className='h-max border flex flex-row justify-evenly p-10'
          ref={sectionRefs.about}
        >
                    
              <div className='w-full flex justify-center items-center'>
                <img src={Aboutpic} className='h-[600px] border-[25px] border-[#EEBBC3] shadow-[10px]' />
              </div>
                
              <div className='w-full flex flex-col justify-center gap-5'>
                <h1 className='text-white text-[100px] font-semibold custom-font '>About Me</h1>
               
                 <TextType 
                    text={"I am Jumilyn Anne, a dedicated and motivated third-year Bachelor of Science in Information Technology student at Mapúa University. With a strong foundation in programming, system design, and data management, I am passionate about using technology to solve real-world problems. I am eager to apply my skills in a dynamic and challenging environment where I can contribute to innovative projects and continue to grow as an IT professional."}
                    className="text-white text-[25px] text-justify font-extralight w-[80%]"
                    typingSpeed={5}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />

            
                  
                <div className="flex gap-[10px]   ">
                
                  <a href="https://github.com/JumilynAnne" target="_blank"
                  className="text-[#EEBBC3] text-[50px] hover:text-[#f2e0e0]">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://www.facebook.com/jumilyn10" target="_blank"
                   className="text-[#EEBBC3] text-[50px] hover:text-[#f2e0e0] ">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#" target="_blank"
                  className="text-[#EEBBC3] text-[50px] hover:text-[#f2e0e0] ">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
        </section>

        {/* Skills  */}
        <section className="h-max flex flex-col  justify-center items-center gap-10 p-10  border border-t-purple-200"
          ref={sectionRefs.skills}
        >

            <h1 className="text-white text-[120px]  font-semibold custom-font text-center">Skills </h1>

            <div className="grid-cols-2 flex justify-center items-center gap-[20px]">
              <FontAwesomeIcon icon={faHtml5} className="text-[#eebbc3] text-[150px]"/>
              <FontAwesomeIcon icon={ faReact} className="text-[#eebbc3] text-[150px]"/>
              <FontAwesomeIcon icon={faPython}className="text-[#eebbc3] text-[150px]" />
              <FontAwesomeIcon icon={ faJava} className="text-[#eebbc3] text-[150px]"/>
              <FontAwesomeIcon icon={ faCss3Alt}className="text-[#eebbc3] text-[150px]" />
            </div>

        </section>
        {/* files/ works */}
        <section className="h-screen border border-pink-400"
          ref={sectionRefs.project}
        >

          {/* folder */}
        
        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
        </section>

        {/* contact */}
        <section className="h-screen flex flex-row justify-center items-center border border-blue-400" 
        ref={sectionRefs.contact}>
          
          <div className="flex flex-row  justify-center items-center">

            <div className=" relative border border-red-400 h-[700px] w-[900px] bg-[#b8c1ec] bg-opacity-70 flex justify-center items-center ">
            <h1 className="absolute top-[10px] custom-font text-[#eebbc3] text-[90px]"> Contact Me </h1>

            <form action="" className="flex flex-col gap-[20px]  ">
              <input type="text" placeholder="Your Name" className="h-[50px] w-[500px] rounded-[10px]  pl-5"/>
                <input type="text" placeholder="Your Email" className="h-[50px] w-[500px] rounded-[10px] pl-5" />
                <textarea placeholder="Your Message" className="h-[200px] w-[500px] rounded-[10px] p-5"></textarea>
            </form>
            <button className="absolute bottom-[100px] h-[50px] w-[200px] bg-[#eebbc3] text-[#232946] custom-font font-semibold 
            text-[25px] rounded-[10px]">Send</button>

          </div>

          </div>

          
        </section>  
      </main>

    </>
  )
}

export default App

