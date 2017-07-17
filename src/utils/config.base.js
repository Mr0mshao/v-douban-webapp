export default {
  menuBar: [
    {
      select: true,
      link: '/',
      name: 'Home',
      icon: null,
      badge: null
    },
    {
      select: false,
      link: '/movie',
      name: 'Movie',
      icon: null,
      badge: 1
    },
    {
      select: false,
      link: '/book',
      name: 'Book',
      icon: null,
      badge: null
    },
    {
      select: false,
      link: '/music',
      name: 'Music',
      icon: null,
      badge: null
    }
  ],
  baseURL: process.env.NODE_DEV === 'production' ? '' : 'http://localhost:8080'
}
