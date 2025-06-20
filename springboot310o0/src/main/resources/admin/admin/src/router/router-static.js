import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import discussyiqingchangshi from '@/views/modules/discussyiqingchangshi/list'
    import discussbaojianpin from '@/views/modules/discussbaojianpin/list'
    import baojianpin from '@/views/modules/baojianpin/list'
    import news from '@/views/modules/news/list'
    import yiqingchangshi from '@/views/modules/yiqingchangshi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import baojianpinfenlei from '@/views/modules/baojianpinfenlei/list'
    import orders from '@/views/modules/orders/list'
    import discussyaopinxinxi from '@/views/modules/discussyaopinxinxi/list'
    import yaopinxinxi from '@/views/modules/yaopinxinxi/list'
    import config from '@/views/modules/config/list'
    import yaopinfenlei from '@/views/modules/yaopinfenlei/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/discussyiqingchangshi',
        name: '疫情常识评论',
        component: discussyiqingchangshi
      }
      ,{
	path: '/discussbaojianpin',
        name: '保健品评论',
        component: discussbaojianpin
      }
      ,{
	path: '/baojianpin',
        name: '保健品',
        component: baojianpin
      }
      ,{
	path: '/news',
        name: '系统公告',
        component: news
      }
      ,{
	path: '/yiqingchangshi',
        name: '疫情常识',
        component: yiqingchangshi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/baojianpinfenlei',
        name: '保健品分类',
        component: baojianpinfenlei
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/discussyaopinxinxi',
        name: '药品信息评论',
        component: discussyaopinxinxi
      }
      ,{
	path: '/yaopinxinxi',
        name: '药品信息',
        component: yaopinxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/yaopinfenlei',
        name: '药品分类',
        component: yaopinfenlei
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
