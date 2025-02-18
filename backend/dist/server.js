"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
// require('dotenv').config();
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));
// mongoose.connect('mongodb+srv://heenarc23:HlE5OEFzT8s25QGC@cluster0.rlwum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err: any) => console.log(err));
// mongoose.connection.on('connected', () => {
//   console.log("Connected to MongoDB")
// })
// mongoose.connection.on('error', (err:any) => {
//   console.log("Error Connecting", err)
// })
// mongoose.connect(MONGOURI)
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err: any) => console.log(err));
// async function connectDB() {
//     try {
//       await mongoose.connect(process.env.MONGO_URI);
//       console.log('MongoDB connected successfully');
//     } catch (err) {
//       console.error('Error connecting to MongoDB:', err);
//     }
//   }
//   connectDB();
const ContactSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    message: { type: String },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });
const Contact = mongoose.model('Contact', ContactSchema);
app.post('/contact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, message, createdAt } = req.body;
        const newMessage = new Contact({ name, email, message, createdAt });
        yield newMessage.save();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASS }
        });
        yield transporter.sendMail({
            from: process.env.EMAIL,
            to: 'heenarc23@gmail.com',
            subject: `New Contact Form Submission from ${newMessage === null || newMessage === void 0 ? void 0 : newMessage.email}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nCreatedAt: ${createdAt}`
        });
        res.status(201).json({ message: 'Message received!' });
        if (res.status(201)) {
            yield transporter.sendMail({
                from: '"Heena" <heenarc23@gmail.com>',
                to: newMessage === null || newMessage === void 0 ? void 0 : newMessage.email,
                subject: `Your request has been received.`,
                text: `Thanks for requesting us. We will get back to you soon`
            });
        }
    }
    catch (err) {
        res.status(500).json({ error: `Error saving message, ${err}` });
    }
}));
app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio!');
});
// app.get('/contact', (req, res) => {
//   res.send('Welcome to the Portfolio!', req, res);
//   console.log(req, "res: ", res)
// });
app.get('/messages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield Contact.find();
    res.json(messages);
}));
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
