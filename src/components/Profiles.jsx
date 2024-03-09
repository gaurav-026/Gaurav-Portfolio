import React from 'react'
import linkedin from '../assets/linkedinphoto.png'
import freelance from '../assets/freelancephoto.jpg'
import github from '../assets/gitphoto.png'
import gfg from '../assets/gfgphoto.png'
import leetcode from '../assets/leetcodephoto.png'
import codechef from '../assets/codechefphoto.jpg'
import instagram from '../assets/instagramphoto.jpg'
import behance from '../assets/behance.png'
const Profiles = () => {
    return (
        <>
            <a href="https://drive.google.com/file/d/1Kx7pD2uZ6esbRApP4PzSo1VQ-oE5bxQD/view?usp=sharing" ><button type="button" className='downloadbtn' >Get Resume/CV</button></a>
            <h1 className='heading1'>Profiles</h1>
            <section className='cardrow'>
                <a href="https://www.linkedin.com/in/gaurav-chakrawarti-74567b224/">
                    <div className="profilecard">
                        <img className="circle" src={linkedin}></img>
                        {/* <p className='id'>Gaurav Chakrawarti</p> */}
                        <p className='id'>Linkedin</p>
                    </div>
                </a>

                <a href="https://www.freelancer.com/u/gaurav21426">
                    <div className="profilecard">
                        <img className="circle" src={freelance}></img>
                        {/* <p className='id'>Gaurav C.</p> */}
                        <p className='id'>Freelancer</p>
                    </div>
                </a>

                <a href="https://github.com/Gaurav-123410
">
                    <div className="profilecard">
                        <img className="circle" src={github}></img>
                        {/* <p className='id'>Gaurav-123410</p> */}
                        <p className='id'>GitHub</p>
                    </div>
                </a>
                <a href="https://auth.geeksforgeeks.org/user/gauravchakrawarti8">
                    <div className="profilecard">
                        <img className="circle" src={gfg}></img>
                        {/* <p className='id'>gauravchakrawarti8</p> */}
                        <p className='id'>GeeksforGeeks</p>
                    </div>
                </a>

                <a href="https://leetcode.com/gaurav_026/">
                    <div className="profilecard">
                        <img className="circle" src={leetcode}></img>
                        {/* <p className='id'>gaurav_026</p> */}
                        <p className='id'>Leetcode</p>
                    </div>
                </a>

                <a href="https://www.codechef.com/users/gaurav_026">
                    <div className="profilecard">
                        <img className="circle" src={codechef}></img>
                        {/* <p className='id'>gaurav_026</p> */}
                        <p className='id'>CodeChef</p>
                    </div>
                </a>

                <a href="https://www.instagram.com/gauravchakrawarti2003/
">
                    <div className="profilecard">
                        <img className="circle" src={instagram}></img>
                        {/* <p className='id'>gauravchakrawarti2003</p> */}
                        <p className='id'>Instagram</p>
                    </div>
                </a>

                <a href="https://www.behance.net/gauravchakraw">
                    <div className="profilecard">
                        <img className="circle" src={behance}></img>
                        {/* <p className='id'>gauravchakrawarti8</p> */}
                        <p className='id'>Behance</p>
                    </div>
                </a>

            </section>


        </>
    )
}

export default Profiles
