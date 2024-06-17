import React, { useEffect } from 'react'
import web1 from '../assets/web1.png'
import web2 from '../assets/web2.png'
import web3 from '../assets/web3.png'
import web7 from '../assets/web7.png'
import des1 from '../assets/des1.png'
import des2 from '../assets/des2.png'
import des3 from '../assets/des3.png'
import des4 from '../assets/des4.png'
import des5 from '../assets/des5.png'
import { RiExternalLinkLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Worksamples = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return (
        <>
            <h1 className='heading1'>Front-End Websites</h1>
            <section>
                <h2 className='heading2'>1. Task Master: Todo App - MERN Website</h2>
                <div className="card2" data-aos="fade-up">
                    <img src={web7} alt="siteImage" className='rectangle' data-aos="fade-up" />
                    <p className='content' data-aos="fade-down">This task management website allows users to add, edit, delete, and mark tasks as completed. Additionally, users can analyze completed tasks in the Analysis section. Designed in Figma and developed using MERN technologies, HTML, CSS, JavaScript, and Netlify, with version control through Git and assistance from ChatGPT, this platform ensures a seamless and efficient task management experience.</p>

                </div>
                <div className="buttonCollection"><a href="https://task-master-by-gaurav.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/Task-Master-MERN-Stack.git"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>

            </section>
           
            <section>
                <h2 className='heading2'>2. Employee Form - MERN Website</h2>
                <div className="card1" data-aos="fade-up">

                    <p className='content' data-aos="fade-down">This website saves the data of employee of a company in the database. This is developed using MERN technologies, HTML, CSS, JavaScript,Netlify and Render with version control through Git.</p>
                    <img src={web3} alt="siteImage" className='rectangle' />
                </div>
                <div className="buttonCollection"><a href="https://gaurav-employeeform.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/Employeeform---Backend.git"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>
            </section>

            <section>
                <h2 className='heading2'>3. Shopping Cart - Frontend Website</h2>
                <div className="card2" data-aos="fade-up">
                    <img src={web2} alt="siteImage" className='rectangle' />
                    <p className='content' data-aos="fade-down">This one-page shopping cart website allows users to add, remove, and checkout items with real-time price updates.It is developed using React.js, HTML, CSS, JavaScript, and Netlify, with version control through Git.</p>

                </div>
                <div className="buttonCollection"><a href="https://gaurav-shoppingcart.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/ShoppingCart--React-Redux.git"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>

            </section>

            <section>
                <h2 className='heading2'>4. Crypto Application - Frontend Website</h2>
                <div className="card1" data-aos="fade-up">

                    <p className='content' data-aos="fade-down">This responsive and user-friendly
                        web application contains data about crypto-currencies with their prices. You can check the coins available in cryptocurrencies and the
                        different platforms where these currencies can be
                        exchanged. Also it have Login/Signup and Light-Dark mode functionality.
                        It is developed using React.js, HTML, CSS and JS.</p>
                    <img src={web1} alt="siteImage" className='rectangle' />
                </div>
                <div className="buttonCollection"><a href="https://crypto-app-gaurav-123410.vercel.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href=" "><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>
               


            </section>
            
            <h1 className='heading1'>UI/UX Designs</h1>
            <section>
                <h2 className='heading2'>1. EnergizeX: Health and Nutrition Product Website </h2>
                <div className="card2" data-aos="fade-up">
                    <img src={des5} alt="siteImage" className='rectangle' />
                    <p className='content' data-aos="fade-down">It is an E-commerce website which sells health and nutrition products. It is similar to other e-commerce sites like flipkart, amazon etc. This is single page website and designed in Figma. </p>

                </div>
                <a href="https://www.behance.net/gallery/197905255/EnergizeX-Health-Nutrition-Product-Website"><button className='button'>Visit Design &nbsp;<RiExternalLinkLine /></button></a>

            </section>
            <section>
                <h2 className='heading2'>2. Cakelaya Android App Design</h2>
                <div className="card1" data-aos="fade-up">

                    <p className='content' data-aos="fade-down">It is a Cake Delivery App design. I have designed this UI for a startup company while working as a part-time UI/UX Intern.  I have used illusations, sliders, icons and a lot of research too for this project. It has around 30-35 screens and designed within 20 days.</p>
                    <img src={des1} alt="siteImage" className='rectangle' />
                </div>
                <a href="https://www.behance.net/gallery/191259441/Cake-Delivery-App"><button className='button'>Visit Design &nbsp;<RiExternalLinkLine /></button></a>

            </section>
            <section>
                <h2 className='heading2'>3. Cakelaya Website </h2>
                <div className="card2" data-aos="fade-up">
                    <img src={des2} alt="siteImage" className='rectangle' />
                    <p className='content' data-aos="fade-down">It is the Web design of  Cake Delivery Application. I have designed this UI for a startup company while working as a part-time UI/UX Intern. It is an attractive and responsive design for Web, Tablet and Mobile view. It includes some pages like Home, About, Terms & Conditions and Privacy Policy.</p>

                </div>
                <a href="https://www.behance.net/gallery/191259975/Cake-Website"><button className='button'>Visit Design &nbsp;<RiExternalLinkLine /></button></a>

            </section>
            <section>
                <h2 className='heading2'>4. Social Media App</h2>
                <div className="card1" data-aos="fade-up">

                    <p className='content' data-aos="fade-down">This is a social media app like Instagram where users can connect, talk with each other through chat,call,video call and can watch reels and posts. I have designed this app for a freelance client. These are around 15 mobile screens.</p>
                    <img src={des3} alt="siteImage" className='rectangle' />
                </div>
                <a href="https://www.behance.net/gallery/191250435/Social-Media-App"><button className='button'>Visit Design &nbsp;<RiExternalLinkLine /></button></a>
            </section>
            <section>
                <h2 className='heading2'>5. Admin Dashboard</h2>
                <div className="card2" data-aos="fade-up">

                    <img src={des4} alt="siteImage" className='rectangle' />
                    <p className='content' data-aos="fade-down">This is a Admin Dashboard for a social media app. It includes the data anlaysis of the app and also a social network for admins. They can connect and post their stories, feeds etc. I have designed this app for a freelance client. These are around 5 web screens.</p>
                </div>
                <a href="https://www.behance.net/gallery/191881739/Admin-Panel"><button className='button'>Visit Design &nbsp;<RiExternalLinkLine /></button></a>
            </section>
        </>
    )
}

export default Worksamples
