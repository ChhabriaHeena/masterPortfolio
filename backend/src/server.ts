const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
// require('dotenv').config();
import * as dotenv from "dotenv";
dotenv.config();



const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch((err: any) => console.log(err));

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
  name: String,
  email: String,
  message: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', ContactSchema);

app.post('/contact', async (req: { body: { name: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; error?: string; }): void; new(): any; }; }; }) => {
  try {

    const { name, email, message } = req.body;
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASS }
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: 'heenarc23@gmail.com',
      subject: `New Contact Form Submission from ${newMessage?.email}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.status(201).json({ message: 'Message received!' });

    if (res.status(201)) {
      await transporter.sendMail({
        from: '"Heena" <heenarc23@gmail.com>',
        to: newMessage?.email,
        subject: `Your request has been received.`,
        text: `Thanks for requesting us. We will get back to you soon`
      });
    }
  } catch (err) {
    res.status(500).json({ error: `Error saving message, ${err}` });
  }
});

app.get('/', (req: any, res: any) => {
  res.send('Welcome to the Portfolio!');
});

// app.get('/contact', (req, res) => {
//   res.send('Welcome to the Portfolio!', req, res);
//   console.log(req, "res: ", res)
// });

app.get('/messages', async (req: any, res: { json: (arg0: any) => void; }) => {
  const messages = await Contact.find();
  res.json(messages);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));