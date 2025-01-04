import React, { useEffect } from 'react'
import web1 from '../assets/web1.png'
import web2 from '../assets/web2.png'
import web3 from '../assets/web3.png'
import web7 from '../assets/web7.png'
import des1 from '../assets/des1.png'
import des2 from '../assets/des2.png'
import des5 from '../assets/des5.png'
import syncTable from "../assets/syncTable.png";
import qSubmit from "../assets/qsubmit.png";
import admin from "../assets/admin.png"
import figmatocode from "../assets/figmatocode.png"
import workday from "../assets/Frame 40068 (1).png"
import lmsweb from "../assets/lmsweb.png"
import lmsapp from "../assets/lmsapp.png"
import battle from '../assets/battle.png'
import ecart from '../assets/ecart.png'
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
            <h1 className='heading1'>Recent Projects</h1>
            <section>
                <h2 className='heading2'> ::  Battlefield V: Gaming Website | 2025</h2>
                <div className="card2" data-aos="fade-up">
                    <img src={battle} alt="siteImage" className='rectangle' />
                    <p className='content' data-aos="fade-down">Transformed Figma mockups into mobile-responsive web interfaces utilizing React.js and Tailwind CSS.Built a high-performance Node.js backend with custom APIs, managing AWS 
                    deployment and handled media operations by constructing a file management system with Express-file upload and Cloudinary integration.
                    <br />
                    <b>Key Learning:</b> AWS, Cloudinary Integration, Handling large static and dynamic data in the application.
                    <br/>
                    <b>Stack Used:</b> AWS, React, Node.js, MongoDb, Tailwind CSS, Cloudinary, Javascript.
                    </p>
                </div>
                <div className="buttonCollection"><a href="https://gaurav-battlefield-v.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/BATTLEFIELD-V"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>
            </section>

            <section>
                <h2 className='heading2'> ::  FashionVilla: E-Commerce Store | 2024</h2>
                <div className="card1" data-aos="fade-up">
                    <p className='content' data-aos="fade-down">Built a robust e-commerce platform employing Redux for effective state management, streamlined product selection process by integrating functionalities for adding items into carts while ensuring accurate 
                    quantity adjustments and Engineered scalable API integrations that optimized data retrieval.
                    <br />
                    <b>Key Learning:</b> State Management using Redux, API.
                    <br/>
                    <b>Stack Used:</b> Next.js, React, Redux, Javascript, Tailwind.
                    </p>
                    <img src={ecart} alt="siteImage" className='rectangle' />
                </div>
                <div className="buttonCollection"><a href="https://fashionvilla-by-gaurav.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/Fashion-Villa---Shopping-App"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>
            </section>

            <section>
                <h2 className='heading2'> ::  SyncTable: Table Data Emailer | 2024</h2>
                <div className="card2" data-aos="fade-up">
                    <img src={syncTable} alt="siteImage" className='rectangle' />
                    <p className='content' data-aos="fade-down">User can add new data, which will be promptly reflected in the table below. By selecting any row from the table and clicking the "Send Email" button, you can send an email to the host associated with that row's data. All data entries are securely stored in the database.
                    <br />
                    <b>Key Learning:</b> Creating tables with dynamic data and data mailing concepts.
                    <br/>
                    <b>Stack Used:</b> MERN, Next.js, ContextAPI, Tailwind CSS, Material UI, Bootstrap, Git.
                    </p>
                </div>
                <div className="buttonCollection"><a href="https://synctable-by-gaurav.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/SyncTable.git"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>
            </section>

            <section>
                <h2 className='heading2'> ::  Q-Submit: Submission app | 2024</h2>
                <div className="card1" data-aos="fade-up">
                    <p className='content' data-aos="fade-down">The submission app website allows users to select answers to questions (Single or Multiple choice), which are then stored in a database. The question cards are designed to be responsive, flexible, and draggable. Users can view their responses by navigating to the Analysis section.
                    <br />
                    <b>Key Learning:</b> Creating Forms with dynamic data, Draggable Components.
                    <br/>
                    <b>Stack Used:</b> MERN, ContextAPI, Javascript, Package: React-beautiful-dnd, Git.
                    </p>
                    <img src={qSubmit} alt="siteImage" className='rectangle' />
                </div>
                <div className="buttonCollection"><a href="https://gaurav-submission-app.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/Question-submission-application-MERN-.git"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>
            </section>

            <section>
                <h2 className='heading2'>::  Task Master: Todo App | 2024</h2>
                <div className="card2" data-aos="fade-up">
                    <img src={web7} alt="siteImage" className='rectangle' data-aos="fade-up" />
                    <p className='content' data-aos="fade-down">This task management website allows users to add, edit, delete, and mark tasks as completed. Additionally, users can analyze completed tasks in the Analysis section. This platform ensures a seamless and efficient task management experience.
                    <br />
                    <b>Key Learning:</b> Handling tasks creation, completion and database calls.
                    <br/>
                    <b>Stack Used:</b> MERN, ContextApi, Javascript, CSS, HTML, Figma, Git, Hosting, ChatGPT.
                    </p>
                    
                </div>
                <div className="buttonCollection"><a href="https://task-master-by-gaurav.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/Task-Master-MERN-Stack.git"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>

            </section>
           
            <section>
                <h2 className='heading2'> ::  Admin Dashboard | 2024</h2>
                <div className="card1" data-aos="fade-up">

                    <p className='content' data-aos="fade-down">This is an admin dashboard for a social media application, designed to provide administrators with comprehensive insights and control over user and post data. This dashboard enables admins to view total users, total posts, and analyze user and post activity over recent days.
                    <br />
                    <b>Key Learning:</b> Table creation
                    <br/>
                    <b>Stack Used:</b> React.js, Javascript, Material UI, Figma, Git
                    </p>
                    <img src={admin} alt="siteImage" className='rectangle' />
                </div>
                <div className="buttonCollection"><a href="https://admin-dashboard-gaurav.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/Admin-Dashboard.git"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>
            </section>

            <section>
                <h2 className='heading2'> ::  Figma To Code | 2024</h2>
                <div className="card2" data-aos="fade-up">
                    <img src={figmatocode} alt="siteImage" className='rectangle' />
                    <p className='content' data-aos="fade-down">This is a basic landing page site developed using React.js, JavaScript, CSS, and HTML. The website was created by transforming a Figma design into code and is fully responsive across all screen sizes.
                    <br />
                    <b>Key Learning:</b> Figma to code conversion
                    <br/>
                    <b>Stack Used:</b> React.js, Javascript, CSS, HTML, Figma, Git.
                    </p>
                    
                </div>
                <div className="buttonCollection"><a href="https://landing-page-gaurav.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/Landing-page-Assessment.git"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>
            </section>

            <section>
                <h2 className='heading2'> ::  Workday Nutrition - Web Design | 2024</h2>
                <div className="card1" data-aos="fade-up">
                    <img src={workday} alt="admin" className='designRectangle'/>
                </div>
                <div className="buttonCollection"><a href="https://www.behance.net/gallery/202648309/Workday-Nutrition-Website"><button className='button'>Visit Design &nbsp;<RiExternalLinkLine /></button></a>
                </div>
            </section>

            <section>
                <h2 className='heading2'> ::  Learning Management System - Web Design | 2024</h2>
                <div className="card2" data-aos="fade-up">
                    <img src={lmsweb} alt="siteImage" className='designRectangle' />
                </div>
                <div className="buttonCollection"><a href="https://www.behance.net/gallery/204263823/Learning-Management-System-Dashboard"><button className='button'>Visit Design &nbsp;<RiExternalLinkLine /></button></a>
                </div>
            </section>
            <section>
                <h2 className='heading2'>:: Learning Management System: App Design | 2024</h2>
                <div className="card2" data-aos="fade-up">
                <img src={lmsapp} alt="siteImage" className='designRectangle' />
                </div>
                <a href="https://www.behance.net/gallery/204269265/Learning-Management-System-App"><button className='button'>Visit Design &nbsp;<RiExternalLinkLine /></button></a>

            </section>

            
            <h1 className='heading1'>Other Projects</h1>

            <section>
                <h2 className='heading2'>::  Employee Form | March 2024</h2>
                <div className="card1" data-aos="fade-up">

                    <p className='content' data-aos="fade-down">This website saves the data of employee of a company in the database. This is developed using MERN technologies, HTML, CSS, JavaScript,Netlify and Render with version control through Git.
                    <br/>
                    <b>Key Learning:</b> Frontend and Backend intergration, Hosting of servers
                    <br/>
                    <b>Tech Used:</b> MERN, Render, Netlify
                    </p>
                    <img src={web3} alt="siteImage" className='rectangle' />
                </div>
                <div className="buttonCollection"><a href="https://gaurav-employeeform.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/Employeeform---Backend.git"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>
            </section>

            <section>
                <h2 className='heading2'>::  Shopping Cart | Jan 2024 </h2>
                <div className="card2" data-aos="fade-up">
                    <img src={web2} alt="siteImage" className='rectangle' />
                    <p className='content' data-aos="fade-down">This one-page shopping cart website allows users to add, remove, and checkout items with real-time price updates.
                    <br/>
                    <b>Key Learning:</b> Implementation of centralize storage on web
                    <br/>
                    <b>Tech Used:</b>React.js, Redux, JS, CSS, HTML
                    </p>

                </div>
                <div className="buttonCollection"><a href="https://gaurav-shoppingcart.netlify.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href="https://github.com/gaurav-026/ShoppingCart--React-Redux.git"><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>

            </section>

            <section>
                <h2 className='heading2'>::  Crypto Application | Nov 2023</h2>
                <div className="card1" data-aos="fade-up">

                    <p className='content' data-aos="fade-down">This responsive and user-friendly
                        web application contains data about crypto-currencies with their prices. You can check the coins available in cryptocurrencies and the
                        different platforms where these currencies can be
                        exchanged. Also it have Login/Signup and Light-Dark mode functionality.
                        <br/>
                    <b>Key Learning:</b> Data fetching from API
                    <br/>
                    <b>Tech Used:</b>React.js, JS, CSS, HTML</p>
                    <img src={web1} alt="siteImage" className='rectangle' />
                </div>
                <div className="buttonCollection"><a href="https://crypto-app-gaurav-123410.vercel.app/"><button className='button'>Visit Website &nbsp;<RiExternalLinkLine /></button></a>
                <a href=" "><button className='button2'>GitHub Link&nbsp; <FaCode /></button></a></div>
               


            </section>

            <section>
                <h2 className='heading2'>:: Cakelaya Android App Design</h2>
                <div className="card1" data-aos="fade-up">
                    <img src={des1} alt="siteImage" className='designRectangle' />
                </div>
                <a href="https://www.behance.net/gallery/191259441/Cake-Delivery-App"><button className='button'>Visit Design &nbsp;<RiExternalLinkLine /></button></a>

            </section>

            <section>
                <h2 className='heading2'>::  EnergizeX: Health and Nutrition Product Website - Web Design </h2>
                <div className="card2" data-aos="fade-up">
                    <img src={des5} alt="siteImage" className='designRectangle' />
                </div>
                <a href="https://www.behance.net/gallery/197905255/EnergizeX-Health-Nutrition-Product-Website"><button className='button'>Visit Design &nbsp;<RiExternalLinkLine /></button></a>

            </section>
           
            <section>
                <h2 className='heading2'>::  Cakelaya Website Design </h2>
                <div className="card1" data-aos="fade-up">
                    <img src={des2} alt="siteImage" className='designRectangle' />

                </div>
                <a href="https://www.behance.net/gallery/191259975/Cake-Website"><button className='button'>Visit Design &nbsp;<RiExternalLinkLine /></button></a>

            </section>

        </>
    )
}

export default Worksamples
