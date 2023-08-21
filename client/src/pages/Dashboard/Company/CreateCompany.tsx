/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createCompany } from "../../../redux/action";

interface RegisterComponent {
  companyName: string;
  company_description: string;
  email: string;
  password: string;
  businessType: string;
  roi: string;
  investment_category: string;
  investment_description: string;
  duration: string;
  min_investment_amount: string;
  max_investment_amount: string;
}
const CreateCompany = () => {
  const [formData, setFormData] = useState<RegisterComponent>({
    companyName: "",
    company_description: "",
    email: "",
    password: "",
    businessType: "",
    roi: "",
    investment_category: "",
    investment_description: "",
    duration: "",
    min_investment_amount: "",
    max_investment_amount: "",
  });

  const [cPassword, setCPassword] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   const handleChange = (e: unknown) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  const dispatch = useDispatch() as unknown as any;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== cPassword) {
      toast.error("Invalid Password");
    } else {
      dispatch(createCompany(formData));
    }
  };

  return (
    <div className="text-center bg-[#000000A5] fixed left-[0%] top-[0%] w-[100%] z-[25] flex justify-center items-start ">
      <div className="bg-[#fff] w-[60%] rounded-3xl ">
        <div>
          <h1 className="text-blue-500 text-4xl mt-10 font-bold">
            Company Registration
          </h1>
          <p className="mt-5 text-2xl font-bold">
            Input Company details below;
          </p>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-5 pl-[15%]">
            <input
              type="text"
              name={"companyName"}
              value={formData.companyName}
              onChange={handleChange}
              required
              placeholder="Company Name"
              className="w-[40%] rounded-lg mt-5 text-lg"
            />{" "}
            <input
              type="text"
              name={"company_description"}
              value={formData.company_description}
              onChange={handleChange}
              required
              placeholder="Company Description"
              className="w-[40%] rounded-lg mt-5 text-lg"
            />{" "}
            <input
              type="text"
              name={"email"}
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-[40%] rounded-lg mt-5 text-lg"
            />{" "}
            <input
              type="text"
              name={"businessType"}
              value={formData.businessType}
              onChange={handleChange}
              required
              placeholder="Business Type"
              className="w-[40%] rounded-lg mt-5 text-lg"
            />{" "}
            <input
              type="password"
              name={"password"}
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-[40%] rounded-lg mt-5 text-lg"
            />{" "}
            <input
              type="password"
              name={"cPassword"}
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
              required
              placeholder="Confirm Password"
              className="w-[40%] rounded-lg mt-5 text-lg"
            />{" "}
            <input
              type="text"
              name={"roi"}
              value={formData.roi}
              onChange={handleChange}
              required
              placeholder="R.O.I"
              className="w-[20%] rounded-lg mt-5 text-lg"
            />
            <input
              type="text"
              name={"investment_category"}
              value={formData.investment_category}
              onChange={handleChange}
              required
              placeholder="Investment Category"
              className="w-[40%] rounded-lg mt-5 text-lg ml-[20%]"
            />{" "}
            <input
              type="text"
              name={"investment_description"}
              value={formData.investment_description}
              onChange={handleChange}
              required
              placeholder="Investment Description"
              className="w-[40%] rounded-lg mt-5 text-lg"
            />{" "}
            <input
              type="text"
              name={"duration"}
              value={formData.duration}
              onChange={handleChange}
              required
              placeholder="Duration"
              className="w-[40%] rounded-lg mt-5 text-lg"
            />{" "}
            <input
              type="text"
              name={"min_investment_amount"}
              value={formData.min_investment_amount}
              onChange={handleChange}
              required
              placeholder="Minimum Investment Amount"
              className="w-[40%] rounded-lg mt-5 text-lg"
            />{" "}
            <input
              type="text"
              name={"max_investment_amount"}
              value={formData.max_investment_amount}
              onChange={handleChange}
              required
              placeholder="Maximum Investment Amount"
              className="w-[40%] rounded-lg mt-5 text-lg"
            />{" "}
          </div>
          <div>
            <button
              type="submit"
              className="w-[40%] rounded-lg mt-5 bg-black h-[8vh] text-white hover:bg-blue-500 text-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCompany;
