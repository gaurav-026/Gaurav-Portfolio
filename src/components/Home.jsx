import React from 'react'
import img1 from '../assets/img1.png'
import call from '../assets/call.svg'
import linkedin from '../assets/linkedin.png'
import freelancer from '../assets/freelancer-jpeg.png'
import instagram from '../assets/instagram.svg'
import git from '../assets/git.svg'
import mail from '../assets/mail.svg'
const Home = () => {
  return (
    <>
      <div className='frame1'>
        <div className="container">
          
        <div className="text3">
            Hi,<br />
            I am Gaurav Chakrawarti,<br />
            MERN Stack Developer<br />
            UI/UX Designer<br />
        </div>
        <div className="image1">
            <img src={img1} alt="Image" width={250} />
        </div>
        </div>
        <div className="text4">
        A 3rd Year B.tech student specializing in Electronics Engineering with an overall CGPA of 8.75.
        Have a
good knowledge of Data Structures and Algorithms, MERN Stack Web-Development, and UI/UX Designs.
        </div>
        
        
      </div>

      <div className="frame2">
        <h2 className='h2'>Current Position</h2>
        <div className="container1">
          <p className='text5'>I am a 3rd Year B.Tech Student from Kamla Nehru Institute Of Technology, Sultanpur.<br/> I am a MERN Stack Web Developer, UI/UX Designer and Competitive Programmer. I
have worked as an individual as well as a part of collaborative team and produced outstanding results.<br/> I am currently working as a Part-time UI/UX Designer Intern in Be10x company. </p>
          
        </div>

        <br/>
        <h2 className='h2'>Work Experience</h2>
        <p className='text5'>
            <b>UI/UX Designer, Cakelaya Startup (Jan 2024- Feb 2024)</b> <br />
            Recently worked as a 1 month UI/UX designer intern at Cakelaya startup. Designed two apps and one
responsive website for the company.<br />
            
          </p>
        <br/>
        <h2 className='h2'>Educational Qualifications</h2>
        <p className='text5'>
            Kamla Nehru Institute of Technology, Sultanpur <br />
            Bachelor of Technology - BTech <br />
            Semester: 6 || CGPA: 8.75 <br />
            Nov 2021 - Jul 2025 <br />
            {/* Activities and societies: Sports, Flute Playing, Travelling, Exploring New things and Ideas */}
          </p>
      </div>

      <div className="frame3">
        <div className="container3">
        <h2 className="h2">Skills</h2>
          <div className="container4">
            <div className="box">
              <p className="text6">DSA</p>
            </div>
            <div className="box">
              <p className="text6">C++</p>
            </div>
            <div className="box">
              <p className="text6">React.js</p>
            </div>
            <div className="box">
              <p className="text6">Node.js</p>
            </div>
            <div className="box">
              <p className="text6">Express.js</p>
            </div>
            <div className="box">
              <p className="text6">MongoDB</p>
            </div>

            <div className="box">
              <p className="text6">Git</p>
            </div>
            <div className="box">
              <p className="text6">Bootstrap</p>
            </div>
            <div className="box">
              <p className="text6">UI/UX Design</p>
            </div>
            <div className="box">
              <p className="text6">Figma</p>
            </div>
            <div className="box">
              <p className="text6">Canva</p>
            </div>
            <div className="box">
              <p className="text6">HTML</p>
            </div>
            <div className="box">
              <p className="text6">CSS</p>
            </div>
            <div className="box">
              <p className="text6">Javascript</p>
            </div>
            
          </div>
        

      </div>
      </div>
      

      <div className="frame4">
        <p className='worksamples'>Work Samples</p>
        <div className="container5">
          <div className="box1">
            <p className='text7'>Websites: </p>
            <p className='text8'>
            <br/>   - Task Master: Todo Application <br/>
              - Crypto Application <br/>
              - Employee Form  <br/>
              - Personal Portfolio <br/>
              - Video Player <br/>
            </p>
          </div>
          <div className="box2">
            <p className='text7'>App Designs: <br/></p>
            <p className='text8'>
            <br/>    - EnergizeX: Health Product Websie <br/>
              - Cake Advertising Website <br/>
              - Cake Delivery App<br/>
              - Social Media App <br/>
              - Admin Screens <br/>
            </p>
          </div>
          
        </div>

      </div>


      <div className="frame2">
        <h2 className='h2'>Additional Information</h2>
        <p className='text5'>
            <b>Developer Tools:</b> VS Code, Git & GitHub, Postman, Vercel, Netlify, ChatGPT
        </p>
        <p className='text5'>
            <b>Designer Tools:</b> Figma, Canva
        </p>
        <p className='text5'>
            <b>Soft Skills:</b> Problem Solving, Teamwork, Time Management
        </p>
        <p className='text5'>
            <b>Languages: </b> English,Hindi(Native).
          </p>
        <p className='text5'>
            <b>Certifications:</b>  Web Development Fundamentals, UI/UX Designer Intern
          </p>
        <p className='text5'>
            <b>Activities:</b>  Participated in <b>“Coca-Cola Season-3”</b> and <b>“Flipkart Grid-5.0”</b>, Designer head in college club: Mechanical
Engineering Forum.
          </p>
        <p className='text5'>
            <b>Awards:</b> Codechef(<b>max. 1378</b>), <b>250+</b> Problems(Leetcode & Gfg), Freelancer(UI Design).
          </p>
        <p className='text5'>
            <b>Interests:</b> Travelling, Flute-playing, Workout
          </p>
      </div>
      <div className="frame5">
        <p className="contact">Contact me</p>
        <div className="container6">
        <div className="box3">
          <img className='img1' src={call} alt="logo" />
          <p className='text9'>+91 8433234136<br/></p>
        </div>
        <br/>
        <a className="box4" href="https://www.linkedin.com/in/gaurav-chakrawarti-74567b224/ ">
          <img className='img2' src={linkedin} alt="logo" />
          <a className='text9' href="https://www.linkedin.com/in/gaurav-chakrawarti-74567b224/ ">https://www.linkedin.com/in/gaurav-chakrawarti-74567b224/ </a>
        </a>
        <br/>
        <a className="box5" href="https://www.freelancer.com/u/gaurav21426">
          <img className='img2' src={freelancer} alt="logo" />
          <a className='text9' href="https://www.freelancer.com/u/gaurav21426">https://www.freelancer.com/u/gaurav21426</a>
        </a>
        <br/>
        <a className="box5" href="https://www.instagram.com/gauravchakrawarti2003/">
          <img className='img2' src={instagram} alt="logo" />
          <a className='text9' href="https://www.instagram.com/gauravchakrawarti2003/">https://www.instagram.com/gauravchakrawarti2003/</a>
        </a>
        <br/>
        <a className="box6" href="https://github.com/Gaurav-123410">
          <img className='img2' src={git} alt="logo" />
          <a className='text9' href="https://github.com/Gaurav-123410">https://github.com/Gaurav-123410</a>
        </a>
        <br/>
        <div className="box7">
          <img className='img2' src={mail} alt="logo" />
          <a className='text9'>gauravchakrawarti8@gmail.com</a>
        </div>

        </div>
      </div>
    </>
  )
}

export default Home
