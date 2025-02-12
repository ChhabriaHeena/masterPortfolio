"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var nodemailer = require('nodemailer');
require('dotenv').config();
var app = express();
app.use(express.json());
app.use(cors());
console.log(process.env.MONGO_URI);
mongoose.connect("mongodb://heenarc23:heenarc23@cluster0.s7vdy.mongodb.net/master_portfolio?retryWrites=true&w=majority&appName=Cluster0").then(function () { return console.log('MongoDB Connected'); })
    .catch(function (err) { return console.log(err); });
// async function connectDB() {
//     try {
//       await mongoose.connect(process.env.MONGO_URI);
//       console.log('MongoDB connected successfully');
//     } catch (err) {
//       console.error('Error connecting to MongoDB:', err);
//     }
//   }
//   connectDB();
var ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
}, { timestamps: true });
var Contact = mongoose.model('Contact', ContactSchema);
app.post('/contact', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, message, newMessage, transporter, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, name_1 = _a.name, email = _a.email, message = _a.message;
                newMessage = new Contact({ name: name_1, email: email, message: message });
                return [4 /*yield*/, newMessage.save()];
            case 1:
                _b.sent();
                transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASS }
                });
                return [4 /*yield*/, transporter.sendMail({
                        from: process.env.EMAIL,
                        to: 'heenarc23@example.com',
                        subject: 'New Contact Form Submission',
                        text: "Name: ".concat(name_1, "\nEmail: ").concat(email, "\nMessage: ").concat(message)
                    })];
            case 2:
                _b.sent();
                res.status(201).json({ message: 'Message received!' });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                res.status(500).json({ error: 'Error saving message' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/messages', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var messages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Contact.find()];
            case 1:
                messages = _a.sent();
                res.json(messages);
                return [2 /*return*/];
        }
    });
}); });
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
