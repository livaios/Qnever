const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt
const passport = require('passport')
const opts = {}
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'secret'
passport.use(
  new JWTStrategy(opts, async (jwt_payload, done) => {
    const { userID, userType } = jwt_payload
    return done(null, { userID, userType })
  })
)
