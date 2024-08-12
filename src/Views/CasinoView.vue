<template>
  <div class="casino-view min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        Experience Luxury
      </h1>

      <!-- Featured Game Section -->
      <div class="mb-16 relative overflow-hidden rounded-3xl">
        <img :src="featuredGame.image" alt="Featured Game" class="w-full h-96 object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-8">
          <h2 class="text-4xl font-bold mb-4">{{ featuredGame.name }}</h2>
          <p class="text-xl mb-6">{{ featuredGame.description }}</p>
          <button class="bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-red-600 transition duration-300 transform hover:scale-105">
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
                             selectedCategory === category ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900' : 'bg-gray-700 text-yellow-400']"
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
        <div class="flex flex-wrap gap-4">
          <button v-for="provider in providers" :key="provider"
                  :class="['py-1 px-4 rounded-full text-sm transition duration-300', 
                           selectedProviders.includes(provider) ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300']"
                  @click="toggleProvider(provider)">
            {{ provider }}
          </button>
        </div>
      </div>

      <!-- Casino Games Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="game in filteredGames"
          :key="game.id"
          class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 border border-gray-700"
        >
          <div class="relative">
            <img :src="game.image" :alt="game.name" class="w-full h-48 object-cover" />
            <div class="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 px-3 py-1 m-2 rounded-full text-xs font-bold transform rotate-3">
              {{ game.category }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2 text-yellow-400">{{ game.name }}</h3>
            <p class="text-gray-400 mb-4">{{ game.description }}</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">{{ game.provider }}</span>
              <span class="text-sm font-semibold text-green-400">RTP: {{ game.rtp }}%</span>
            </div>
            <button
              class="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-2 px-4 rounded-full hover:from-red-600 hover:to-pink-700 transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white py-3 px-8 rounded-full hover:from-yellow-500 hover:via-red-600 hover:to-pink-600 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
          Load More Games
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CasinoView",
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'All Games',
      selectedProviders: [],
      categories: ['All Games', 'Slots', 'Table Games', 'Live Casino', 'Jackpots'],
      providers: ['Evolution Gaming', 'NetEnt', 'Playtech', 'Microgaming', 'Pragmatic Play'],
      featuredGame: {
        name: "Mega Fortune Dreams",
        description: "Experience the ultimate luxury and win life-changing jackpots!",
        image: require("@/assets/banner1.jpg"),
      },
      casinoGames: [
        {
          id: 1,
          name: "Royal Flush Poker",
          description: "Experience the thrill of high-stakes poker.",
          image: require("@/assets/224.png"),
          category: "Table Game",
          provider: "Evolution Gaming",
          rtp: 97.3
        },
        {
          id: 2,
          name: "Mega Fortune Slots",
          description: "Spin to win mega jackpots and fortunes.",
          image: require("@/assets/224.png"),
          category: "Slot",
          provider: "NetEnt",
          rtp: 96.6
        },
        {
          id: 3,
          name: "VIP Blackjack",
          description: "Classic blackjack with a luxurious twist.",
          image: require("@/assets/224.png"),
          category: "Table Game",
          provider: "Playtech",
          rtp: 99.5
        },
        {
          id: 4,
          name: "Golden Roulette",
          description: "Place your bets on this golden wheel of fortune.",
          image: require("@/assets/224.png"),
          category: "Table Game",
          provider: "Microgaming",
          rtp: 97.3
        },
        // Add more casino games as needed
      ],
    };
  },
  computed: {
    filteredGames() {
      return this.casinoGames.filter(game => {
        const matchesSearch = game.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                              game.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory === 'All Games' || game.category === this.selectedCategory;
        const matchesProvider = this.selectedProviders.length === 0 || this.selectedProviders.includes(game.provider);
        return matchesSearch && matchesCategory && matchesProvider;
      });
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    toggleProvider(provider) {
      const index = this.selectedProviders.indexOf(provider);
      if (index > -1) {
        this.selectedProviders.splice(index, 1);
      } else {
        this.selectedProviders.push(provider);
      }
    }
  }
};
</script>

<style scoped>
.casino-view {
  background-image: url('@/assets/banner.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@keyframes sparkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.casino-view::before {
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