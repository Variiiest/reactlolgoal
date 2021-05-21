export const AuthTemp =[
    {
        id:1,
        jsx:`<div className="flex flex-col sm:h-screen text-gray-900">
        <div
          className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded border">
            <h2
              className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              LOGIN
          </h2>
            <form className="mt-10" method="POST">
              <label
                htmlFor="email"
                className="block text-base font-semibold text-gray-600 uppercase">
                E-mail
            </label>
              <input
                type="email"
                id="email address"
                name="email address"
                placeholder="Email Address"
                autoComplete="none"
                className="block w-full py-3 px-4 mt-4 text-gray-800 hover:border-blue-700 appearance-none border-b border-gray-100 rounded focus:text-gray-500 focus:outline-none" />
              <label
                htmlFor="password"
                className="block mt-2 text-base font-semibold text-gray-600 uppercase">
                Password
            </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="none"
                className="block w-full py-3 px-4 mt-4 text-gray-800 hover:border-blue-700 appearance-none border-b border-gray-100 rounded focus:text-gray-500 focus:outline-none" />
              <button
                type="submit"
                className="w-full py-3 mt-10 bg-blue-800 rounded font-medium text-white uppercase focus:outline-none hover:bg-blue-800 hover:shadow-none">
                Login
            </button>
              <div
                className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                <a
                  href="forgot-password"
                  className="flex-2 text-base hover:underline">
                  Forgot password?
              </a>
                <p
                  className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                  or
              </p>
                <a href="register" className="flex-2 text-base hover:underline">
                  Create an Account
              </a>
              </div>
            </form>
          </div>
        </div>
      </div>`,
      code:`<div class="flex flex-col sm:h-screen text-gray-900">
      <div class="grid place-items-center mx-2 my-20 sm:my-auto">
          <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white shadow-lg rounded border">
              <h2 class="text-center font-semibold text-3xl lg:text-4xl">
              LOGIN
            </h2>
              <form class="mt-10">
                  <input type="email" id="email address" name="email address" placeholder="Email Address" autocomplete="none" class="block w-full py-2 mt-4 hover:border-blue-700 appearance-none border-b focus:text-gray-500 focus:outline-none" />
                  <input type="password" id="password" name="password" placeholder="Password" autocomplete="none" class="block w-full py-2 mt-4 hover:border-blue-700 appearance-none border-b focus:text-gray-500 focus:outline-none" />
                  <button type="submit" class="w-full py-3 mt-10 bg-blue-700 rounded font-medium text-white uppercase focus:outline-none hover:bg-blue-600">Login</button>
                  <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center"> <a href="forgot-password" class="flex-2 text-base hover:text-blue-700">
                  Forgot password?
                </a>
                      <p class="flex-1 text-gray-600 text-md mx-4 my-1 sm:my-auto">or</p> <a href="register" class="flex-2 text-base hover:text-blue-700">
                  Create an Account
                </a>
                  </div>
              </form>
          </div>
      </div>
  </div>`,
    },
    {
      id:2,
      code:`<div class="flex flex-col justify-center sm:py-12">
      <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md text-gray-900">
        <h1 class="text-center text-2xl mb-5">
          Login
        </h1>
        <div class="bg-white shadow-lg border-b w-full rounded">
          <div class="px-5 py-7">
            <label class="text-sm pb-1 block">E-mail</label>
            <input type="email" id="email address" name="email address" placeholder="Email Address" autocomplete="Email Address" class="border-b focus:outline-none hover:border-blue-700 py-2 mt-1 mb-5 text-sm w-full" />
            <label class="text-sm pb-1 block">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" autocomplete="current password" class="focus:outline-none hover:border-blue-700 py-2 mt-1 mb-5 text-sm w-full border-b" />
            <button type="button" class="bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 focus:shadow-sm focus:ring-4 text-white w-full px-4 py-3 rounded text-sm shadow-sm hover:shadow-md text-center inline-block"> <span class="inline-block mr-2">Login</span>
            </button>
          </div>
          <div class="px-5">
            <div class="grid grid-cols-2 gap-1">
              <button type="button" class="transition duration-200 hover:text-white hover:bg-red-400 w-full py-3 rounded text-sm shadow-sm hover:shadow-md text-center inline-block bg-red-100">Google</button>
              <button type="button" class="transition duration-200 hover:text-white hover:bg-gray-900 w-full py-3 rounded text-sm shadow-sm hover:shadow-md text-center inline-block bg-gray-100">Github</button>
            </div>
          </div>
          <div class="py-5">
            <div class="grid grid-cols-2 gap-1">
              <div class="text-center sm:text-left whitespace-nowrap">
                <a href="" class="transition duration-200 mx-5 cursor-pointer text-sm rounded text-gray-700"> <span class="inline-block ml-1">
                    Forgot Password
                  </span>
                </a>
              </div>
              <div class="text-center sm:text-right whitespace-nowrap">
                <a class="transition duration-200 mx-5 cursor-pointer text-sm rounded text-gray-700"> <span class="inline-block ml-1">
                    Register
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,

    jsx:`<div className="flex flex-col justify-center sm:py-12">
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md text-gray-900">
      <h1 className="font-bold text-center text-2xl mb-5">Login</h1>  
      <div className="bg-white shadow-2xl w-full rounded divide-y divide-gray-200">
        <div className="px-5 py-7">
          <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
          <input type="email"
            id="email address"
            name="email address"
            placeholder="Email Address"
            autoComplete="Email Address" className="border-b focus:outline-none hover:border-blue-700 py-3 mt-1 mb-5 text-sm w-full"/>
          <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
          <input  type="password"
            id="password"
            name="password"
            placeholder="Password"
            autoComplete="current password" className="focus:outline-none hover:border-blue-700 py-3 mt-1 mb-5 text-sm w-full border" />
          <button type="button" className="transition duration-200 bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 focus:shadow-sm focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50 text-white w-full py-4 rounded text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 gap-1">
            <button type="button" className="transition duration-200 border-b border-gray-200 text-gray-100 bg-red-500 w-full py-3 rounded text-sm shadow-sm hover:shadow-md font-bold text-center inline-block">Google</button>
            <button type="button" className="transition duration-200 border-b border-gray-200 text-gray-100 bg-black w-full py-3 rounded text-sm shadow-sm hover:shadow-md font-bold text-center inline-block">Github</button>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap">
              <button className="transition duration-200 mx-5 px-5 py-3 cursor-pointer font-bold text-sm rounded text-gray-500 hover:bg-white focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
               
                <span className="inline-block ml-1">Forgot Password</span>
              </button>
            </div>
            <div className="text-center sm:text-right whitespace-nowrap">
              <button className="transition duration-200 mx-5 px-5 py-3 cursor-pointer font-bold text-sm rounded text-gray-500 hover:bg-white focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
              
                <span className="inline-block ml-1">Register</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </div>`,
    },
    {
      id:3,
      code:`<div>
      <div class="flex min-h-screen bg-white">
        <div class="w-1/2 bg-cover md:block hidden" style="
            background-image: url(https://images.unsplash.com/photo-1618300425826-3c308db6d71c?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max);
          "></div>
        <div class="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5">
          <div class="text-left p-0">
            <h1 class="text-gray-800 text-3xl font-medium">
              Create an account for free
            </h1>
            <h3 class="p-1 text-gray-700">
              Free resources avaliable up to 12 month.
            </h3>
          </div>
          <form action="#" class="text-gray-900">
            <div class="mt-5">
              <input type="text" class="block w-full py-2 border-b hover:border-blue-700 focus:outline-none" placeholder="Email" />
            </div>
            <div class="mt-5">
              <input type="text" class="block w-full py-2 border-b hover:border-blue-700 focus:outline-none" placeholder="User-name" />
            </div>
            <div class="mt-5">
              <input type="password" class="block w-full py-2 border-b hover:border-blue-700 focus:outline-none" placeholder="Password" />
            </div>
            <div class="mt-6 block py-5 text-sm md: text-base text-gray-800">
              <input type="checkbox" class="inline-block border-0" /> <span display="inline">
                By creating an account you are agreeing to our
                <a
                  href="#_"
                  target="_blank"
                >
                  <span class="underline">
                    Terms and Conditions
                  </span>
              </a>and
              <a href="#_" target="_blank"> <span class="underline">Privacy Policy</span>
              </a>
              </span>
            </div>
            <div class="mt-10">
              <input type="submit" class="py-3 bg-blue-700 text-white w-full rounded hover:bg-blue-700" value="Sign up with email" />
            </div>
          </form>
          <a href="/login" data-test="Link"> <span class="block p-5 text-center text-gray-800 text-lg">
              Already have an account?
            </span>
          </a>
        </div>
      </div>
    </div>`,
    jsx:`    <div>
    <div className="flex min-h-screen bg-white">
<div className="w-1/2 bg-cover md:block hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1618300425826-3c308db6d71c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)'}} />

<div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-2xl bg-white">
<div className="text-left p-0">
<h1 className=" text-gray-800 text-3xl font-medium">Create an account for free</h1>
<h3 className="p-1 text-gray-700">Free resources avaliable up to 12 month.</h3>
</div>
<form action="#" className="p-0">
<div className="mt-5">
 <input type="text" className="block w-full p-2 border-b rounded hover:border-blue-700 focus:outline-none   " placeholder="Email" />
</div>
<div className="mt-5">
 <input type="text" className="block w-full p-2 border-b rounded hover:border-blue-700 focus:outline-none   " placeholder="User-name" />
</div>
<div className="mt-5">
 <input type="password" className="block w-full p-2 border-b rounded hover:border-blue-700 focus:outline-none    " placeholder="Password" />
</div>
<div className="mt-6 block p-5 text-sm md: text-base text-gray-800">
 <input type="checkbox" className="inline-block border-0  " />
 <span display="inline">By creating an account you are agreeing to our 
   <a href="/s/terms" target="_blank" data-test="Link">
     <span className="underline ">Terms and Conditions</span> </a> and
   <a href="/s/privacy" target="_blank" data-test="Link">
     <span className="underline">Privacy Policy</span> </a>
 </span>
</div>
<div className="mt-10">
 <input type="submit" defaultValue="Sign up with email" className="py-3 bg-blue-700 text-white w-full rounded hover:bg-blue-700" />
</div>
</form>
<a href="/login" data-test="Link"><span className="block  p-5 text-center text-gray-800  text-base ">Already have an account?</span></a>
</div>
</div>
</div>`,

    },
    {
     id:4,
     code:`<div>
     <div class="flex sm:min-h-screen bg-white">
       <div class="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
         <div class="text-left p-0 font-sans">
           <h1 class="text-gray-800 text-3xl font-medium">
             Create an account for free
           </h1>
         </div>
         <form action="#" class="p-0">
           <div class="mt-5">
             <input type="text" class="block w-full py-2 border-b rounded hover:border-blue-700 focus:outline-none  " placeholder="Email" />
           </div>
           <div class="mt-5">
             <input type="text" class="block w-full py-2 border-b rounded hover:border-blue-700 focus:outline-none  " placeholder="User-name" />
           </div>
           <div class="mt-5">
             <input type="password" class="block w-full py-2 border-b rounded hover:border-blue-700 focus:outline-none  " placeholder="Password" />
           </div>
           <div class="mt-10">
             <button type="submit" class="py-3 bg-blue-700 text-white w-full rounded hover:bg-blue-700">Sign up with email</button>
           </div>
         </form>
         <a href="/login" data-test="Link"> <span class="block p-5 text-center text-gray-800 text-lg">
             Already have an account?
           </span>
         </a>
       </div>
       <div class="w-1/2 bg-cover md:block hidden" style="
           background-image: url(https://images.unsplash.com/photo-1618300425826-3c308db6d71c?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max);
         "></div>
     </div>
   </div>`,
    },

    {
      id:5,
      code:`<section class="flex flex-col md:flex-row text-gray-900 items-center">
      <div class="bg-blue-700 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="https://source.unsplash.com/random" alt="" class="w-full h-full object-cover" />
      </div>
      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div class="w-full h-100">
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
            Log in to your account
          </h1>
          <form class="mt-6" action="#_" method="POST">
            <div>
              <label class="block text-gray-700">Email Address</label>
              <input type="email" placeholder="Enter Email Address" class="w-full py-3 bg-white mt-2 border-b focus:border-blue-700 focus:outline-none" />
            </div>
            <div class="mt-4">
              <label class="block text-gray-700">Password</label>
              <input type="password" placeholder="Enter Password" minlength="6" class="w-full py-3 bg-white mt-2 border-b focus:border-blue-700 focus:outline-none" required="" />
            </div>
            <div class="text-right mt-2"> <a href="#_" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                Forgot Password?
              </a>
            </div>
            <button type="submit" class="w-full block bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 text-white font-semibold rounded px-4 py-3 mt-6">Log In</button>
          </form>
          <hr class="my-6 border-gray-300 w-full" />
          <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded px-4 py-3 border border-gray-300">
            <div class="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48">
                <defs>
                  <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                </defs>
                <clipPath id="b">
                  <use xlink:href="#a" overflow="visible"></use>
                </clipPath>
                <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
                <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
              </svg> <span class="ml-4">Log in with Google</span>
            </div>
          </button>
          <p class="mt-8">Need an account? <a href="#_" class="text-blue-700 hover:text-blue-700 font-semibold">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </section>`,
    },
    {
      id:6,
      code:`<div class="min-w-screen sm:min-h-screen flex items-center justify-center px-5 py-5">
      <div class="text-gray-900 rounded shadow-2xl w-full overflow-hidden" style="max-width: 1000px">
        <div class="md:flex w-full">
          <div class="hidden md:block w-1/2 bg-blue-700 py-10 px-10"></div>
          <div class="w-full md:w-1/2 py-10 px-5 md:px-10 bg-white shadow-2xl">
            <div class="text-center mb-10">
              <h1 class="font-bold text-3xl text-gray-900">
                REGISTER
              </h1>
            </div>
            <div>
              <div class="flex -mx-3">
                <div class="w-1/2 px-3 mb-5">
                  <label for="" class="text-base">First name</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center flex items-center justify-center">
                    </div>
                    <input type="text" class="w-full -ml-10  py-2 border-b border-gray-200 outline-none focus:border-blue-500" placeholder="Eric" />
                  </div>
                </div>
                <div class="w-1/2 px-3 mb-5">
                  <label for="" class="text-base">Last name</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center flex items-center justify-center">
                    </div>
                    <input type="text" class="w-full -ml-10 py-2 border-b border-gray-200 outline-none focus:border-blue-500" placeholder="Denever" />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-5">
                  <label for="" class="text-base">Email</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center flex items-center justify-center">
                    </div>
                    <input type="email" class="w-full -ml-10  py-2 border-b border-gray-200 outline-none focus:border-blue-500" placeholder="EricDenever@example.com" />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-12">
                  <label for="" class="text-base">Password</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center flex items-center justify-center">
                    </div>
                    <input type="password" class="w-full -ml-10 py-2 border-b border-gray-200 outline-none focus:border-blue-500" placeholder="************" />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-5">
                  <button class="block w-full max-w-xs mx-auto bg-blue-700 hover:bg-blue-700 focus:bg-blue-700 text-white rounded px-3 py-3 font-semibold">REGISTER NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
      

    },

    {
      id:7,
      code:`<div class="flex items-center lg:justify-center text-gray-900 py-12">
      <div class="flex flex-col mt-4 overflow-hidden rounded shadow-2xl md:flex-row md:flex-1 lg:max-w-screen-md">
        <div class="p-4 py-6 text-white bg-blue-700 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
        Your Content
        
        </div>
        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-2xl font-semibold text-gray-700">
            LOGIN
          </h3>
          <form action="#_" class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">Email address</label>
              <input type="email" id="email" class="py-2 border-b focus:border-blue-600 focus:outline-none" />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
              </div>
              <input type="password" id="password" class="py-2 border-b focus:border-blue-600 focus:outline-none" />
            </div>
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="remember" class="w-4 h-4 focus:border-blue-600 border" />
              <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button type="submit" class="w-full px-4 py-2 text-base font-semibold text-white transition-colors duration-300 bg-blue-700 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-600 focus:ring-4">Log in</button>
            </div>
            <div class="flex flex-col space-y-5"> <span class="flex items-center justify-center space-x-2">
                <span class="bg-gray-400"></span>
              <span class="font-normal text-gray-500">
                  Or login
                </span>
              <span class="bg-gray-400"></span>
              </span>
              <div class="flex flex-col space-y-4">
                <a href="#_" class="flex items-center justify-center px-4 py-3 space-x-4 border border-blue-400 rounded group hover:bg-blue-400 focus:outline-none text-base"> <span>
                    <svg
                      class="text-blue-700 group-hover:text-white"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path
                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                      ></path>
                    </svg>
                  </span>
                  <span class="text-sm font-medium text-blue-700 group-hover:text-white">
                    Twitter
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>`,
    },

    {
      id:8,
      code:`<section class="flex flex-col items-center text-gray-900 md:flex-row bg-white">
      <div class="flex w-full px-6 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 items-left justify-left">
        <div class="w-full py-32 lg:py-6 lg:h-100">
          <h1 class="my-12 text-2xl font-semibold tracking-tighter text-gray-900 sm:text-3xl title-font">
            Login Here
          </h1>
          <form class="mt-6" action="#" method="POST">
            <div>
              <label class="text-base font-medium leading-relaxed tracking-tighter text-gray-700">Email Address</label>
              <input type="email" name="" id="email_address" placeholder="Your Email " class="w-full px-4 py-2 text-base rounded focus:border-gray-500 focus:outline-none border" autocomplete="" />
            </div>
            <div class="mt-4">
              <label class="text-base font-medium leading-relaxed tracking-tighter text-gray-700">Password</label>
              <input type="password" name="" id="password" placeholder="Your Password" minlength="6" class="w-full px-4 py-2 text-base rounded focus:border-gray-500 focus:outline-none border" required="" />
            </div>

            <button type="submit" class="mt-4 w-full bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 text-white font-semibold rounded px-4 py-3 text-base">Log In</button>
          </form>
          <p class="mt-8 text-center text-gray-900">Already have an account? <a href="#_" class="font-semibold text-gray-900">
          Sign In
        </a>
      </p>
      <p class="mt-2 text-center text-gray-900">Forgot Password? <a href="#_" class="font-semibold text-gray-900">
          Recover
        </a>
      </p>
        </div>
      </div>
      <div class="hidden w-full h-screen bg-white lg:block md:w-1/3 lg:w-2/3 border-l">
        <div class="z-10 m-12 text-left">
          <a href="#_" class="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-10">
            <div class="w-2 h-2 p-2 mr-2 rounded bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
          </a>
          <h1 class="mb-2 text-2xl font-semibold tracking-tighter text-gray-900 sm:text-5xl title-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </h1>
          <p class="text-lg">Praesent mattis egestas nunc non scelerisque. Aliquam erat volutpat. Nulla auctor turpis quis mollis vehicula. Aliquam erat volutpat. Nulla posuere ac justo at iaculis. Aliquam vitae quam dolor. Sed quam felis, eleifend et pharetra id, vestibulum in eros. Cras ipsum libero, vestibulum ac viverra vitae, tristique eget est. Sed porttitor leo leo, ac imperdiet diam sagittis id. Get Started Today</p>
        </div>
      </div>
    </section>`,
    },
    {
      id:9,
      code:`<section class="flex flex-col items-center sm:h-screen md:flex-row text-gray-900">
      <div class="container mx-auto">
        <div class="flex justify-center px-2 py-6">
          <div class="flex w-full rounded xl:w-3/4 lg:w-11/12 shadow-2xl">
            <div class="hidden w-full h-auto bg-white bg-cover border-r rounded lg:block lg:w-6/12">
              <div class="z-10 m-12 text-left">
                <h2 class="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-gray-900 sm:text-3xl title-font">
                  Create an account.
                </h2>
                <div class="w-full mt-16 mb-8 text-base leading-relaxed text-gray-900 sm:md:w-3/3 lg:text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis egestas nunc non scelerisque. Aliquam erat volutpat. Nulla auctor turpis quis mollis vehicula. Aliquam erat volutpat. Nulla posuere ac justo at iaculis. Aliquam vitae quam dolor. Sed quam felis, eleifend et pharetra id, vestibulum in eros. Cras ipsum libero, vestibulum ac viverra vitae, tristique eget est. Sed porttitor leo leo, ac imperdiet diam sagittis id. Get Started Today</div>
              </div>
            </div>
            <div class="w-full px-8 py-12 bg-white border-gray-100 rounded lg:w-8/12 lg:px-24 lg:py-6 lg:rounded bg-white">
              <div class="z-10 text-left mt-12">
                <form class="mt-4" action="#" method="POST">
                  <div>
                    <label class="block text-base font-medium leading-relaxed text-gray-700">User Name</label>
                    <input type="text" name="" id="" placeholder=" User Name " class="w-full py-2 mt-2 text-base rounded focus:outline-none focus:shadow-outline border-b" />
                  </div>
                  <div class="mt-4">
                    <label class="block text-base font-medium leading-relaxed text-gray-700">Email Address</label>
                    <input type="email" name="" id="" placeholder=" Email " class="block w-full py-2 mt-2 text-base text-gray-900 rounded focus:outline-none focus:shadow-outline border-b" />
                  </div>
                  <div class="flex flex-wrap mt-4 mb-6 -mx-3">
                    <div class="w-full px-3 mb-6">
                      <label class="text-base font-medium leading-relaxed text-gray-700" for="password" minLength="6">Password</label>
                      <input type="text" class="block w-full py-2 mt-2 text-base text-gray-900 rounded focus:outline-none focus:shadow-outline border-b" id="password" placeholder=" Password" />
                    </div>
                    <div class="w-full px-3">
                      <label class="text-base font-medium leading-relaxed text-gray-700" for="confirm">Confirm</label>
                      <input type="text" class="block w-full py-2 mt-2 text-base text-gray-900 rounded focus:outline-none focus:shadow-outline border-b" id="confirm" placeholder="Confirm" />
                    </div>
                  </div>
                  <button type="submit" class="block w-full mt-6 text-center bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 text-white font-semibold rounded px-4 py-3 text-base">Log In</button>
                </form>
                <p class="mt-8 text-center text-gray-900">Already have an account? <a href="#_" class="font-semibold text-gray-900">
                    Sign In
                  </a>
                </p>
                <p class="mt-2 text-center text-gray-900">Forgot Password? <a href="#_" class="font-semibold text-gray-900">
                    Recover
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,
    },
    {
      id:10,
      code:`<section class="w-full text-gray-900">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full bg-cover lg:w-6/12 xl:w-7/12">
            <div class="flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div class="">
                  <h2 class="text-4xl font-bold text-gray-900 xl:text-6xl">
                    What About this comp?
                  </h2>
                </div>
                <p class="text-xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis egestas nunc non scelerisque. Aliquam erat volutpat. Nulla auctor turpis quis mollis vehicula. Aliquam erat volutpat. Nulla posuere ac justo at iaculis. Aliquam vitae quam dolor. Sed quam felis, eleifend et pharetra id, vestibulum in eros. Cras ipsum libero, vestibulum ac viverra vitae, tristique eget est. Sed porttitor leo leo, ac imperdiet diam sagittis id.</p>
                 <a href="#_" class="inline-block text-center bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 text-white font-semibold rounded px-4 py-3 text-base">
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
          <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
            <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
              <h4 class="w-full text-3xl font-bold">Signup</h4>
              <p class="text-lg text-gray-500">or, if you have an account you can <a href="#_" class="text-blue-600 underline">
                  sign in
                </a>
              </p>
              <div class="w-full mt-10 space-y-4">
                <div class="">
                  <label class="font-medium text-gray-900">Name</label>
                  <input type="text" class="block w-full px-4 py-2 text-base border-b rounded focus:outline-none" placeholder="Enter Your Name" />
                </div>
                <div class="">
                  <label class="font-medium text-gray-900">Email</label>
                  <input type="text" class="block w-full px-4 py-2 text-base border-b rounded focus:outline-none" placeholder="Enter Your Email Address" />
                </div>
                <div class="">
                  <label class="font-medium text-gray-900">Password</label>
                  <input type="password" class="block w-full px-4 py-2 text-base border-b rounded focus:outline-none" placeholder="Password" />
                </div>
                <div class=""> <a href="#_" class="inline-block w-full text-center bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 text-white font-semibold rounded px-4 py-3 text-base">
                   Signup
                  </a>
                  <a href="#_" class="inline-block w-full text-center bg-red-100 hover:bg-red-400 focus:bg-red-300 hover:text-white font-semibold rounded px-4 py-3 text-base mt-3">
                    Signup with Google
                  </a>
        
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,
    },
    {
      id:11,
      code:`<section class="w-full px-8 py-16 xl:px-8 text-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col items-center md:flex-row">
          <div class="w-full space-y-5 md:w-3/5 md:pr-16">
            <p class="font-medium text-blue-800"> <span class="px-4 py-2 bg-white rounded">
                What About this comp?
              </span>
            </p>
            <h2 class="text-xl font-extrabold leading-none text-gray-900 sm:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </h2>
            <p class="text-base text-gray-600 md:pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis egestas nunc non scelerisque. Aliquam erat volutpat. Nulla auctor turpis quis mollis vehicula. Aliquam erat volutpat. Nulla posuere ac justo at iaculis. Aliquam vitae quam dolor. Sed quam felis, eleifend et pharetra id, vestibulum in eros. Cras ipsum libero, vestibulum ac viverra vitae, tristique eget est. Sed porttitor leo leo, ac imperdiet diam sagittis id.</p>
          </div>
          <div class="w-full mt-16 md:mt-0 md:w-2/5">
            <div class="z-10 h-auto p-8 py-10 overflow-hidden bg-white shadow-2xl px-7 rounded">
              <h3 class="mb-6 text-2xl font-medium text-center">
                Sign in to your Account
              </h3>
              <input type="text" name="email" class="block w-full px-4 py-3 mb-4 border-b focus:outline-none rounded" placeholder="Email address" />
              <input type="password" name="password" class="block w-full px-4 py-3 border-b mb-4 focus:outline-none rounded" placeholder="Password" />
              <div class="block items-center text-center">
                <button class="w-full bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 text-white font-semibold rounded px-4 py-3 text-base">Login</button>
              </div>
              <p class="w-full mt-4 text-sm text-center text-gray-500">Don&#x27;t have an account? <a href="#_" class="text-blue-500 underline">
                  Sign up here
                </a>
              </p>
              <p class="w-full mt-4 text-sm text-center text-gray-500">Forgot Your Password? <a href="#_" class="text-blue-500 underline">
                  Recover Your Password
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>`
    }  
]