import React, { useEffect } from 'react'
import img1 from '../assets/img1.png'
import { Link } from 'react-router-dom'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <>
      <div className='frame1' data-aos="fade-down">
        <div className="container">

          <div className="text3" data-aos="zoom-in">
          

          <TypeAnimation sequence={["Hi,\nI am Gaurav Chakrawarti,\nSoftware Developer\nUI/UX Designer", 5000, ""]} repeat={Infinity} cursor={true} omitDeletionAnimation={true} style={{whiteSpace:"pre-line", display:"block"}}></TypeAnimation>
            
          </div>
          <div className="image1" data-aos="zoom-out-up">
            <img src={img1} alt="Profile" width={250} />
          </div>
        </div>
        <div className="text4" data-aos="fade-down">
          A final-year B.Tech Electronics Engineering student with an overall CGPA of 8.78. I possess strong knowledge of Computer Science fundamentals, MERN Stack Development, and UI/UX Design. As a MERN Stack developer, I can effectively handle both frontend and backend development, ensuring functional and visually appealing user interfaces.
        </div>


      </div>

      <div className="frame2" data-aos="fade-up">
        <h2 className='h2'>Current Position</h2>
        <div className="container1">
          <p1 className='text5'>I am looking for a full-time SDE role to give a kickstart to my career. I have successfully worked as a UI/UX Designer intern at two companies and also delivered two freelance projects.<br/> Feel free to share with me if you find anything relevant for me. Email: gauravchakrawarti8@gmail.com</p1>

        </div>

        <br />
        <h2 className='h2'>Work Experience</h2>
        <div className="experienceContent" data-aos="fade-right">
        <p className='text5'>
          <ul><li><b>UI/UX Designer Intern</b></li></ul>
          {/* <br /> */}
          <i>Be10x || (May 2024- July 2024) || <a href="https://www.behance.net/gallery/204263823/Learning-Management-System-Dashboard">[Project Demo]</a></i>
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
          <i>Cakelaya Startup || (Jan 2024) || <a href="https://www.behance.net/gallery/191259441/Cake-Delivery-App">[Project Demo]</a></i>
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
          BTech || CGPA: 8.78 <br />
          Nov 2021 - Jul 2025 <br />
        </p>
        <p className='text5' data-aos="fade-up">
          12th || Rashtriya Inter College, Amroha, Uttar Pradesh <br />
          Percentage: 86% || 2021 <br />
        </p>
        <p className='text5' data-aos="fade-up">
          10th || Rashtriya Inter College, Amroha, Uttar Pradesh <br />
          Percentage: 87.5% || 2019 <br />
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
              <p className="text6">Java</p>
            </div>
            <div className="box">
              <p className="text6">OOPS</p>
            </div>
            <div className="box">
              <p className="text6">OS</p>
            </div>
            <div className="box">
              <p className="text6">DBMS</p>
            </div>
            <div className="box">
              <p className="text6">MERN Stack</p>
            </div>
            <div className="box">
              <p className="text6">Next.js</p>
            </div>
            <div className="box">
              <p className="text6">Javascript</p>
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
              <p className="text6">Material UI</p>
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
          <b>Certifications:</b>  <a href="https://www.credly.com/badges/a51ac906-fcae-44da-baf4-6ad905814b2f/linked_in_profile">Web Development Fundamentals</a> | <a href="https://drive.google.com/file/d/1v_29DrYHwfhUS7BB6_1bbkK9B7iA57Tp/view?usp=sharing">UI/UX Designer Intern</a> | Hackathons
        </p>
        <p className='text5'>
          <b>Achievements:</b><br></br>
          &nbsp;&nbsp;&nbsp;- Codechef(<b>max. 1378</b>), (<b>1450+</b> Rating) & <b>350+</b> Problems on LeetCode|GFG <br></br>
          &nbsp;&nbsp;&nbsp;- Successfully delivered 2 Freelance projects<br></br>
          &nbsp;&nbsp;&nbsp;- Collaborated with other designers to implement creative design solutions.
        </p>
        <p className='text5'>
          <b>Extra Curricular Activities:</b>  <br></br>
          &nbsp;&nbsp;&nbsp;- Participated in Hackatons like <a href="https://drive.google.com/file/d/1JRXX2-STYRdhBWjcRc72lJeGFBvymwyd/view?usp=sharing"><b>“Sparkathon”</b></a> and <a href="https://drive.google.com/file/d/1IPQUQm6z4e9s4ty2NQZSZwWvD9wuzcjy/view?usp=sharing"><b>“Flipkart-Grid 6.0”</b></a> <br></br>
          &nbsp;&nbsp;&nbsp;- I am Designer Head in college club named Mechanical
          Engineering Forum.<br></br>
          &nbsp;&nbsp;&nbsp;- Organized an international event at the college under the mentorship of faculty members.<br></br>
          &nbsp;&nbsp;&nbsp;- Build Automated Parking System using Arduino
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
