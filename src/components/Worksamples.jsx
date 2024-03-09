import React from 'react'
import web1 from '../assets/web1.png'
import web2 from '../assets/web2.png'
import web3 from '../assets/web3.png'
import web4 from '../assets/web4.png'
import web5 from '../assets/web5.png'
import des1 from '../assets/des1.png'
import des2 from '../assets/des2.png'
import des3 from '../assets/des3.png'
import des4 from '../assets/des4.png'
const Worksamples = () => {
    return (
        <>
            <h1 className='heading1'>Front-End Websites</h1>
            <section>
                <h2 className='heading2'>1. Crypto Application - Website</h2>
                <div className="card1">

                    <p className='content'>This responsive and user-friendly
                        web application contains data about crypto-currencies with their prices. You can check the coins available in cryptocurrencies and the
                        different platforms where these currencies can be
                        exchanged. Also it have Login/Signup and Light-Dark mode functionality.
                        It is developed using React.js, HTML, CSS and JS.</p>
                    <img src={web1} alt="Image" className='rectangle' />
                </div>
                <a href="https://crypto-app-gaurav-123410.vercel.app/"><button className='button'>Visit Website</button></a>
                

            </section>
            {/* <section>
                <h2 className='heading2'>2. News Monkey - News Website</h2>
                <div className="card2">
                <img src={web2} alt="Image" className='rectangle' />
                    <p className='content'>News Monkey is a news provider user-friendly website that gives the latest news about Health, Science, Technology, Entertainment, Sports, etc. User can get latest news according to their choices. This website is developed in React.js and with the integration of Bootstrap and News API. </p>
                    
                </div>
                <button className='button'>Visit Website</button>

            </section> */}
            <section>
                <h2 className='heading2'>2. Personal Portfolio - Website</h2>
                <div className="card2">
                <img src={web3} alt="Image" className='rectangle' />
                    <p className='content'>It is a proper user-friend responsive portfolio website for Web, Tablet, and Mobile. I have designed it using Figma and developed it in React.js. It includes all the information about my Qualifications, Current Position, Skills, Previous Works, and all the tech-related profiles.</p>
                    
                </div>
                <button className='button'>Visit Website</button>

            </section>
            <section>
                <h2 className='heading2'>3. Video Player - Website</h2>
                <div className="card1">
                
                    <p className='content'>It includes simple landing page which consists of sliders and some content part. I have implemented a side slider menu section where Home, Videos, Login/Sign up and Upload videos option are available. This website is developed in React.js, HTML and with the integration of Chakra UI. </p>
                    <img src={web2} alt="Image" className='rectangle' />
                    
                </div>
                <a href="https://youtube-vanced.vercel.app/"><button className='button'>Visit Website</button></a>

            </section>
            <section>
                <h2 className='heading2'>4. Calculator - Website</h2>
                <div className="card2">
                <img src={web4} alt="Image" className='rectangle' />
                    <p className='content'>It includes simple landing page which consists of sliders and some content part. I have implemented a side slider menu section where Home, Videos, Login/Sign up and Upload videos option are available. This website is developed in React.js, HTML and with the integration of Chakra UI. </p>
                </div>
                <a href="https://calculator-website-three.vercel.app/"><button className='button'>Visit Website</button></a>
            </section>
            <section>
                <h2 className='heading2'>5. Snake Game - Website</h2>
                <div className="card1">
                    <p className='content'>It is a simple Snake game and rules are same as previous. It is built using HTML,CSS and Javascript. It have developed this game while learning Web-development from CodeWithHarry. </p>
                <img src={web5} alt="Image" className='rectangle' />
                </div>
                <a href="https://snake-game-jet-gamma.vercel.app/"><button className='button'>Visit Website</button></a>
            </section>
            <h1 className='heading1'>UI/UX Designs</h1>
            <section>
                <h2 className='heading2'>1. Cakelaya Android App Design</h2>
                <div className="card1">

                    <p className='content'>It is a Cake Delivery App design. I have designed this UI for a startup company while working as a part-time UI/UX Intern.  I have used illusations, sliders, icons and a lot of research too for this project. It has around 30-35 screens and designed within 20 days.</p>
                    <img src={des1} alt="Image" className='rectangle' />
                </div>
                <a href="https://www.behance.net/gallery/191259441/Cake-Delivery-App"><button className='button'>Visit Design</button></a>

            </section>
            <section>
                <h2 className='heading2'>2. Cakelaya Website </h2>
                <div className="card2">
                <img src={des2} alt="Image" className='rectangle' />
                    <p className='content'>It is the Web design of  Cake Delivery Application. I have designed this UI for a startup company while working as a part-time UI/UX Intern. It is an attractive and responsive design for Web, Tablet and Mobile view. It includes some pages like Home, About, Terms & Conditions and Privacy Policy.</p>
                    
                </div>
                <a href="https://www.behance.net/gallery/191259975/Cake-Website"><button className='button'>Visit Website</button></a>

            </section>
            <section>
                <h2 className='heading2'>3. Social Media App</h2>
                <div className="card1">

                    <p className='content'>This is a social media app like Instagram where users can connect, talk with each other through chat,call,video call and can watch reels and posts. I have designed this app for a freelance client. These are around 15 mobile screens.</p>
                    <img src={des3} alt="Image" className='rectangle' />
                </div>
                <a href="https://www.behance.net/gallery/191250435/Social-Media-App"><button className='button'>Visit Design</button></a>
            </section>
            <section>
                <h2 className='heading2'>4. Admin Dashboard</h2>
                <div className="card2">

                    <img src={des4} alt="Image" className='rectangle' />
                    <p className='content'>This is a Admin Dashboard for a social media app. It includes the data anlaysis of the app and also a social network for admins. They can connect and post their stories, feeds etc. I have designed this app for a freelance client. These are around 5 web screens.</p>
                </div>
                <a href="https://www.behance.net/gallery/191881739/Admin-Panel"><button className='button'>Visit Design</button></a>
            </section>
        </>
    )
}

export default Worksamples
