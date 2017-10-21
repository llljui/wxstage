import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)


import layout from '../page/layout/layout'
export default new Router({
  routes: [
     { path: '/',name:'首页',component: _import('layout/layout'), hidden: true },
     { path: '/login',name:'登录',component: _import('login/index'), hidden: true },
     {
      path:'/commission',
      component:layout,
      redirect: 'commission/commission',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'commission', name:'提成结算', component: _import('commission/commission') }]
    },
    {
      path:'/member',
      component:layout,
      redirect: 'member/member',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'member', name:'我的会员', component: _import('member/member') }]
    },
    {
      path:'/usercenter',
      component:layout,
      redirect: 'usercenter/usercenter',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'usercenter', name:'个人账户', component: _import('usercenter/usercenter') }]
    },
    {
      path:'/perrechanger',
      component:layout,
      redirect: 'perrechanger/perrechanger',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'perrechanger', name:'个人充值明细', component: _import('perrechanger/perrechanger') }]
    },
    {
      path:'/promoter',
      component:layout,
      redirect: 'promoter/promoter',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'promoter', name:'我的推广员', component: _import('promoter/promoter') }]
    },
    {
      path:'/teamrechanger',
      component:layout,
      redirect: 'teamrechanger/teamrechanger',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'teamrechanger', name:'团队充值统计', component: _import('teamrechanger/teamrechanger') }]
    },
    {
      path:'/diamondssold',
      component:layout,
      redirect: 'diamondssold/diamondssold',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'diamondssold', name:'钻石出售', component: _import('diamondssold/diamondssold') }]
    }
  ]
})
