import React, { useEffect } from 'react'
import linkedin from '../assets/linkedinphoto.png'
import freelance from '../assets/freelancephoto.jpg'
import github from '../assets/gitphoto.png'
import gfg from '../assets/gfgphoto.png'
import leetcode from '../assets/leetcodephoto.png'
import codechef from '../assets/codechefphoto.jpg'
import instagram from '../assets/instagramphoto.jpg'
import behance from '../assets/behance.png'
import { Link } from 'react-router-dom'
import { MdOutlineFileDownload } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profiles = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return (
        <>
            <Link to="https://drive.google.com/file/d/1Kx7pD2uZ6esbRApP4PzSo1VQ-oE5bxQD/view?usp=sharing" ><button type="button" className='downloadbtn' > <MdOutlineFileDownload size={20} />&nbsp; Get Resume</button></Link>
            <h1 className='heading1'>Profiles</h1>
            <section className='cardrow'>
                <Link to="https://www.linkedin.com/in/gaurav-chakrawarti-74567b224/">
                    <div className="profilecard" data-aos="fade-right">
                        <img className="circle" src={linkedin} alt='profilelogo'></img>
                       
                        <p className='id'>Linkedin</p>
                    </div>
                </Link>
                
                <Link to="https://github.com/gaurav-026
">
                    <div className="profilecard" data-aos="fade-right">
                        <img className="circle" src={github} alt='profilelogo'></img>
                     
                        <p className='id'>GitHub</p>
                    </div>
                </Link>

                <Link to="https://leetcode.com/gaurav_026/">
                    <div className="profilecard" data-aos="fade-right">
                        <img className="circle" src={leetcode} alt='profilelogo'></img>
                     
                        <p className='id'>Leetcode</p>
                    </div>
                </Link>
                
                <Link to="https://www.behance.net/gauravchakraw">
                    <div className="profilecard" data-aos="fade-right">
                        <img className="circle" src={behance} alt='profilelogo'></img>
                        <p className='id'>Behance</p>
                    </div>
                </Link>

                <Link to="https://auth.geeksforgeeks.org/user/gauravchakrawarti8">
                    <div className="profilecard" data-aos="fade-right">
                        <img className="circle" src={gfg} alt='profilelogo'></img>
                       
                        <p className='id'>GeeksforGeeks</p>
                    </div>
                </Link>

                <Link to="https://www.codechef.com/users/gaurav_026">
                    <div className="profilecard" data-aos="fade-right">
                        <img className="circle" src={codechef} alt='profilelogo'></img>
                       
                        <p className='id'>CodeChef</p>
                    </div>
                </Link>

                <Link to="https://www.freelancer.com/u/gaurav21426">
                    <div className="profilecard" data-aos="fade-right">
                        <img className="circle" src={freelance} alt='profilelogo'></img>
                    
                        <p className='id'>Freelancer</p>
                    </div>
                </Link>     
                
                <Link to="https://www.instagram.com/gauravchakrawarti2003/
">
                    <div className="profilecard" data-aos="fade-right">
                        <img className="circle" src={instagram} alt='profilelogo'></img>
                       
                        <p className='id'>Instagram</p>
                    </div>
                </Link>
                


            </section>


        </>
    )
}

export default Profiles;
