<template>
  <div class="slots-view min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
        Slot Games
      </h1>

      <!-- Featured Slot Section -->
      <div class="mb-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-3xl overflow-hidden shadow-2xl">
        <div class="p-8 flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-6 md:mb-0">
            <h2 class="text-4xl font-bold mb-4 text-gray-900">Featured: Mega Moolah</h2>
            <p class="text-xl mb-6 text-gray-800">Progressive jackpot now at $10,000,000!</p>
            <button class="bg-gray-900 text-yellow-400 font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300 transform hover:scale-105">
              Spin Now
            </button>
          </div>
          <div class="md:w-1/2">
            <img src="@/assets/banner1.jpg" alt="Mega Moolah" class="rounded-xl shadow-lg">
          </div>
        </div>
      </div>
      
      <!-- Filter and Search Section -->
      <div class="mb-12 bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl">
        <div class="flex flex-wrap justify-between items-center mb-6">
          <div class="flex flex-wrap gap-4 mb-4 sm:mb-0">
            <button v-for="category in categories" :key="category" 
                    :class="['py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg', 
                             selectedCategory === category ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900' : 'bg-gray-700 text-yellow-400']"
                    @click="selectCategory(category)">
              {{ category }}
            </button>
          </div>
          <div class="relative w-full sm:w-64">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search slots..." 
              class="w-full pl-10 pr-4 py-2 rounded-full bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 text-white placeholder-gray-400"
            />
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>

      <!-- Slot Games Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="game in filteredGames"
          :key="game.id"
          class="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 border border-gray-700"
        >
          <div class="relative">
            <img :src="game.image" :alt="game.name" class="w-full h-48 object-cover" />
            <div class="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-red-500 text-white px-3 py-1 m-2 rounded-full text-xs font-bold transform rotate-3">
              {{ game.category }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2 text-yellow-400">{{ game.name }}</h3>
            <p class="text-gray-400 mb-4">{{ game.description }}</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">{{ game.type }}</span>
              <span class="text-sm font-semibold text-green-400">Jackpot: {{ game.jackpot }}</span>
            </div>
            <button
              class="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-full hover:from-pink-600 hover:to-red-600 transition duration-300 transform hover:scale-105 hover:shadow-lg font-bold"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white py-3 px-8 rounded-full hover:from-yellow-500 hover:via-pink-600 hover:to-red-600 transition duration-300 transform hover:scale-105 hover:shadow-2xl font-bold">
          Load More Games
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlotsView",
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'All Slots',
      categories: ['All Slots', 'Classic', 'Video', 'Progressive', '3D'],
      slotGames: [
        {
          id: 1,
          name: "Golden Slot: Pharaoh's Fortune",
          description: "Uncover the riches of the Pharaohs in this thrilling slot game.",
          image: require("@/assets/229.png"),
          category: "Classic Slot",
          type: "5 Reels",
          jackpot: "$10,000"
        },
        {
          id: 2,
          name: "Vegas Nights",
          description: "Experience the bright lights and big wins of Las Vegas.",
          image: require("@/assets/229.png"),
          category: "Video Slot",
          type: "3 Reels",
          jackpot: "$7,500"
        },
        {
          id: 3,
          name: "Pirate's Treasure",
          description: "Sail the high seas in search of hidden treasure.",
          image: require("@/assets/229.png"),
          category: "Adventure Slot",
          type: "6 Reels",
          jackpot: "$12,000"
        },
        {
          id: 4,
          name: "Mystic Fortune",
          description: "Spin the reels to unlock mystical fortunes and ancient secrets.",
          image: require("@/assets/229.png"),
          category: "Mystery Slot",
          type: "4 Reels",
          jackpot: "$15,000"
        },
        // Add more slot games as needed
      ],
    };
  },
  computed: {
    filteredGames() {
      return this.slotGames.filter(game => {
        const matchesSearch = game.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                              game.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory === 'All Slots' || game.category.includes(this.selectedCategory);
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
.slots-view {
  background-image: url('@/assets/banner.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.slots-view::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(255, 105, 180, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 40% 60%, rgba(255, 0, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 60% 80%, rgba(0, 191, 255, 0.1) 1px, transparent 1px);
  background-size: 100% 100%;
  animation: spin 30s linear infinite;
  pointer-events: none;
}
</style>