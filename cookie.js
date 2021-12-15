const cookieSession = require('cookie-session')

module.exports = cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: new Date(Date.now() + 8 * 3600000)
})
