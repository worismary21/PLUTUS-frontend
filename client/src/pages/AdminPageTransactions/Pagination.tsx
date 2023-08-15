import React from 'react'

function Pagination({ totalTransactions, postsPerPage, setCurrentPage, currentPage }) {
    const pages: any[] = [];
    const maxVisiblePages = 3
  
    for (let i = 1; i <= Math.ceil(totalTransactions / postsPerPage); i++) {
      pages.push(i);
    }
  
    const visiblePageNumbers = pages.slice(
      Math.max(currentPage - 1, 0),
      Math.min(currentPage - 1 + maxVisiblePages, pages.length)
    );
  
    const goToPage = (page) => {
      setCurrentPage(page);
    };
  
    const goToPrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const goToNextPage = () => {
      if (currentPage < Math.ceil(totalTransactions / postsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    };

    const handleStartingClick = () => {
        setCurrentPage(1)
    }

    const handleEndClick = () => {
        setCurrentPage(pages[pages.length-1])
    }
  
    return (
      <div className="flex w-20 justify-center">
        {currentPage > 1 && (
          <button className = "bg-blue-500 px-4 rounded-2xl flex justify-center items-center mx-4 mt-4 hover:bg-blue-700 text-white tracking-wide" onClick={goToPrevPage}>Prev</button>
        )}
  
        <button className = "mt-4 text-lg hover:text-red-700" onClick = {() => handleStartingClick()}>{`${pages[0]}>>`}</button>
  
  
        {visiblePageNumbers.map((page, index) => (
          <button
            className={`rounded-2xl px-4 py-2 mx-1 ${
              page === currentPage
                ? 'bg-red-700 text-white'
                : 'bg-blue-500 hover:bg-blue-700 text-white'
            }`}
            key={index}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        ))}

        <button className = "mt-4 text-lg hover:text-red-700" onClick = {() => handleEndClick()}>{`<<${pages[pages.length - 1]}`}</button>
        
  
        {currentPage < Math.ceil(totalTransactions / postsPerPage) && (
          <button className = "bg-blue-500 px-4 rounded-2xl flex justify-center items-center mx-4 mt-4 hover:bg-blue-700 text-white tracking-wide" onClick={goToNextPage}>Next</button>
        )}
      </div>
    );
  }
  
  export default Pagination

// function Pagination({totalTransactions, postsPerPage, setCurrentPage, currentPage}) {
//     const pages:any = []
//     const maxVisiblePages = 3

//     for(let i = 1; i <= Math.ceil(totalTransactions/postsPerPage); i++){
//         pages.push(i)
//     }

    // const visiblePageNumbers = pages.slice(0, maxVisiblePages)

    // const visiblePageNumbers = pages.slice(
    //     (currentPage - 1) * maxVisiblePages,
    //     currentPage * maxVisiblePages
    //   );

    // const remainingPages = pages.slice(currentPage * maxVisiblePages)
    // console.log(visiblePageNumbers)

    // const visiblePageNumbers = pages.slice(0, currentPage * maxVisiblePages);
    // const remainingPages = pages.slice(currentPage * maxVisiblePages);

    // const goToPage = (page) => {
    //     setCurrentPage(page);
    //   };
    
    //   const goToPrevPage = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1);
    //       }
    //   };
    
    //   const goToNextPage = () => {
    //     if (currentPage < Math.ceil(totalTransactions / postsPerPage)) {
    //         setCurrentPage(currentPage + 1);
    //       }
    //   };

//     const visiblePageNumbers = pages.slice(
//         Math.max(currentPage - 1, 0),
//         Math.min(currentPage - 1 + maxVisiblePages, pages.length)
//       );
    
//       const goToPage = (page) => {
//         setCurrentPage(page);
//       };
    
//       const goToPrevPage = () => {
//         if (currentPage > 1) {
//           setCurrentPage(currentPage - 1);
//         }
//       };
    
//       const goToNextPage = () => {
//         if (currentPage < Math.ceil(totalTransactions / postsPerPage)) {
//           setCurrentPage(currentPage + 1);
//         }
//       };
//  
//     {/* {currentPage < pages.length - 1 && (
 //         <span>...</span>
   //     )} */}


//   return (
//     <div className='flex w-20 justify-center'>

//     {currentPage > 1 && (
//         <button onClick={goToPrevPage}>Prev</button>
//       )}

//         {
//             visiblePageNumbers.map((page, index) => {
//                 return <button className={`rounded-2xl px-4 py-2 mx-1 ${
//                     page === currentPage
//                       ? 'bg-red-700 text-white'
//                       : 'bg-green-500 hover:bg-green-700 text-white'
//                   }`}
//                   key={index}
//                   onClick={() => goToPage(page)}>
//                     {page}        
//                     </button>
//             })
//         }

//     {currentPage < Math.ceil(totalTransactions / postsPerPage) && (
//         <button onClick={goToNextPage}>Next</button>
//       )}

//         {/* {remainingPages.length > 0 && (
//         <span>...</span>
//       )}

//     {currentPage > maxVisiblePages && (
//         <button onClick={goToPrevPage}>Prev</button>
//       )}

//       {remainingPages.length > 0 && (
//         <button onClick={goToNextPage}>Next</button>
//       )} */}
//     </div>
//   )
// }
 