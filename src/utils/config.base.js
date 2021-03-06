export default {
  menuBar: [
    {
      select: false,
      link: '/coming',
      name: 'Coming',
      icon: null,
      badge: 1
    },
    {
      select: false,
      link: '/top',
      name: 'Top',
      icon: null,
      badge: null
    },
    {
      select: true,
      link: '/',
      name: 'Home',
      icon: null,
      badge: null
    },
    {
      select: false,
      link: '/rank',
      name: 'Rank',
      icon: null,
      badge: null
    },
    {
      select: false,
      link: '/search',
      name: 'Search',
      icon: null,
      badge: null
    }
  ],
  movieBar: [
    {
      lineWidth: 3,
      isSelect: true,
      link: '/movie/',
      title: '正在热映'
    },
    {
      lineWidth: 3,
      isSelect: false,
      link: '/movie/coming',
      title: '即将上映'
    },
    {
      lineWidth: 3,
      isSelect: false,
      link: '/movie/top',
      title: 'TOP榜单'
    },
    {
      lineWidth: 3,
      isSelect: false,
      link: '/movie/rank',
      title: '北美排行'
    },
    {
      lineWidth: 3,
      isSelect: false,
      link: '/movie/search',
      title: '电影搜索'
    }
  ],
  baseURL: process.env.NODE_DEV === 'production' ? '' : 'http://localhost:8080',
  getContentHeight: function () {
    let height = 0
    if (window.innerHeight) {
      height = window.innerHeight
    } else if ((document.body) && (document.body.clientHeight)) {
      height = document.body.clientHeight
    }
    if (document.documentElement && document.documentElement.clientHeight) {
      height = document.documentElement.clientHeight
    }
    return height
  }
}
