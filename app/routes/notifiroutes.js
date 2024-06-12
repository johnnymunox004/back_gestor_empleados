import express from "express"
import {createNotification, getNotification, deleteNotification,getAllNotifications } from '../controllers/notifiController.js'

const notifiRoutes = express.Router();



notifiRoutes.post('/notifi',authorize(["Administrador"]), createNotification);
notifiRoutes.get('/notifi',authorize(["Administrador"]), getAllNotifications);
notifiRoutes.get('/notifi/:id',authorize(["Administrador"]), getNotification);
notifiRoutes.delete('/notifi/:id',authorize(["Administrador"]),  deleteNotification);

export default notifiRoutes
