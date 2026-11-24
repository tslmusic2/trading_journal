import express from 'express'
import cors from 'cors'
import { authRouter } from './routers/authRouters.ts'
import { tradesRouter } from './routers/tradesRouters.ts'

const PORT = 8000


const app = express()

app.use(cors())
app.use(express.json())


app.use('api/auth', authRouter)
app.use('api/trades', tradesRouter)



app.use((req, res) => {
    res.status(404).json({message: 'Endpoint not found'})
})


app.listen(PORT, () => {`Connected on port: ${PORT}`})