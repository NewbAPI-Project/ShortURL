export default function Faq() {
  return (
    <div className="container mx-auto py-32 gap-1">
      <h2 className=" text-center font-bold text-4xl pb-10">F.A.Q</h2>
      <div tabIndex={0} className="collapse collapse-arrow border-b-2 border-base-300 bg-base-100">
        <div className="collapse-title text-xl font-medium">
          What is an API?
        </div>
        <div className="collapse-content">
          <p>An API (Application Programming Interface) is a set of protocols, tools, and standards for building software applications. It defines the way software components should interact with each other.</p>
        </div>
      </div>
      <div tabIndex={1} className="collapse collapse-arrow border-b-2 border-base-300 bg-base-100">
        <div className="collapse-title text-xl font-medium">
          What is RapidAPI?
        </div>
        <div className="collapse-content">
          <p>RapidAPI is a platform that enables developers to easily find, connect, and manage APIs from multiple providers in a single place. It provides a unified interface for accessing and managing APIs, allowing developers to focus on building their applications.</p>
        </div>
      </div>
      <div tabIndex={2} className="collapse collapse-arrow border-b-2 border-base-300 bg-base-100">
        <div className="collapse-title text-xl font-medium">
          How do I sign up for RapidAPI?
        </div>
        <div className="collapse-content">
          <p>To sign up for RapidAPI, go to the RapidAPI website, create an account, and then log in to your account. You can then search for and subscribe to the APIs you want to use.</p>
        </div>
      </div>
      <div tabIndex={3} className="collapse collapse-arrow border-b-2 border-base-300 bg-base-100">
        <div className="collapse-title text-xl font-medium">
        How do I access the APIs on RapidAPI?
        </div>
        <div className="collapse-content">
          <p>To access the APIs on RapidAPI, you will need to use an API key. You can obtain an API key by subscribing to the APIs you want to use. Once you have an API key, you can use it to authenticate your API requests.</p>
        </div>
      </div>
      <div tabIndex={4} className="collapse collapse-arrow border-b-2 border-base-300 bg-base-100">
        <div className="collapse-title text-xl font-medium">
          Do you offer a free tier?
        </div>
        <div className="collapse-content">
          <p>Yes, we offers a basic tier that allows developers to test and experiment with APIs without incurring any charges. The free tier has usage limits and certain features may be restricted.</p>
        </div>
      </div>
      <div tabIndex={5} className="collapse collapse-arrow border-b-2 border-base-300 bg-base-100">
        <div className="collapse-title text-xl font-medium">
          How do I get support?
        </div>
        <div className="collapse-content">
          <p>If you have any questions, concerns, or issues related to API documentation or feature requests, you can reach out to us via email at hi@newbapi.com. However, if you wish to request a refund, please contact RapidAPI directly as they are responsible for managing billing and payments.</p>
        </div>
      </div>
    </div>
  );
}