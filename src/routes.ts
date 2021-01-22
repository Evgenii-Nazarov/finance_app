export default [
  {
    path: '/',
    component: '@/layout/GeneralLayout',
    routes: [
      { path: '/', component: '@/pages/Trans/Calendar/CalendarCustom' },
      { path: '/days', component: '@/pages/Trans/Calendar/CalendarCustom' },
    ],
  },
];
