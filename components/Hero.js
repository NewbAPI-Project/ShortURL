/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <div className="hero py-24 rounded-b-lg">
      <div className="hero-content flex-col">
        <img src="/assets/logo-ori.png" className="w-20 rounded-xl shadow-2xl" />
        <div className="text-center">
          <h1 className="text-5xl font-bold">ShortURL API</h1>
            <p className="text-1xl font-light text-gray-500 my-8">
              Shorten your links and amplify your impact with our ShortURL API
            </p>
          <div className="justify-center grid gap-5 md:flex md:gap-x-5">
            <a className="btn w-48 border-none text-white bg-gradient-to-l from-pink-600 via-orange-500 to-orange-300 rounded-lg" href="https://rapidapi.com/newbAPIOfficial/api/short-url-by-newbapi/" target="_blank">Get started</a>
            <a className="btn btn-outline w-48" href="https://docs.newbapi.com/api/short-url" target="_blank">
              Documentation
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg> 
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}