import express from 'express'
import { forgetController, loginController, logoutController, registerController } from '../controllers/authController.js'


const authRoutes = express.Router()


authRoutes.post('/register', registerController)
authRoutes.post('/login', loginController)
authRoutes.post('/logout', logoutController)
authRoutes.post('/forget-password', forgetController)


export default authRoutes