import React from 'react'

function Aboutus() {
    return (
        <>
        

        <div className=''>
        <h1 className='text-4xl text-white  mt-10 ml-10 '>ABOUT  <strong className='text-yellow-400'>US</strong></h1>
        <br />
        <br />
        

        <div className='grid xl:grid-cols-3 lg:grid-rows-3 gap-10'>
         <div>

         <h1 className=' text-2xl ml-10 shadow-md '>PERSONAL INFO</h1>
         <br />
            <div className='flex'>
                <div className='grid ml-10 gap-5 '>

               <p><strong className='text-gray-600'>First Name: </strong>Naman</p>
               <p><strong className='text-gray-600'>Age:</strong> 22</p>
               <p><strong className='text-gray-600'>Phone no.:</strong>8103581323</p>
               <p><strong className='text-gray-600'>DOB:</strong>24/09/2001</p>
                </div>
                <div className='grid ml-10 gap-5 '>

               <p><strong className='text-gray-600'>Last Name: </strong>Kaushik</p>
               <p><strong className='text-gray-600'>Address:</strong> Bhopal</p>
               <p><strong className='text-gray-600'>Email:</strong>koushiknaman919@gmail.com</p>
               <p><strong className='text-gray-600'>Langages:</strong>Hindi,English</p>
                </div>
               
            </div>
            <br />
            <br />

            <button className='ml-10 border-solid border-2  border-yellow-400 rounded-full  hover:bg-yellow-400 px-6 py-2'>Download CV</button>
         </div>

         <div>
            <h1 className='text-2xl ml-10 shadow-md'>EDUCATION</h1>
            <br />
            <div className='grid grid-rows-3 ml-10 gap-4'>
               <div>
                <button><p className='bg-gray-600 px-1  rounded-full'>2019-23</p></button>
                <br />
                <h1><strong>B.TECH</strong> - Elextrical and Electronics</h1>
                <h1>Oriental Institude of Science and Tecnology</h1>
                <p><strong>CGPA:</strong>8.14</p>
               </div>
               <div>
                <button><p className='bg-gray-600 px-1 rounded-full'>2018-19</p></button>
                <br />
                <h1><strong>CLASS:12TH</strong> (PCM) </h1>
                <h1>Servite Convent Sr. Sec. School (CBSC)</h1>
                <p><strong>CGPA:</strong>6.4</p>
               </div>
               <div>
                <button><p className='bg-gray-600 px-1  rounded-full'>2016-17</p></button>
                <br />
                <h1><strong>CLASS:10TH</strong> </h1>
                <h1>Servite Convent Sr. Sec. School (CBSC)</h1>
                <p><strong>CGPA:</strong>6.8</p>
               </div>
            </div>
         </div>

         <div>
            <h1 className='text-2xl  shadow-md'>HOBBIES</h1>
            <div>
                <br />

                <ul className='text-lg gap-3'>
                    <li>Travelling</li>
                    <li>Playing Football</li>
                    <li>Listening Music</li>
                </ul>
            </div>
         </div>
        </div>
            
        </div>
        </>
    )
}

export default Aboutus
