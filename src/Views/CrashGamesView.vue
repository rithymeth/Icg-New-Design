<template>
  <div class="crash-games-view min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-400">
        Crash Games
      </h1>

      <!-- Featured Game Section -->
      <div class="mb-16 relative overflow-hidden rounded-3xl">
        <img :src="featuredGame.image" alt="Featured Crash Game" class="w-full h-96 object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-8">
          <h2 class="text-4xl font-bold mb-4">{{ featuredGame.name }}</h2>
          <p class="text-xl mb-6">{{ featuredGame.description }}</p>
          <button class="bg-gradient-to-r from-red-500 to-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:from-red-600 hover:to-yellow-600 transition duration-300 transform hover:scale-105">
            Play Now
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

      <!-- Crash Games Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="game in filteredGames"
          :key="game.id"
          class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 border border-gray-700"
        >
          <div class="relative">
            <img :src="game.image" :alt="game.name" class="w-full h-48 object-cover" />
            <div class="absolute top-0 right-0 bg-gradient-to-r from-red-400 to-yellow-500 text-gray-900 px-3 py-1 m-2 rounded-full text-xs font-bold transform rotate-3">
              {{ game.category }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2 text-yellow-400">{{ game.name }}</h3>
            <p class="text-gray-400 mb-4">{{ game.description }}</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">Max Multiplier: {{ game.maxMultiplier }}x</span>
              <span class="text-sm font-semibold text-green-400">Min Bet: ${{ game.minBet }}</span>
            </div>
            <button
              class="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-gray-900 py-2 px-4 rounded-full hover:from-red-600 hover:to-yellow-600 transition duration-300 transform hover:scale-105 hover:shadow-lg font-bold"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-gradient-to-r from-red-400 via-yellow-500 to-green-400 text-gray-900 py-3 px-8 rounded-full hover:from-red-500 hover:via-yellow-600 hover:to-green-500 transition duration-300 transform hover:scale-105 hover:shadow-2xl font-bold">
          Load More Games
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CrashGamesView",
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'All Games',
      categories: ['All Games', 'Popular', 'New', 'High Stakes'],
      featuredGame: {
        name: "Rocket Crash",
        description: "Watch the rocket soar and cash out before it crashes for massive multipliers!",
        image: require("@/assets/banner1.jpg"),
      },
      crashGames: [
        {
          id: 1,
          name: "Rocket Crash",
          description: "Ride the rocket to epic multipliers!",
          image: require("@/assets/224.png"),
          category: "Popular",
          maxMultiplier: 1000,
          minBet: 0.10
        },
        {
          id: 2,
          name: "Aviator",
          description: "Fly high and cash out before the plane leaves!",
          image: require("@/assets/224.png"),
          category: "High Stakes",
          maxMultiplier: 500,
          minBet: 1.00
        },
        {
          id: 3,
          name: "Moon Crash",
          description: "Reach for the moon and beyond!",
          image: require("@/assets/224.png"),
          category: "New",
          maxMultiplier: 10000,
          minBet: 0.05
        },
        {
          id: 4,
          name: "Balloon Pop",
          description: "How high can you go before the balloon pops?",
          image: require("@/assets/224.png"),
          category: "Popular",
          maxMultiplier: 200,
          minBet: 0.20
        },
        // Add more crash games as needed
      ],
    };
  },
  computed: {
    filteredGames() {
      return this.crashGames.filter(game => {
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
.crash-games-view {
  background-image: url('@/assets/banner.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@keyframes sparkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.crash-games-view::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.2) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(255, 215, 0, 0.2) 1px, transparent 1px),
    radial-gradient(circle at 40% 60%, rgba(255, 215, 0, 0.2) 1px, transparent 1px),
    radial-gradient(circle at 60% 80%, rgba(255, 215, 0, 0.2) 1px, transparent 1px);
  background-size: 100% 100%;
  animation: sparkle 5s infinite;
  pointer-events: none;
}
</style>