<template>
  <div
    class="home-page bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen relative overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <div
        class="absolute inset-0 bg-cover bg-center opacity-10"
        :style="{ backgroundImage: `url(${require('@/assets/banner.jpg')})` }"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-teal-900/50"
      ></div>
    </div>

    <!-- Slide Banner -->
    <section class="relative h-[30vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
      <transition-group name="fade" tag="div">
        <div
          v-for="(slide, index) in bannerSlides"
          :key="slide.id"
          v-show="currentSlide === index"
          class="absolute inset-0"
        >
          <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"
          ></div>
          <div class="absolute inset-0 flex items-center">
            <div class="container mx-auto px-4">
              <div class="max-w-2xl">
                <h2 class="text-xl md:text-4xl lg:text-6xl font-bold mb-4 text-white">
                  {{ slide.title }}
                </h2>
                <p class="text-sm md:text-xl lg:text-2xl mb-8 text-gray-300">
                  {{ slide.description }}
                </p>
                <button
                  class="bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold py-2 px-4 md:py-3 md:px-8 rounded-full hover:from-yellow-300 hover:to-red-400 transition duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {{ slide.ctaText }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          v-for="(slide, index) in bannerSlides"
          :key="slide.id"
          @click="currentSlide = index"
          :class="[
            'w-3 h-3 rounded-full transition duration-300',
            currentSlide === index ? 'bg-yellow-400' : 'bg-gray-400',
          ]"
        ></button>
      </div>
    </section>

    <!-- Game Categories -->
    <section class="py-16 relative z-10">
      <div class="container mx-auto px-4">
        <h2
          class="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
        >
          Game Categories
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="category in gameCategories"
            :key="category.id"
            class="category-card bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 text-center transition-all duration-300 hover:bg-gray-700/60 cursor-pointer transform hover:scale-105 hover:rotate-3 hover:shadow-2xl border border-gray-700/50"
            @mouseenter="startAnimation"
            @mouseleave="stopAnimation"
          >
            <div class="icon-wrapper mb-4">
              <span class="text-4xl text-yellow-400">{{ category.icon }}</span>
            </div>
            <h3 class="text-xl font-bold">{{ category.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Games Carousel -->
    <section class="py-16 relative z-10">
      <div class="container mx-auto px-4">
        <h2
          class="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
        >
          Popular Games
        </h2>
        <div class="relative">
          <div
            class="popular-games-carousel flex space-x-4 overflow-x-auto touch-auto scrollbar-hide"
          >
            <div
              v-for="game in popularGames"
              :key="game.id"
              class="flex-none w-48 md:w-64 transform transition-all duration-300 hover:scale-105 hover:rotate-3"
            >
              <div
                class="bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-700/50"
              >
                <img
                  :src="game.image"
                  :alt="game.name"
                  class="w-full h-32 md:h-40 object-cover"
                />
                <div class="p-4">
                  <h3 class="font-bold text-lg mb-2">{{ game.name }}</h3>
                  <p class="text-sm text-gray-400 mb-4">{{ game.provider }}</p>
                  <button
                    class="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-black text-sm font-bold py-2 px-4 rounded-full hover:from-yellow-300 hover:to-red-400 transition duration-200 hover:shadow-lg"
                  >
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Jackpot Section -->
    <section class="py-16 relative z-10">
      <div class="container mx-auto px-4">
        <h2
          class="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
        >
          Current Jackpots
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="jackpot in jackpots"
            :key="jackpot.id"
            class="jackpot-card bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <h3 class="text-2xl font-bold mb-4">{{ jackpot.name }}</h3>
            <p class="text-yellow-400 text-4xl font-bold mb-2">{{ jackpot.amount }}</p>
            <p class="text-gray-300 text-sm">{{ jackpot.description }}</p>
            <button
              class="mt-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold py-2 px-4 rounded-full hover:from-yellow-300 hover:to-red-400 transition duration-300 hover:shadow-lg"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- VIP Section -->
    <section class="py-16 relative z-10">
      <div class="container mx-auto px-4">
        <h2
          class="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
        >
          Join Our VIP Club
        </h2>
        <div
          class="bg-gray-800/60 backdrop-blur-sm rounded-lg p-8 text-center shadow-lg border border-gray-700/50 transition-all duration-300 hover:shadow-2xl"
        >
          <h3 class="text-2xl font-bold mb-4">Exclusive Benefits</h3>
          <p class="text-gray-300 mb-8">
            Unlock amazing rewards, cashbacks, and exclusive bonuses as a VIP member!
          </p>
          <button
            class="bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-300 hover:to-red-400 transition duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 relative z-10">
      <div class="container mx-auto px-4">
        <h2
          class="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
        >
          What Our Players Say
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="testimonial-card bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <p class="text-gray-300 mb-4">{{ testimonial.message }}</p>
            <p class="text-yellow-400 font-bold">{{ testimonial.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Providers Section -->
    <section class="py-16 relative z-10">
      <div class="container mx-auto px-4">
        <h2
          class="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
        >
          Featured Game Providers
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          <div
            v-for="provider in providers"
            :key="provider.id"
            class="provider-card bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-700/50"
          >
            <img :src="provider.logo" :alt="provider.name" class="h-16 mx-auto mb-2" />
            <p class="text-gray-300 text-center text-sm">{{ provider.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="absolute inset-0 z-0 pointer-events-none">
      <div
        v-for="n in 20"
        :key="n"
        class="absolute w-1 h-1 bg-yellow-400 rounded-full animate-twinkle"
        :style="{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "HomeView",
  data() {
    return {
      currentSlide: 0,
      bannerSlides: [
        {
          id: 1,
          title: "Welcome Bonus Extravaganza",
          description: "Get up to $1000 + 200 Free Spins on your first deposit!",
          image: require("@/assets/banner.jpg"),
          ctaText: "Claim Now",
        },
        {
          id: 2,
          title: "Weekly Cashback Offer",
          description: "Enjoy 15% cashback on your losses every week!",
          image: require("@/assets/banner1.jpg"),
          ctaText: "Learn More",
        },
        {
          id: 3,
          title: "Tournament Madness",
          description: "Join our $100,000 slots tournament and win big!",
          image: require("@/assets/banner2.jpg"),
          ctaText: "Join Now",
        },
      ],
      gameCategories: [
        { id: 1, name: "Slots", icon: "🎰" },
        { id: 2, name: "Table Games", icon: "🃏" },
        { id: 3, name: "Live Casino", icon: "🎥" },
        { id: 4, name: "Poker", icon: "♠️" },
        { id: 5, name: "Roulette", icon: "🎡" },
        { id: 6, name: "Blackjack", icon: "🂡" },
        { id: 7, name: "Baccarat", icon: "💎" },
        { id: 8, name: "Bingo", icon: "🎱" },
        { id: 9, name: "Keno", icon: "🔢" },
        { id: 10, name: "Scratch Cards", icon: "🎟️" },
        { id: 11, name: "Sports Betting", icon: "⚽" },
        { id: 12, name: "Virtual Sports", icon: "🏃" },
      ],
      popularGames: [
        {
          id: 1,
          name: "Starburst",
          provider: "NetEnt",
          image: require("@/assets/1.png"),
        },
        {
          id: 2,
          name: "Gonzo's Quest",
          provider: "NetEnt",
          image: require("@/assets/2.png"),
        },
        {
          id: 3,
          name: "Book of Dead",
          provider: "Play'n GO",
          image: require("@/assets/3.png"),
        },
        {
          id: 4,
          name: "Mega Moolah",
          provider: "Microgaming",
          image: require("@/assets/4.png"),
        },
        {
          id: 5,
          name: "Reactoonz",
          provider: "Play'n GO",
          image: require("@/assets/5.png"),
        },
        {
          id: 6,
          name: "Immortal Romance",
          provider: "Microgaming",
          image: require("@/assets/6.png"),
        },
        {
          id: 7,
          name: "Dead or Alive 2",
          provider: "NetEnt",
          image: require("@/assets/6.png"),
        },
        {
          id: 8,
          name: "Jammin' Jars",
          provider: "Push Gaming",
          image: require("@/assets/7.png"),
        },
      ],
      visibleGamesStart: 0,
      visibleGamesCount: 5,
      jackpots: [
        {
          id: 1,
          name: "Mega Moolah",
          amount: "$1,234,567",
          description: "Win the big prize on this classic slot!",
        },
        {
          id: 2,
          name: "Major Millions",
          amount: "$678,901",
          description: "Big wins await on Major Millions!",
        },
        {
          id: 3,
          name: "Hall of Gods",
          amount: "$456,789",
          description: "Join the gods and win massive prizes!",
        },
      ],
      testimonials: [
        {
          id: 1,
          name: "John D.",
          message: "Amazing experience! Won big on my first spin!",
        },
        {
          id: 2,
          name: "Sarah K.",
          message: "Love the VIP rewards, they really make a difference!",
        },
        {
          id: 3,
          name: "Mike W.",
          message: "The best casino online, hands down.",
        },
      ],
      providers: [
        { id: 1, name: "NetEnt", logo: require("@/assets/casino-1.png") },
        { id: 2, name: "Microgaming", logo: require("@/assets/casino-3.png") },
        { id: 3, name: "Play'n GO", logo: require("@/assets/casino-12.png") },
        { id: 4, name: "Yggdrasil", logo: require("@/assets/casino-14.png") },
        { id: 5, name: "Pragmatic Play", logo: require("@/assets/cock-2.png") },
        { id: 6, name: "Evolution Gaming", logo: require("@/assets/dg99_casino.png") },
        { id: 7, name: "Playtech", logo: require("@/assets/horse_racing.png") },
        { id: 8, name: "Quickspin", logo: require("@/assets/slot-2.png") },
        { id: 9, name: "Red Tiger", logo: require("@/assets/slot-3.png") },
        { id: 10, name: "Betsoft", logo: require("@/assets/slot-7.png") },
        { id: 11, name: "ELK Studios", logo: require("@/assets/sport-5.png") },
        { id: 12, name: "Thunderkick", logo: require("@/assets/sport-2.png") },
      ],
    };
  },
  computed: {
    visibleGames() {
      return this.popularGames.slice(
        this.visibleGamesStart,
        this.visibleGamesStart + this.visibleGamesCount
      );
    },
  },
  methods: {
    startAnimation(event) {
      const target = event.currentTarget.querySelector(".icon-wrapper");
      anime({
        targets: target,
        rotateY: "360deg",
        duration: 1000,
        easing: "easeInOutSine",
      });
    },
    stopAnimation(event) {
      const target = event.currentTarget.querySelector(".icon-wrapper");
      anime({
        targets: target,
        rotateY: "0deg",
        duration: 1000,
        easing: "easeInOutSine",
      });
    },
    slideGames(direction) {
      if (direction === "next") {
        this.visibleGamesStart = (this.visibleGamesStart + 1) % this.popularGames.length;
      } else {
        this.visibleGamesStart =
          (this.visibleGamesStart - 1 + this.popularGames.length) %
          this.popularGames.length;
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.bannerSlides.length;
    },
  },
  mounted() {
    setInterval(this.nextSlide, 5000); // Change slide every 5 seconds
  },
};
</script>

<style scoped>
/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Ensure smooth touch scrolling */
.touch-auto {
  -webkit-overflow-scrolling: touch;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.animate-twinkle {
  animation: twinkle 5s infinite;
}

.category-card {
  perspective: 1000px;
}

.icon-wrapper {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.category-card:hover .icon-wrapper {
  animation: float 2s ease-in-out infinite;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.testimonial-card {
  position: relative;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 4rem;
  color: rgba(251, 191, 36, 0.2);
  font-family: sans-serif;
}

.provider-card img {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.provider-card:hover img {
  filter: grayscale(0%);
}
</style>
