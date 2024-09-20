import React from 'react'
import "./../../style/footer.css";
import { NavLink, Link } from 'react-router-dom';


function Footer() {
  return (
    <>
        <div className='footer-container'>
            <div className="flex footer font-bold justify-around">
                <div className='text-white mt-20 mr-40'>
                    <h1 className='text-6xl'>Get Started</h1>
                    <p className=' w-64'>Download Thrifty for free on the iOS and Google Play stores,
                        or sign up online today.</p>
                </div>
                <div className='mt-20'>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type='button'>
                        <a href="" className="signup">
                            <NavLink to="/sign-up">Sign Up</NavLink>
                        </a>
                    </button>
                </div>
            </div>   
            <div className="ul text-white">
                    <ul className="linking">
                        <li className='font-bold'><a href="#">Home</a></li>
                        <li className='font-bold'><a href="#">About Us</a></li>
                        <li className='font-bold'><a href="#">Portfolio</a></li>
                        <li className='font-bold'><a href="#">Services</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Company Updates</a></li>
                        <li><a href="#">Client</a></li>
                        <li><a href="#">How To Cancel</a></li>
                        <li><a href="#">Bill Negotiation</a></li>
                        <li><a href="#">Spending Insights</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Credit Scores</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href=''>Manage Subscriptions</a></li>
                        <li><a href="#">Networth</a></li>
                        <li><a href="#">Autopilot Savings</a></li>
                        <li><a href="#">Spending Insights</a></li>
                        <li><a href="#">Budgeting</a></li>
                        <li><a href="#">Credit Scores</a></li>

                    </ul>
                </div>
                <p className="copy">©<i>2024 Thrifty. All Rights Reserved</i></p>
         </div>   
    </>
  )
}

export default Footer