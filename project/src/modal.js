import React from 'react'
// import UseModal from './useModels'


function Modal(){
   const [openModal , setOpenModal]=React.useState(false)
   return(
      <div className='bg-white m-32  text-xl'>

         {/* <h1>Hey click here to get a modal</h1>
         <button className='bg-blue-400 p-2 rounded-lg ' onClick={()=>{setOpenModal(true)}}>Click here</button>
         {openModal && <UseModal close={setOpenModal}/>} */}
      </div>
   )
}

export default Modal 