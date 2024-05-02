import React from 'react'

function About() {
  return (
    <>
    <div
    name='About'
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>intro Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum neque odio dicta, quasi ducimus saepe est eum fugit beatae nostrum? Nesciunt nobis culpa a incidunt, consectetur qui deleniti tempore nostrum!</p>
        <br/>
        <h1 className='text-green-600 font-semibold text-xl'>Education & Training</h1>
        <span>
            [degree],[collage name]
        </span>
        <br/>
        <br/>
        <h1 className='text-green-600 font-semibold text-xl'>Skills & expertise</h1>
        <span>
            [degree],[collage name]
        </span>
        <br/>
        <br/>
        <h1 className='text-green-600 font-semibold text-xl'>Professional Experience</h1>
        <span>
        [Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements] [Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements] [Freelance/Contract Work], [Client/Organization], [Dates] [Brief description of projects and contributions]
        </span>

        <br/>
        <br/>
        <h1 className='text-green-600 font-semibold text-xl'>Mission Statement</h1>
        <span>
        My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </span>
    </div>
    

    </>
  )
}

export default About