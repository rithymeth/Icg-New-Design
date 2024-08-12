<template>
  <div class="fishing-games-view min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-400">
        Fishing Games
      </h1>

      <!-- Featured Game Section -->
      <div class="mb-16 relative overflow-hidden rounded-3xl">
        <img :src="featuredGame.image" alt="Featured Fishing Game" class="w-full h-96 object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-8">
          <h2 class="text-4xl font-bold mb-4">{{ featuredGame.name }}</h2>
          <p class="text-xl mb-6">{{ featuredGame.description }}</p>
          <button class="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-green-600 transition duration-300 transform hover:scale-105">
            Play Now
          </button>
        </div>
      </div>
      
      <!-- Filter and Search Section -->
      <div class="mb-12 bg-blue-800 p-6 rounded-2xl border border-blue-700 shadow-2xl">
        <div class="flex flex-wrap justify-between items-center mb-6">
          <div class="flex flex-wrap gap-4 mb-4 sm:mb-0">
            <button v-for="category in categories" :key="category" 
                    :class="['py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg', 
                             selectedCategory === category ? 'bg-gradient-to-r from-blue-400 to-green-500 text-white' : 'bg-blue-700 text-teal-400']"
                    @click="selectCategory(category)">
              {{ category }}
            </button>
          </div>
          <div class="relative w-full sm:w-64">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search games..." 
              class="w-full pl-10 pr-4 py-2 rounded-full bg-blue-700 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 text-white placeholder-blue-400"
            />
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"></i>
          </div>
        </div>
      </div>

      <!-- Fishing Games Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="game in filteredGames"
          :key="game.id"
          class="bg-blue-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 border border-blue-700"
        >
          <div class="relative">
            <img :src="game.image" :alt="game.name" class="w-full h-48 object-cover" />
            <div class="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-green-500 text-white px-3 py-1 m-2 rounded-full text-xs font-bold transform rotate-3">
              {{ game.category }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2 text-teal-400">{{ game.name }}</h3>
            <p class="text-blue-300 mb-4">{{ game.description }}</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm font-semibold text-blue-400">Max Win: {{ game.maxWin }}x</span>
              <span class="text-sm font-semibold text-green-400">RTP: {{ game.rtp }}%</span>
            </div>
            <button
              class="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-full hover:from-blue-600 hover:to-green-600 transition duration-300 transform hover:scale-105 hover:shadow-lg font-bold"
            >
              Cast Your Line
            </button>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 text-white py-3 px-8 rounded-full hover:from-blue-500 hover:via-teal-600 hover:to-green-500 transition duration-300 transform hover:scale-105 hover:shadow-2xl font-bold">
          Load More Games
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FishingGamesView",
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'All Games',
      categories: ['All Games', 'Popular', 'New', 'High Stakes'],
      featuredGame: {
        name: "Deep Sea Treasures",
        description: "Dive into the depths and reel in massive rewards in this exciting underwater adventure!",
        image: require("@/assets/banner1.jpg"),
      },
      fishingGames: [
        {
          id: 1,
          name: "Deep Sea Treasures",
          description: "Explore the ocean depths for hidden riches!",
          image: require("@/assets/224.png"),
          category: "Popular",
          maxWin: 5000,
          rtp: 96.5
        },
        {
          id: 2,
          name: "Golden Catch",
          description: "Cast your line for the legendary golden fish!",
          image: require("@/assets/224.png"),
          category: "High Stakes",
          maxWin: 10000,
          rtp: 97.2
        },
        {
          id: 3,
          name: "Tropical Fish Frenzy",
          description: "Catch colorful fish in this tropical paradise!",
          image: require("@/assets/224.png"),
          category: "New",
          maxWin: 3000,
          rtp: 95.8
        },
        {
          id: 4,
          name: "Arctic Angler",
          description: "Brave the icy waters for rare arctic catches!",
          image: require("@/assets/224.png"),
          category: "Popular",
          maxWin: 7500,
          rtp: 96.9
        },
        // Add more fishing games as needed
      ],
    };
  },
  computed: {
    filteredGames() {
      return this.fishingGames.filter(game => {
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
.fishing-games-view {
  background-image: url('@/assets/banner.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@keyframes sparkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.fishing-games-view::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 100% 100%;
  animation: sparkle 5s infinite;
  pointer-events: none;
}
</style>