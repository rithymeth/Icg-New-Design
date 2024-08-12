<template>
    <div class="vip-page min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400">
          VIP Club
        </h1>
  
        <!-- VIP Banner -->
        <div class="vip-banner relative rounded-lg overflow-hidden shadow-2xl mb-12">
          <img src="@/assets/banner.jpg" alt="VIP Banner" class="w-full h-64 object-cover opacity-80" />
          <div class="absolute inset-0 flex items-center justify-center">
            <h2 class="text-4xl font-bold text-yellow-400">Exclusive Benefits Await</h2>
          </div>
        </div>
  
        <!-- VIP Perks -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="vip-perk p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4 text-yellow-400">Priority Support</h3>
            <p class="text-gray-300">As a VIP member, you’ll receive priority customer support, ensuring that your needs are always met with the utmost care and attention.</p>
          </div>
          <div class="vip-perk p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4 text-yellow-400">Exclusive Bonuses</h3>
            <p class="text-gray-300">Enjoy special bonuses and promotions tailored just for our VIP members, enhancing your gaming experience to the next level.</p>
          </div>
          <div class="vip-perk p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4 text-yellow-400">Personal Account Manager</h3>
            <p class="text-gray-300">Get a dedicated account manager who will personally assist you with all your gaming needs, ensuring a seamless and personalized experience.</p>
          </div>
          <div class="vip-perk p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4 text-yellow-400">Exclusive Events</h3>
            <p class="text-gray-300">Receive invitations to exclusive events and tournaments, where you can compete against other VIPs and win luxurious prizes.</p>
          </div>
        </div>
  
        <!-- VIP Signup CTA -->
        <div class="mt-16 text-center">
          <h3 class="text-3xl font-bold mb-6 text-yellow-400">Join the Elite Club Today</h3>
          <button class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 px-8 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition duration-300 transform hover:scale-105 hover:shadow-lg">
            Become a VIP Member
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "VIPPage",
  };
  </script>
  
  <style scoped>
  .vip-page {
    background-image: url('@/assets/banner.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .vip-banner::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  }
  
  .vip-perk:hover {
    background: linear-gradient(to right, rgba(255, 215, 0, 0.2), rgba(255, 69, 0, 0.2));
    transition: background 0.5s ease;
  }
  </style>
  