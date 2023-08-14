/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import emptyProduct from './CompanyData';
import { getCompanies } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

interface Company {
  id: number;
  companyName: string;
  investment: number;
  businessType: string;
}

const CompanyTable: React.FC = () => {
  const companiesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [companyData, setCompanyData] = useState<Company[]>(emptyProduct);

  // const [comp, setComp] = useState<any[]>([])

  // const getCompanies = async() => {
  //   try{
  //     const response = await axios.get(`${baseUrl}/company/get-companies`)
  //     console.log('resppp ++++++', response)
  //     setComp(response.data.company)
  //   }catch(error){
  //     console.log(error)
  //   }
  
  // }

  // console.log("company", comp)

  // useEffect(() => {
  //   getCompanies()
  // }, [])
const dispatch = useDispatch() as unknown as any

const companies = useSelector((state:any) => state.company)


console.log(companies)

  useEffect(() => {
    dispatch(getCompanies())
  }, [])



  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDelete = (id: number) => {
    const updatedCompanyData = companyData.filter(company => company.id !== id);
    setCompanyData(updatedCompanyData);
  };

  const startIndex = (currentPage - 1) * companiesPerPage;
  const endIndex = startIndex + companiesPerPage;
  const companiesToDisplay = companies.slice(startIndex, endIndex);

  return (
    <div className='p-4 md:p-8 lg:p-16'>
      <h1 className='text-2xl md:text-3xl font-semibold text-center pb-4'>List of Companies</h1>
      <div className='overflow-x-auto'>
        <table className='w-full table-fixed'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='w-1/6 py-2 px-4 text-left'>ID</th>
              <th className='w-2/6 py-2 px-4 text-left'>Company Name</th>
              <th className='w-1/6 py-2 px-4 text-left'>Investment</th>
              <th className='w-1/6 py-2 px-4 text-left'>Business Type</th>
              <th className='w-1/6 py-2 px-4 text-right'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companiesToDisplay?.map((company:any) => (
              <tr key={company.id} className='border-b hover:bg-gray-100'>
                <td className='py-2 px-4'>{company.id}</td>
                <td className='py-2 px-4'>{company.companyName}</td>
                <td className='py-2 px-4'>{company.investment}</td>
                <td className='py-2 px-4'>{company.businessType}</td>
                <td className='py-2 px-4 text-right'>
                  <button
                    className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded'
                    onClick={() => handleDelete(company.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center mt-4'>
        <button
          className='mr-2 hover:underline'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &laquo; Previous
        </button>
        <button
          className='hover:underline'
          disabled={currentPage === Math.ceil(companyData.length / companiesPerPage)}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default CompanyTable;
