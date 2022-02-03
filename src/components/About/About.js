import me from '../../images/Profil.jpg'
const About = () => {
  return (
    <div>
      <section id='about'>
        <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            Hi, I'm Simon Palm.
              <br className='hidden lg:inline-block' />I love to build amazing
            apps.
            </h1>
            <p className='mb-8 leading-relaxed'>
            I am currently a student at Linneausuniversity, were I have started my web development journey and it has sparked my design and interest for programming and web development.
            I have experienced both Frontend and backend development. Feel free to contact me if I would be of interest to you.
            </p>
            <div className='flex justify-center'>
              <a
                href='#contact'
                className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'>
              Work With Me
              </a>
              <a
                href='#projects'
                className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
              See My Past Work
              </a>
            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='w-32 h-32 md:w-60 md:h-auto rounded-full mx-auto'
              alt='Image of me'
              src={me}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
export default About