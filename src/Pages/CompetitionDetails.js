import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import competitionData from '../Data/CompetitionData'
import { competitionContext } from '../App'

const CompetitionDetails = () => {

  const { deleteCompetition, competitionArray } = useContext(competitionContext);

  const {challenge} = useParams()

  const singleData = competitionArray.filter((element)=>{
   return element.challenge_name === challenge
  })

  const { img, id, details, level } = singleData[0] // Getting image, id and details


  const navigate = useNavigate();

  const handleDelete =   ()=>{
    deleteCompetition(id)
    navigate("/")
  }
  
  
  return (
 
  <div>

<div className="bg-white">
  <div className="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
         

        <li>
          <div className="flex items-center">
            <Link to="/" className="mr-2 text-sm font-medium text-gray-900">Competitions</Link>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li className="text-sm">
          <Link to='/' aria-current="page" className="font-medium text-gray-500 hover:text-gray-600 capitalize">{challenge}</Link>
        </li>
      </ol>
    </nav>

   
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-4xl h- lg:gap-x-8 lg:px-8 ">
        <img src={img} alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-contain object-center rounded-xl"/>
      
    </div>

    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl capitalize">{challenge}</h1>
        <span className='capitalize px-2  bg-green-500 text-white  rounded-lg'  >{level}</span>
      </div>

      <div className="bg-white p-4">
  

{/* EDIT BUTTON */}
<Link to={`/edit/${challenge}`} >
  <button className="inline-flex items-center px-4 py-2 mr-5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-md">
	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
	</svg>

	Edit
  </button>
</Link>

{/* DELETE BUTTON */}
  <button onClick={()=>handleDelete()} className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	</svg>

	Delete
  </button>
</div>

      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
        <div>

          <div className="space-y-6">
         <span className='text-xl font-semibold' >Details:<p className="text-base text-gray-900 pt-[-1rem]">{details}</p></span>
         
          </div>
        </div>

        
      </div>
    </div>
  </div>
</div>

    </div>

  )
}

export default CompetitionDetails