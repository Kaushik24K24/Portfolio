import React from 'react'

function Skills() {
    return (
        <div className=''>
        
    <h1 className='text-4xl text-white  mt-10 ml-10'><strong className='text-yellow-400'>S</strong>KILLS  <strong className='text-yellow-400'>&</strong><strong className='text-yellow-400'>  P</strong>ROJECTS</h1>

    <div className='grid grid-cols-2 mt-8 gap-40'>
        <div className='ml-10'>

         <h1 className=' text-2xl  shadow-md '>TECHNICAL SKILLS</h1>
         <ul>
            <li className='pt-5'><label for="volume" className='text-xl'>React JS</label>
            <br/>
            <input type="range" id="volume" name="volume" min="0" max="100" value="75" step="1" className=' bg-yellow-400 '/>
            {/* <span id="volumeConstant">75%</span> */}
            </li>
             
            <li className='py-1'><label for="volume" className='text-xl'>JavaScript</label>
            <br/>
            <input type="range" id="volume" name="volume" min="0" max="100" value="70" step="1" className=' bg-yellow-400 '/>
            {/* <span id="volumeConstant">75%</span> */}
            </li>
            <li className='py-1'><label for="volume" className='text-xl'>Tailwind CSS</label>
            <br/>
            <input type="range" id="volume" name="volume" min="0" max="100" value="80" step="1" className=' bg-yellow-400 '/>
            {/* <span id="volumeConstant">75%</span> */}
            </li>
            <li className='py-1'><label for="volume" className='text-xl'>CSS</label>
            <br/>
            <input type="range" id="volume" name="volume" min="0" max="100" value="80" step="1" className=' bg-yellow-400 '/>
            {/* <span id="volumeConstant">75%</span> */}
            </li>
            <li className='py-1'><label for="volume" className='text-xl'>HTML</label>
            <br/>
            <input type="range" id="volume" name="volume" min="0" max="100" value="80" step="1" className=' bg-yellow-400 '/>
            {/* <span id="volumeConstant">75%</span> */}
            </li>
         </ul>
        </div>

        <div>
        <h1 className=' text-2xl  shadow-md '>PROJECTS</h1>
        </div>
        
         </div>

        </div>
        
    )
}

export default Skills
