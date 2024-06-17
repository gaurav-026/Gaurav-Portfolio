import React, { useEffect } from 'react'
import img1 from '../assets/img1.png'
import { Link } from 'react-router-dom'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className='frame1' data-aos="fade-down">
        <div className="container">

          <div className="text3" data-aos="zoom-in">
            Hi,<br />
            I am Gaurav Chakrawarti,<br />
            MERN Stack Developer<br />
            UI/UX Designer<br />
          </div>
          <div className="image1" data-aos="zoom-out-up">
            <img src={img1} alt="Profile" width={250} />
          </div>
        </div>
        <div className="text4" data-aos="fade-down">
          I am a final-year B.Tech Electronics Engineering student with an overall CGPA of 8.75. I possess strong knowledge of Data Structures and Algorithms, MERN Stack Development, and UI/UX Design. As a MERN Stack developer, I can effectively handle both frontend and backend development, ensuring functional and visually appealing user interfaces. I have successfully worked as a UI/UX Designer intern at two companies and have also delivered two freelance projects.
        </div>


      </div>

      <div className="frame2" data-aos="fade-up">
        <h2 className='h2'>Current Position</h2>
        <div className="container1">
          <p1 className='text5'>I am currently working as a part-time UI/UX Intern at Be10x, where I have successfully revamped a Learning Management System (LMS) and a Workday Nutrition website. My efforts have significantly enhanced user engagement and satisfaction. I am now focused on designing an LMS app for the company, aiming to deliver a seamless and user-friendly experience for our mobile users.</p1>

        </div>

        <br />
        <h2 className='h2'>Work Experience</h2>
        <div className="experienceContent" data-aos="fade-right">
        <p className='text5'>
          <ul><li><b>UI/UX Designer Intern</b></li></ul>
          {/* <br /> */}
          <i>Be10x || (May 2024- June 2024)</i>
          <br /> <br />
          Key Responsibilities and Achievements:
          <br />
          - Successfully revamped a Learning Management System (LMS) and a Workday Nutrition website, resulting in significant enhancements in user engagement and satisfaction.
          <br></br>
          - Currently designing an LMS app for the company, focusing on delivering a seamless and user-friendly experience for mobile users.
          <br></br>
          - Conducted user research, developed wireframes and prototypes, and collaborated with the development team to ensure the effective implementation of design solutions. <br></br>
          -
          Improved overall user experience by aligning design strategies with user needs and business objectives.<br />

        </p>
        </div>
        <br />
        <div className="experienceContent" data-aos="fade-right">
        <p className='text5'>
          <ul><li><b>UI/UX Designer Intern</b></li></ul>
          {/* <br /> */}
          <i>Cakelaya Startup || (Jan 2024)</i>
          <br /> <br />
          Key Responsibilities and Achievements:
          <br />
          -Successfully designed two mobile apps and one responsive website for the company.
          <br></br>
          - Both the designed apps are now available on the Play Store, demonstrating the practical application and impact of the designs.
          <br></br>
          - Conducted user research, developed wireframes and prototypes, and collaborated with the development team to ensure the effective implementation of design solutions. <br></br>
          -Collaborated with the development team to ensure designs were effectively implemented and met user needs.
          <br />

        </p>
        </div>

        <br />
        <h2 className='h2'>Educational Qualifications</h2>
        <p className='text5' data-aos="fade-up">
          Kamla Nehru Institute of Technology, Sultanpur <br />
          BTech || CGPA: 8.75 <br />
          Nov 2021 - Jul 2025 <br />
          {/* Activities and societies: Sports, Flute Playing, Travelling, Exploring New things and Ideas */}
        </p>
      </div>

      <div className="frame3" data-aos="fade-up-right">
        <div className="container3">
          <h2 className="h2">Technical Skills</h2>
          <div className="container4">
            <div className="box">
              <p className="text6">Data Structure & Algorithms</p>
            </div>
            <div className="box">
              <p className="text6">C/C++</p>
            </div>
            <div className="box">
              <p className="text6">Java(Basic)</p>
            </div>
            <div className="box">
              <p className="text6">Javascript</p>
            </div>
            <div className="box">
              <p className="text6">NoSQL(MongoDb)</p>
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
              <p className="text6">UI/UX Design</p>
            </div>
            <div className="box">
              <p className="text6">Low Level Designing</p>
            </div>
            <div className="box">
              <p className="text6">HTML</p>
            </div>
            <div className="box">
              <p className="text6">CSS</p>
            </div>
            <div className="box">
              <p className="text6">Bootstrap</p>
            </div>
            <div className="box">
              <p className="text6">Git/Github</p>
            </div>
            <div className="box">
              <p className="text6">IDE's</p>
            </div>
            <div className="box">
              <p className="text6">Package Managers</p>
            </div>
            <div className="box">
              <p className="text6">API</p>
            </div>
            <div className="box">
              <p className="text6">Hosting</p>
            </div>
            <div className="box">
              <p className="text6">Figma</p>
            </div>
            <div className="box">
              <p className="text6">Canva</p>
            </div>
            <div className="box">
              <p className="text6">ChatGPT</p>
            </div>

          </div>


        </div>
      </div>


      <div className="frame4" data-aos="fade-down-right">
        <Link to="/worksamples" >
        <p className='worksamples'><button className='button1' >Click here to see Work Samples  &nbsp;  <FaRegArrowAltCircleRight /></button></p>
        </Link>
      </div>


      <div className="frame2" data-aos="fade-up">
        <h2 className='h2'>Additional Information</h2>
        <p className='text5'>
          <b>Soft Skills:</b> Problem Solving | Teamwork | Time Management
        </p>
        <p className='text5'>
          <b>Languages: </b> English | Hindi(Native)
        </p>
        <p className='text5'>
          <b>Certifications:</b>  Web Development Fundamentals | UI/UX Designer Intern | Hackathons
        </p>
        <p className='text5'>
          <b>Extra Curricular Activities:</b>  <br></br>
          &nbsp;&nbsp;&nbsp;- Participated in Hackatons like <b>“Coca-Cola Season-3”</b> and <b>“Flipkart Grid-5.0”</b> <br></br>
          &nbsp;&nbsp;&nbsp;- I am Designer Head in college club named Mechanical
          Engineering Forum.<br></br>
          &nbsp;&nbsp;&nbsp;- Organize events at our college to provide students with opportunities to learn about various technical subjects and gain valuable knowledge. <br></br>
          &nbsp;&nbsp;&nbsp;- Build Automated Parking System using Arduino
        </p>
        <p className='text5'>
          <b>Achievements:</b><br></br>
          &nbsp;&nbsp;&nbsp;- Codechef(<b>max. 1378</b>), <b>300+</b> Problems on LeetCode|GFG <br></br>
          &nbsp;&nbsp;&nbsp;- Developed responsive web apps using React.js<br></br>
          &nbsp;&nbsp;&nbsp;- Collaborated with other designers to implement creative designs<br></br>
          &nbsp;&nbsp;&nbsp;- Successfully delivered 2 Freelance projects
        </p>
        <p className='text5'>
          <b>Interests:</b> Creating Personal Projects | Gaming | Travelling | Flute playing | Workout | Basket Ball | Space Exploration | Music
        </p>
      </div>
      <div className="frame5" data-aos="fade-up">
        <p3 className="contactme">Contact me</p3>
        <div className="container6">
          <a className="box4" href="https://www.linkedin.com/in/gaurav-chakrawarti-74567b224/ ">
          <FaLinkedin size={40} color='blue'/>
          </a>

          <a className="box4" href="https://www.instagram.com/gauravchakrawarti2003/">
          <RxInstagramLogo size={40} color='rgb(255, 0, 140)'/>
          </a>
          
          <a className="box4" href="https://github.com/Gaurav-123410">
          <FaGithub  size={40} color='black'/>
          </a>

        </div>
      </div>
      
    </>
  )
}

export default Home
