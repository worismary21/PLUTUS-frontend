/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import share from "./assets/share.svg";
import transaction from "./assets/transaction.svg";
import png from "./assets/Png.png"
import icons from "./assets/icons8.png"
import { transferFunds } from "../../../redux/action";
import { useDispatch } from "react-redux";

const Checking = () => {
 const [formData, setFormData] = useState({
    accountNumber:"",
    amount:0,
    transfer_purpose:"",
    beneficiary_name:"",
    beneficiary_email:"",
    payer_reference:"",
    information_for_beneficiary:""
  })

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch() as unknown as any

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
//   console.log(formData);

  const handleSubmit = async(e:any) => {
    e.preventDefault()
    dispatch(transferFunds(formData))

  }
  return (
    <div className="flex ml-[15%] md:ml-[7%] lg:ml-[5%] pr-[5%]">
    <div className=" flex flex-col items-center md:w-[340px] ">
      <h3 className="mb-5 font-bold text-lg ">Select Payer</h3>
     <div className="relative ">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-slate-900 p-4 w-full items-center flex 
        justify-between font-bold text-white tracking-wider 
        border-4 border-transparent active:border-white duration-300 
        active:text-white"
      >
        CheckingAccount
        {!isOpen ? (
          <AiOutlineCaretDown className="h-3" />
        ) : (
          <AiOutlineCaretUp className="h-3" />
        )}
      </button>
      {isOpen && (
        <div className="bg-gray-200 absolute top-20 flex flex-col items-start  p-2 w-full">
          <div
            className=" hover:bg-slate-500 cursor-pointer rounded-r-lg hover:border-l-white border-l-4
                border-l-transparent"
          >
            <h3 className="font-bold text-gray">
              <Link to="/dashboard/transfer">Checking Account</Link>
            </h3>
          </div>
          <div
            className=" hover:bg-slate-500 cursor-pointer rounded-r-lg hover:border-l-white border-l-4
                border-l-transparent"
          >
            <h3 className="font-bold text-gray">
              <Link to="/dashboard/transfer/savings">Savings Account</Link>
            </h3>
          </div>
        </div>
      )}
      </div>
      <div className="bg-slate-900 mt-7  ">
        <div className="m-5">
          <h3 className="text-white font-bold">Checking Account</h3>
          <p className="text-white text-xs mt-7">Balance</p>
          <h1 className="text-teal-200 text-3xl mt-3">USD 10,000.00</h1>
        </div>
        <div className="border-solid hidden lg:block border-2 border-gray-600 w-[300px] m-5 mt-7"></div>
        <div className="m-5">
          <p className="text-white text-xs  mt-7">IBAN</p>
          <h3 className="text-white mt-2">AB11 0000 0000 1111 1111</h3>
          <p className="text-white text-xs  mt-5">Account Owner</p>
          <h3 className="text-white mt-2">Nicola Rich</h3>
        </div>
        <div className="bg-purple-300 flex h-[50px] items-center justify-center">
          <img className="w-[20px] h-[20px] ml-24" src={share} alt="share" />
          <span className="text-sm ml-2">Share IBAN</span>
        </div>
        <div className="bg-red-200 flex h-[50px] items-center justify-center">
          <img
            className="w-[20px] h-[20px] ml-20"
            src={transaction}
            alt="share"
          />
          <span className="text-sm ml-3">Request Payment</span>
        </div>
        
      </div>
      <div className="bg-slate-200 mt-7">
        <div className="flex w-full justify-between items-center mt-7">
        <h3 className="ml-7 font-bold text-sm">Saved Beneficiares</h3>
        <p className="ml-20 lg:ml-28 md:ml-28 text-xs">View all</p>
        </div>
        <div className="flex mb-5" >
            <div className="mt-3 items-center text-center" >
                <img className="w-[38px] h-[38px] ml-6" src={icons} alt="icon" />
                <p className="text-xs mt-2">Add</p>
                <p className="text-xs">New</p>
            </div>
            <div className="mt-3 items-center text-center">
                <img className="w-[38px] h-[38px] ml-6" src={png} alt="icon" />
                <p className="text-xs mt-2">Maria</p>
                <p className="text-xs">Purple</p>
            </div>
            <div className="mt-3 items-center text-center">
                <img className="w-[38px] h-[38px] ml-6" src={png} alt="icon" />
                <p className="text-xs mt-2">Maria</p>
                <p className="text-xs">Purple</p>
            </div>
            <div className="mt-3 items-center text-center">
                <img className="w-[38px] h-[38px] ml-6" src={png} alt="icon" />
                <p className="text-xs mt-2">Maria</p>
                <p className="text-xs">Purple</p>
            </div>
        </div>
        
        </div>
        <div className="mt-10 lg:hidden md:hidden">
      <h3 className="mb-5 font-bold text-lg">Transfer to</h3>
        <span className="text-sm">Own account</span>
        <span className="text-sm ml-5">Other account</span>
        <div className="border-solid border-2 border-gray-100 mt-7"></div>


   
        <form action="" onSubmit={handleSubmit} className="flex flex-col mt-7">
            
            <p className="text-sm">Beneficiary</p>
            
          <input 
            className="mt-6 w-full"
            type="text"
            name={"accountNumber"}
            onChange={handleChange}
            value={formData.accountNumber}
            required
            placeholder="IBAN *"
          />
          <input
          className="mt-6 w-full"
            type="text"
            name={"amount"}
            onChange={handleChange}
            value={formData.amount}
            required
            placeholder="Amount *"
          />

<p className="text-sm mt-14">Other data</p>

        <input
          className="mt-6 w-full lg:hidden"
            type="text"
            name={"transfer_purpose"}
            onChange={handleChange}
            value={formData.transfer_purpose}
            placeholder="Transfer purpose"
          />
           <input
          className="mt-6 w-full lg:hidden"
            type="text"
            name={"beneficiary_name"}
            onChange={handleChange}
            value={formData.beneficiary_name}
            placeholder="Beneficiary's name"
          />
           <input
          className="mt-6 w-full lg:hidden"
            type="text"
            name={"beneficiary_email"}
            onChange={handleChange}
            value={formData.beneficiary_email}
            placeholder="Beneficiary's email"
          />
           <input
          className="mt-6 w-full lg:hidden"
            type="text"
            name={"payer_reference"}
            onChange={handleChange}
            value={formData.payer_reference}
            placeholder="Payer's reference"
          />

          <input
          className="mt-6 w-full"
            type="text"
            name={"information_for_beneficiary"}
            onChange={handleChange}
            value={formData.information_for_beneficiary}
            placeholder="Information for beneficiary"
          />
          <button type="submit" className=" block bg-gray-950 mt-8 text-white text-xs 
          h-[50px] rounded-md" >
            {" "}
            Continue
          </button>
          
        </form> 

        


    </div>
    </div>
    <div className="ml-10 lg:w-[680px]  hidden lg:block md:block">
      <h3 className="mb-5 font-bold text-lg">Transfer to</h3>
        <span className="text-sm">Own account</span>
        <span className="text-sm ml-5">Other account</span>
        <div className="border-solid border-2 border-gray-100 mt-3"></div>

        <form action="" onSubmit={handleSubmit} className="flex flex-col mt-7">
            
              <p className="text-sm">Beneficiary</p>
              
            <input 
            className="mt-6 w-full"
              type="text"
              name={"accountNumber"}
              onChange={handleChange}
              value={formData.accountNumber}
              required
              placeholder="IBAN *"
            />
            <input
            className="mt-6 w-full"
              type="text"
              name={"amount"}
              onChange={handleChange}
              value={formData.amount}
              required
              placeholder="Amount *"
            />
         

<p className="text-sm mt-14">Other data</p>

          <input
            className="mt-6 w-full lg:hidden"
              type="text"
              name={"transfer_purpose"}
              onChange={handleChange}
              value={formData.transfer_purpose}
              placeholder="Transfer purpose"
            />
             <input
            className="mt-6 w-full lg:hidden"
              type="text"
              name={"beneficiary_name"}
              onChange={handleChange}
              value={formData.beneficiary_name}
              placeholder="Beneficiary's name"
            />
             <input
            className="mt-6 w-full lg:hidden"
              type="text"
              name={"beneficiary_email"}
              onChange={handleChange}
              value={formData.beneficiary_email}
              placeholder="Beneficiary's email"
            />
             <input
            className="mt-6 w-full lg:hidden"
              type="text"
              name={"payer_reference"}
              onChange={handleChange}
              value={formData.payer_reference}
              placeholder="Payer's reference"
            />



           <div className="md:hidden lg:block">
            <input
            className="mt-5 w-[322px]"
              type="text"
              name={"transfer_purpose"}
              onChange={handleChange}
              value={formData.transfer_purpose}
              placeholder="Transfer purpose"
            />
       
            <input
            className="w-[322px] ml-5"
              type="text"
              name={"beneficiary_name"}
              onChange={handleChange}
              value={formData.beneficiary_name}
              placeholder="Beneficiary's name"
            />
            </div>
            <div className="md:hidden lg:block">
            <input
            className="mt-5 w-[322px]"
              type="text"
              name={"beneficiary_email"}
              onChange={handleChange}
              value={formData.beneficiary_email}
              placeholder="Beneficiary's email"
            />
            <input
            className="w-[322px] ml-5"
              type="text"
              name={"payer_reference"}
              onChange={handleChange}
              value={formData.payer_reference}
              placeholder="Payer's reference"
            />
            </div>
            <input
            className="mt-6 w-full"
              type="text"
              name={"information_for_beneficiary"}
              onChange={handleChange}
              value={formData.information_for_beneficiary}
              placeholder="Information for beneficiary"
            />
            <button type="submit" className=" block bg-gray-950 mt-8 text-white text-xs 
            h-[50px] rounded-md" >
              {" "}
              Continue
            </button>
            
        </form>



      

    </div>
  
    </div>
  );
};

export default Checking;
