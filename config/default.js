module.exports = {
  port: 3000,
  hostname: '0.0.0.0',
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myblog'
}
