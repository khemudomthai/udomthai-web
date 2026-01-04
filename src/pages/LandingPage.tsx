import { HolidayModal } from '../components/HolidayModal';

export function LandingPage() {
  return (
    <div className='min-h-screen w-full overflow-hidden'>
      <video autoPlay muted loop poster="./video/poster.jpg" className='object-cover w-full h-screen'>
        <source src="./video/udmt_bg.mp4" type="video/mp4" />
      </video>
      <div id="container" className='absolute top-0 left-0 w-screen h-full'>
        <div className='container mx-auto px-4 flex flex-col h-full justify-between'>
          <div id="nav" className='my-2'>
            <img title='Udom Thai' src="./images/udomthai-logo.png" className='size-20' />
            <h1 className='sr-only'>Udom Thai</h1>
          </div>
          <div id="hero" className='flex flex-col gap-6 items-start'>
            <div className='font-normal text-7xl text-white'>Simply<br /> Great Thai Food</div>
            <div className='font-extrabold text-4xl text-white'>Enjoy Thai food like Thai locals do</div>
            <div className='gap-2 items-start'>
              <a href="https://udom-thai-centennial.cloveronline.com/menu/all" className=' bg-orange-600 text-white font-bold rounded-full px-4 
              py-2 mr-2 mb-2 hover:bg-orange-700'>View Menu</a>
              <a href="https://udom-thai-centennial.cloveronline.com/menu/all" className=' bg-orange-600 text-white font-bold rounded-full px-4 
              py-2 mr-2 mb-2 hover:bg-orange-700'>Order Pickup or Delivery</a>
              <a href="https://www.ubereats.com/store/udom-thai-centennial/h2F_ak5YUkK0Q3VjDWlKfQ?diningMode=DELIVERY" className='bg-orange-600 text-white font-bold rounded-full px-4 py-2 mr-2 mb-2 hover:bg-orange-700' target='_blank'>Order Uber Eats</a>
            </div>
          </div>
          <div id="footer">
            <div className='font-bold text-lg text-white py-4 drop-shadow'>
              7412 S University Blvd, Centennial CO 80122<br />(303) 738 0800
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
