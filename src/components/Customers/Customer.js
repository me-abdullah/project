import React from 'react';



function Customer() {
  return (
    <section class="bg-white ">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
            What our <span class="text-[#c62828] ">customers</span> say
        </h1>

       

        <div class="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div class="p-6 bg-gray-100 rounded-lg  md:p-8">
                <p class="leading-loose text-gray-500">
                    “Since using Hilwa Instant Full Cream Milk
Powder, my mornings have improved! Its rich taste,nutionts and easy disolving make it perfect for my coffee and cereal. Hilwa truly provides better milk for a better day!”.
                </p>

                <div class="flex items-center mt-6">
                    <img class="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                    
                    <div class="mx-4">
                        <h1 class="font-semibold text-[#1A5D1A]">Robbert</h1>

                    </div>
                </div>
            </div>

            <div class="p-6 bg-gray-100 rounded-lg md:p-8">
                <p class="leading-loose text-gray-500 ">
                    “Choosing Hilwa Instant Full Cream Milk Powder has been a game-changer. With its delightful flavour,easy making and nutionts. It's perfect addition to my morning routine”.
                </p>

                <div class="flex items-center mt-6">
                    <img class="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                    
                    <div class="mx-4">
                        <h1 class="font-semibold text-[#1A5D1A]">Mia Brown</h1>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Customer;