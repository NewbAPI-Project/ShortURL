export default function Content() {
  const exampleCode1 = `curl --request POST 
    --url https://short-url-by-newbapi.p.rapidapi.com/api/v1/short/ \\
    --header 'X-RapidAPI-Host: short-url-by-newbapi.p.rapidapi.com' \\
    --header 'X-RapidAPI-Key: <RAPIDAPI_KEY>' \\
    --header 'content-type: application/json' \\
    --data '{
    "url": "https://jaironlanda.com"
  }'`
  const exampleCode1Res  = `{
    "short_url_uuid":"2a33a6d0-637f-4189-b0fc-6cce1b928169",
    "created_at": "2023-04-16T04:57:10.944096+00:00",
    "updated_at": "2023-04-16T04:57:10.944107+00:00",
    "url": "https://jaironlanda.com",
    "short_url": "16yikm5",
    "short_url_domain": "https://qrlyf.link/16yikm5",
    "is_active": true
  }`

  return (
    <div className="bg-slate-200 rounded-xl ring-1 ring-slate-900/5 overflow-hidden shadow-md shadow-slate-700/5 bg-gradient-to-b from-orange-500 via-white to-white">
    <div className="container text-center mx-auto pb-28">
      <div className="grid gap-8 md:grid-cols-3 lg:gap-x-12 pt-10">
          <div className="card bg-base-100 shadow-xl mx-8">
            <div className="card-body">
            <div className="mb-12 md:mb-0">
              <div className="p-4 text-white bg-gradient-to-l from-pink-600 via-orange-500 to-orange-300 rounded-lg shadow-lg inline-block mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              </div>
              <h5 className="text-lg text-black font-bold mb-1">
                Customizable links
              </h5>
              <div className="badge bg-gray-400 border-none">Coming Soon</div>
              <p className="text-gray-500 font-light">
                Create custom short links that are easy to remember and share
              </p>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl mx-8">
            <div className="card-body">
              <div className="mb-12 md:mb-0">
                <div className="p-4 text-white bg-gradient-to-l from-pink-600 via-orange-500 to-orange-300 rounded-lg shadow-lg inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h5 className="text-lg font-bold mb-4">Analytics</h5>
                <p className="text-gray-500 font-light">
                  Track clicks and other metrics, including the time of day, and the device used
                </p>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl mx-8">
            <div className="card-body">
              <div className="mb-12 md:mb-0">
                <div className="p-4 text-white bg-gradient-to-l from-pink-600 via-orange-500 to-orange-300 rounded-lg shadow-lg inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>

                </div>
                <h5 className="text-lg font-bold mb-4">302 Redirect</h5>
                <p className="text-gray-500 font-light">
                  Seamlessly redirect users from one URL to another.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
    
    {/* Available on RapidAPI */}
    <div className="container mx-auto pb-28">
      <div className="card bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="grid md:grid-cols-2 lg:gap-x-12">
            <div className="pb-10">
              <h2 className="text-4xl font-bold pb-10">The Benefits of Using RapidAPI as Our Gateway Service</h2>
              <p className="text-gray-500 font-light">
                At NewbAPI.com, we use RapidAPI as our gateway service to provide you with the best possible experience on our API. 
                RapidAPI is a leading API marketplace that connects developers with a variety of APIs to enhance their applications. 
                This allows us to provide you with reliable, high-quality API services while ensuring the security and performance of our API. 
                We value transparency and want you to have the best experience possible, which is why we are proud to use RapidAPI as our gateway service. 
                If you have any questions or concerns, please don&apos;t hesitate to contact us.
              </p>
            </div>
            <figure className="px-10 py-10">
              <img src="/assets/rapidapi.svg"/>
            </figure>
          </div>

        </div>
      </div>
    </div>


    {/* <div className="container mx-auto pb-20">
      <h1 className="text-4xl font-bold pb-10 text-center">API Example</h1>
      
      
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="grid md:grid-cols-2 lg:gap-x-12">
            <div className="text-center">
              <h2 className="text-5xl font-bold py-44">Generating ShortURL</h2>
            </div>
            <div className="mockup-code">
            <pre>
              <code>
                  {exampleCode1}
              </code>
            </pre>
            <br />
            <pre className="text-white bg-success"><code>
                {exampleCode1Res}
              </code></pre> 
          </div>
          </div>

        </div>
      </div>

    </div> */}
    </div>
  );
}