import express from 'express'


export const tradesRouter = express.Router()


tradesRouter.get('/') //get all trades
tradesRouter.get('/:id') //get 1 trade
tradesRouter.post('/') //post a trade

tradesRouter.patch('/') //update field/add notes to a trade