import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/users.model.js';
import dotenv from 'dotenv';

dotenv.config();

const jwtOptions = {
  secretOrKey: process.env.JWT_SECRET || 'default_secret',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    
    console.log("JWT Payload Received:", payload);  

    const user = await User.findById(payload.id);
    if (!user) {
      console.log("User not found in DB");
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return done(error, false);
  }
};
passport.use(new JwtStrategy(jwtOptions, jwtVerify));

export default passport;