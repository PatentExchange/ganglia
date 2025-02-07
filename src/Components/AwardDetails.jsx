import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AwardDetails = ({ award, isVisible, close }) => {
  // const {state} = useLocation();
  // const {award} = state

  return (
    <div>
      <div className='absolute inset-0 bg-gray-900 opacity-70'></div>
      <div className='py-4 bg-white w-2/3 m-auto my-6 h-[90vh] relative overflow-y-auto'>
        <button className="absolute right-3 text-gray-800 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          onClick={close}>
          <FontAwesomeIcon icon={faClose} />
        </button>

        <div className='flex justify-center items-center p-5 flex-col pt-6' >
          <img src={award.certificateUrl} className='w-[70vw] md:w-[40vw] lg:w-[30vw]'></img>
          <div className='text-lg text-center'>
            <h1>{award.title}</h1>
            <h1 >Year : {award.year}</h1>
            <h1>{award.organization}</h1>
            <h1>{award.description}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AwardDetails