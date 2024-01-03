
// import React from "react";


// export default function Login() {


//   return (
//     <>
//       <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//         <div class="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
//           <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
//         </div>

        // <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        //   <form class="space-y-6" action="#" method="POST">
        //     <div>
        //       <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        //       <div class="mt-2">
        //         <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        //       </div>
        //     </div>

        //     <div>
        //       <div class="flex items-center justify-between">
        //         <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        //         <div class="text-sm">
        //           <a href="/" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
        //         </div>
        //       </div>
        //       <div class="mt-2">
        //         <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        //       </div>
        //     </div>

        //     <div>
        //       <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        //     </div>
        //   </form>
        //   <p class="mt-10 text-center text-sm text-gray-500">
        //     Not a member?
        //     <a href="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
        //   </p>
        // </div>
//       </div>
//     </>
//   );
// }
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export default function Login() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0pzdrhn', 'template_v7mzkv2', form.current, '2idOtsQq3hYNjhvct')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          Swal.fire(
            'Message',
            'Your message has been sent!',
            'success'
          )
          
      }, (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
          console.log(error.text);
      });
  };

  return (
    <div className="container min-h-screen flex mx-auto">
      {/* Left Column - Image */}
      <div className="hidden lg:flex lg:w-1/2">
      <img
  className="object-contain w-full h-full"
  src="/assets/pack.webp"
  alt="Your Company"
/>

      </div>

      {/* Right Column - Login Form */}
      <div className="flex flex-col justify-center px-6 py-12 mx-auto w-2/3 md: w-full mx-auto lg:px-8 lg:w-1/2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Come & Visit us</h2>
          <h2 className="mt-2 text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">P.O Box : 3309, Al Ras, Dubai, U.A.E</h2>
        </div>
 
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST" ref={form} onSubmit={sendEmail}>
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input id="email" name="from_name" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

          
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
              
              </div>
              <div class="mt-1">
                <input id="password" name="from_email" type="phone" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
              
              </div>
              <div class="mt-1">
  <textarea id="password" name="message" rows="5" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
</div>

            </div>
            <div>
              <button type="submit" class="flex w-1/2 mx-auto justify-center rounded-md bg-[#1A5D1A] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#970d0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
          </form>
        
        </div>
      </div>
    </div>
  );
}
