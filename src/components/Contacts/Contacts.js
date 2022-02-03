import React from 'react'
const Contacts = () => {
  return (
    <div>
      <section id='contact' className='relative'>
        <div className='container px-5 py-10 flex sm:flex-nowrap flex-wrap'>
          <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative mx-auto'>
            <iframe
              width='100%'
              height='100%'
              title='map'
              className='absolute inset-0'
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: 'opacity(0.7)' }}
              src='https://www.google.com/maps/embed/v1/place?q=ståthållaregatan44C,+kalmar&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
            />
            <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
              <div className='lg:w-1/2 px-6'>
                <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                ADDRESS
                </h2>
                <p className='mt-1'>
                Ståthållaregatan44C. <br />
                Kalmar, 392 44
                </p>
              </div>
              <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                EMAIL
                </h2>
                <a className='text-indigo-400 leading-relaxed'>
                simon.palm98@hotmail.se
                </a>
                <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
                PHONE
                </h2>
                <p className='leading-relaxed'>0735536697</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contacts
