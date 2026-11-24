import express from 'express'


export const authRouter = express.Router()


authRouter.get('/register') //register user
authRouter.post('/login') //login user
authRouter.post('/logout') //logout user