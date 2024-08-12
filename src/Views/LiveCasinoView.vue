<template>
  <div class="live-casino-view min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-400">
        Live Casino
      </h1>

      <!-- Featured Game Section -->
      <div class="mb-16 relative overflow-hidden rounded-3xl">
        <img :src="featuredGame.image" alt="Featured Live Game" class="w-full h-96 object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-8">
          <h2 class="text-4xl font-bold mb-4">{{ featuredGame.name }}</h2>
          <p class="text-xl mb-6">{{ featuredGame.description }}</p>
          <button class="bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-full hover:from-red-600 hover:to-yellow-600 transition duration-300 transform hover:scale-105">
            Join Table
          </button>
        </div>
      </div>
      
      <!-- Filter and Search Section -->
      <div class="mb-12 bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl">
        <div class="flex flex-wrap justify-between items-center mb-6">
          <div class="flex flex-wrap gap-4 mb-4 sm:mb-0">
            <button v-for="category in categories" :key="category" 
                    :class="['py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg', 
                             selectedCategory === category ? 'bg-gradient-to-r from-red-400 to-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400']"
                    @click="selectCategory(category)">
              {{ category }}
            </button>
          </div>
          <div class="relative w-full sm:w-64">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search games..." 
              class="w-full pl-10 pr-4 py-2 rounded-full bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 text-white placeholder-gray-400"
            />
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>

      <!-- Live Casino Games Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="game in filteredGames"
          :key="game.id"
          class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 border border-gray-700"
        >
          <div class="relative">
            <img :src="game.image" :alt="game.name" class="w-full h-48 object-cover" />
            <div class="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 m-2 rounded-full text-xs font-bold transform rotate-3 animate-pulse">
              LIVE
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2 text-yellow-400">{{ game.name }}</h3>
            <p class="text-gray-400 mb-4">{{ game.description }}</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">{{ game.dealer }}</span>
              <span class="text-sm font-semibold text-green-400">{{ game.betRange }}</span>
            </div>
            <button
              class="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-full hover:from-green-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 hover:shadow-lg font-bold"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-gradient-to-r from-red-400 via-yellow-500 to-green-400 text-white py-3 px-8 rounded-full hover:from-red-500 hover:via-yellow-600 hover:to-green-500 transition duration-300 transform hover:scale-105 hover:shadow-2xl font-bold">
          Load More Games
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LiveCasinoView",
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'All Games',
      categories: ['All Games', 'Roulette', 'Blackjack', 'Baccarat', 'Poker'],
      featuredGame: {
        name: "VIP Blackjack",
        description: "Join our exclusive VIP Blackjack table for high-stakes action!",
        image: require("@/assets/banner1.jpg"),
      },
      liveGames: [
        {
          id: 1,
          name: "Lightning Roulette",
          description: "Experience the thrill of lightning multipliers!",
          image: require("@/assets/224.png"),
          category: "Roulette",
          dealer: "Emma",
          betRange: "$1 - $1000"
        },
        {
          id: 2,
          name: "Infinite Blackjack",
          description: "Never wait for a seat with infinite players!",
          image: require("@/assets/224.png"),
          category: "Blackjack",
          dealer: "John",
          betRange: "$5 - $2500"
        },
        {
          id: 3,
          name: "Speed Baccarat",
          description: "Fast-paced baccarat action!",
          image: require("@/assets/224.png"),
          category: "Baccarat",
          dealer: "Sophia",
          betRange: "$10 - $5000"
        },
        {
          id: 4,
          name: "Caribbean Stud Poker",
          description: "Test your skills against the house!",
          image: require("@/assets/224.png"),
          category: "Poker",
          dealer: "Michael",
          betRange: "$5 - $1000"
        },
        // Add more live games as needed
      ],
    };
  },
  computed: {
    filteredGames() {
      return this.liveGames.filter(game => {
        const matchesSearch = game.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                              game.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory === 'All Games' || game.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      });
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    }
  }
};
</script>

<style scoped>
.live-casino-view {
  background-image: url('@/assets/banner.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.live-casino-view::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(255,215,0,0) 0%, rgba(255,215,0,0.1) 50%, rgba(255,215,0,0) 100%);
  background-size: 1000px 100%;
  animation: shimmer 5s infinite linear;
  pointer-events: none;
}
</style>