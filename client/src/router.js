import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Client/Home.vue';
import Hotel from './views/Client/Hotel.vue';
import Enquiry from './views/Client/Enquiry.vue';
import BookingConformation from './views/Client/BookingConformation.vue';
import Contact from './views/Client/Contact.vue';
import HotelDetail from './views/Client/HotelDetail.vue';
import DashBoard from "./views/Admin/DashBoard.vue";
import Admin from "./views/Admin/Admin.vue";
import Enquiries from './views/Admin/Enquiries.vue';
import Messages from './views/Admin/Messages.vue';
import Overview from './views/Admin/Overview.vue';
import NewEstablishment from './views/Admin/NewEstablishment.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: Hotel,
    },

    {
      path: '/hotelDetail/:id',
      name: 'hotelDetail',
      component: HotelDetail,
    },
    {
      path: '/enquiry',
      name: 'enquiry',
      component: Enquiry,
    },
    {
      path: '/bookingConformation',
      name: 'bookingConformation',
      component: BookingConformation,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: "/dashBoard",
      name: "dashBoard",
      component: DashBoard,
      meta: { requiresAuth: true },
      children:[
        {
          path: "overview",
          name: "overview",
          component: Overview
        },
        {
          path: "enquiries",
          name: "enquiries",
          component: Enquiries
        },
        {
          path: "messages",
          name: "messages",
          component: Messages
        },
        {
          path: "newEstablishment",
          name: "newEstablishment",
          component: NewEstablishment
        },
      ]
    },
  ],
});
