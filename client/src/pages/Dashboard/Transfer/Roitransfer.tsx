import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { roiTransfer } from "../../../redux/action"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Roitransfer() {
    const [accountNumber, setAccountNumber] = useState("")

        const dispatch = useDispatch() as unknown as any

        const handleChange = (e: any) => {
            
                setAccountNumber(e.target.value)
          };
          console.log(accountNumber)

          const handleSubmit = async(e:any) => {
            e.preventDefault()
            dispatch(roiTransfer(accountNumber))
          }

  return (
    <>
    <div className = "text-center mt-8 text-2xl"> Return On Investment</div>
    <div className='lg:flex sm:flex-wrap'>
    <div className = "lg:w-1/2 sm:w-full text-justify leading-7">
        <p className = "text-red-800"><strong className = "sm:ml-28">Investor Return on Investment (ROI) Policy</strong></p>
        <p>Welcome to <span className = "text-blue-800">Plutus!</span></p>
        <p className = "text-sm"><span className = "text-blue-800"><strong>Our Commitment to Transparency and Accountability</strong></span><br/> At Plutus, we take pride in our dedication to transparency, open communication, and accountability. As part of this commitment, we want to outline our policy for providing Return on Investment (ROI) information to our valued investors. 
        <br/><span className = "text-blue-800"><strong>Timely and Accurate ROI Updates</strong></span><br/> We understand that staying informed about your investment's performance is crucial. To ensure that you have access to the latest information, we provide regular updates on the status of your investment and its corresponding ROI. These updates will be delivered as per the terms outlined in your investment agreement.
        <br/><span className = "text-blue-800"><strong>Secure and Confidential Delivery </strong></span><br/>Your trust is paramount to us, and we treat your investment information with the utmost care. Our ROI updates are delivered through secure and confidential channels to ensure your data's privacy. Whether it's via email, our secure online portal, or other designated communication methods, you can trust that your investment details are handled with diligence.
        <br/><span className = "text-blue-800"><strong>Respecting Your Privacy</strong></span><br/>Your financial information is treated with the highest level of privacy and confidentiality. We adhere to industry best practices to safeguard your data against unauthorized access, ensuring that your investment-related information remains secure.
        <br/><span className = "text-blue-800"><strong>Contact Us</strong></span><br/>Should you have any inquiries, concerns, or requests related to your ROI updates, our investor relations team is here to help. Feel free to reach out to us at <span className = "text-red-800">customerservice@plutus.com.</span> We value your partnership and are committed to providing the support you need. At Plutus, we believe that open and transparent communication is the foundation of a successful investor relationship. Our ROI policy underscores our dedication to keeping you informed and confident in your investment journey.
        <br/>Thank you for choosing Plutus as your investment partner. We look forward to achieving mutual success together.
        </p>
    </div>
    <div className = "lg:w-1/2 sm:w-full mt-32">
    <form action="" onSubmit = {handleSubmit} className="lg:pl-40 sm:pl-20 w-1/2">
          <input 
            className="mt-6 w-96"
            type="text"
            name="accountNumber"
            value={accountNumber}
            required
            placeholder="Type account number"
            onChange = {handleChange}
          />

          <button type="submit" className=" block bg-gray-950 mt-8 text-white text-xs 
          h-[50px] rounded-md w-96" >
            {" "}
            Transfer
          </button>
          
    </form> 
    <p className="lg:pl-32 sm:pl-16 py-16 w-auto text-red-800 text-justify"><strong>Notice:</strong><br/> Transferring to investor means you are confirming that all terms and conditions have been met; the duraion of investment has elapsed and the investor is eligible for this transfer.</p>
    </div>
    </div>
    </>
  )
}

export default Roitransfer

