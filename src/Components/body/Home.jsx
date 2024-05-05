import React from 'react'

function Home() {
    return (
        
        <div className='flex justify-center content-center gap-10	mt-20 h-screen'>
           <div className='h-[320px] w-[250px] ml-[100px] mt-[80px] bg-yellow-400 rounded-lg'>
            <img src="./Namanpic.jpg" alt="logo" className='h-[300px] w-[250px] ml-8  overflow-hidden shadow-sm shadow-white'/>
           </div>
           <div className='overflow-hidden max-w-lg justify-self-center ml-[100px] mt-[100px]'>
            <h1 className='text-yellow-400 text-3xl ml-5 font-bold'>-I'M NAMAN KAUSHIK</h1>
            <h2 className='text-white text-xl font-bold ml-10 '>FRONTEND DEVELOPER</h2>
            <br />
            
            <p className='text-sm ml-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eaque quo perferendis maxime vitae at. Labore nam corporis eius nulla similique nobis aspernatur repellendus, quidem qui porro 
            maxime officiis ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nisi consequuntur mollitia soluta vitae veniam doloribus debitis saepe, laborum praesentium? At nam enim molestias incidunt ex sequi fugiat blanditiis aut. 
            </p>
           </div>
        </div>
        
    )
}

export default Home
