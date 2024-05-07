import React from 'react'
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
const Profiles = () => {
    return (
        <>
            <Link to="https://drive.google.com/file/d/1Kx7pD2uZ6esbRApP4PzSo1VQ-oE5bxQD/view?usp=sharing" ><button type="button" className='downloadbtn' > <MdOutlineFileDownload /> Get Resume/CV</button></Link>
            <h1 className='heading1'>Profiles</h1>
            <section className='cardrow'>
                <Link to="https://www.linkedin.com/in/gaurav-chakrawarti-74567b224/">
                    <div className="profilecard">
                        <img className="circle" src={linkedin}></img>
                        {/* <p className='id'>Gaurav Chakrawarti</p> */}
                        <p className='id'>Linkedin</p>
                    </div>
                </Link>

                <Link to="https://www.freelancer.com/u/gaurav21426">
                    <div className="profilecard">
                        <img className="circle" src={freelance}></img>
                        {/* <p className='id'>Gaurav C.</p> */}
                        <p className='id'>Freelancer</p>
                    </div>
                </Link>

                <Link to="https://github.com/gaurav-026
">
                    <div className="profilecard">
                        <img className="circle" src={github}></img>
                        {/* <p className='id'>Gaurav-123410</p> */}
                        <p className='id'>GitHub</p>
                    </div>
                </Link>
                <Link to="https://auth.geeksforgeeks.org/user/gauravchakrawarti8">
                    <div className="profilecard">
                        <img className="circle" src={gfg}></img>
                        {/* <p className='id'>gauravchakrawarti8</p> */}
                        <p className='id'>GeeksforGeeks</p>
                    </div>
                </Link>

                <Link to="https://leetcode.com/gaurav_026/">
                    <div className="profilecard">
                        <img className="circle" src={leetcode}></img>
                        {/* <p className='id'>gaurav_026</p> */}
                        <p className='id'>Leetcode</p>
                    </div>
                </Link>

                <Link to="https://www.codechef.com/users/gaurav_026">
                    <div className="profilecard">
                        <img className="circle" src={codechef}></img>
                        {/* <p className='id'>gaurav_026</p> */}
                        <p className='id'>CodeChef</p>
                    </div>
                </Link>

                <Link to="https://www.instagram.com/gauravchakrawarti2003/
">
                    <div className="profilecard">
                        <img className="circle" src={instagram}></img>
                        {/* <p className='id'>gauravchakrawarti2003</p> */}
                        <p className='id'>Instagram</p>
                    </div>
                </Link>

                <Link to="https://www.behance.net/gauravchakraw">
                    <div className="profilecard">
                        <img className="circle" src={behance}></img>
                        {/* <p className='id'>gauravchakrawarti8</p> */}
                        <p className='id'>Behance</p>
                    </div>
                </Link>

            </section>


        </>
    )
}

export default Profiles
