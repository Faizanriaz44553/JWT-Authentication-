import express from 'express'
import { forgetController, loginController, logoutController, registerController } from '../controllers/authController.js'
import authMidleware from '../middleware/authMidleware.js'
import dashboard from '../controllers/dashboardController.js'


const authRoutes = express.Router()


authRoutes.post('/register', registerController)
authRoutes.post('/login', loginController)
authRoutes.get('/logout', logoutController)
authRoutes.post('/forget-password', forgetController)
authRoutes.get('/dashboard', authMidleware, dashboard);


export default authRoutes