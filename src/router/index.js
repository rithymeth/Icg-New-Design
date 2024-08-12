import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../Views/HomeView.vue';
import CasinoView from '../Views/CasinoView.vue';
import SlotsView from '../Views/SlotsView.vue';
import TableGamesView from '../Views/TableGamesView.vue';
import CrashGamesView from '../Views/CrashGamesView.vue';
import FishingGamesView from '../Views/FishingGamesView.vue';
import ArcadeView from '../Views/ArcadeView.vue';
import LottoView from '../Views/LottoView.vue';
import PromotionsView from '../Views/PromotionsView.vue';
import SportView from '../Views/SportView.vue';
import DownloadView from '../Views/DownloadView.vue';
import AffiliateView from '../Views/AffiliateView.vue';
import AmbassadorView from '../Views/AmbassadorView.vue';
import HelpView from '../Views/HelpView.vue';
import ContactUsView from '../Views/ContactUsView.vue';
import LiveBettingView from '../Views/LiveBettingView.vue';
import LiveCasinoView from '../Views/LiveCasinoView.vue';
import LoginRegisterPage from '@/Views/LoginRegisterPage.vue';
import VipView from '@/Views/VipView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/casino', name: 'Casino', component: CasinoView },
  { path: '/slots', name: 'Slots', component: SlotsView },
  { path: '/table-games', name: 'TableGames', component: TableGamesView },
  { path: '/crash-games', name: 'CrashGames', component: CrashGamesView },
  { path: '/fishing-games', name: 'FishingGames', component: FishingGamesView },
  { path: '/arcade', name: 'Arcade', component: ArcadeView },
  { path: '/lotto', name: 'Lotto', component: LottoView },
  { path: '/promotions', name: 'Promotions', component: PromotionsView },
  { path: '/sport', name: 'sport', component: SportView },
  { path: '/download', name: 'Download', component: DownloadView },
  { path: '/affiliate', name: 'Affiliate', component: AffiliateView },
  { path: '/ambassador', name: 'Ambassador', component: AmbassadorView },
  { path: '/help', name: 'Help', component: HelpView },
  { path: '/contact-us', name: 'ContactUs', component: ContactUsView },
  { path: '/live-casino', name: 'LiveCasino', component: LiveCasinoView },
  { path: '/live-betting', name: 'LiveBetting', component: LiveBettingView },
  { path: '/auth', name: 'login', component: LoginRegisterPage },
  { path: '/vip', name: 'vip', component: VipView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
