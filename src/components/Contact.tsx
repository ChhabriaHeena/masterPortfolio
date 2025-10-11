import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import StarIcon from '@mui/icons-material/Star';
import contactMe from './images/contactme.avif'
import useStyles from "./styles/Contact.styles";
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import Loader from './Loader';
import GitHub from './images/GITHUB.png'
import LinkedIn from './images/Linkedin.png'
import Instagram from './images/Instagram.png'
import Facebook from './images/Facebook.png'
import { Link } from 'react-router-dom';

const Contact = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [responseData, setResponseData] = useState<any>();

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleClose = () => {
        setOpen(false)
    }
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch("https://masterportfolio-tm5w.onrender.com/contact", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response?.status) {
            setLoading(false)
            handleClickOpen()
        }

        const data = await response?.json();
        setResponseData(data?.message)

    }

    return (
        <div>
            <Grid container className={`${loading ? "blur" : ""}`}>
                <Grid item className={classes.contactImg} xs={12} md sm>
                    {/* Contact Me */}
                    <img className={classes.contactMe} src={contactMe} alt="image" />

                </Grid>
                <Grid item xs={12} md={6} sm={5}>
                    <div className={classes.contactMeContent}>
                        <h3>
                            I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, FrontEnd, Cloud and Opensource Development.
                        </h3>
                        <div>
                            <Link to='https://github.com/ChhabriaHeena' target="_blank">
                                <img src={GitHub} alt="" />
                            </Link>
                            <Link to='https://www.linkedin.com/in/heena-chhabria/' target="_blank">
                                <img src={LinkedIn} alt="" />
                            </Link>
                            <Link to='https://www.instagram.com/towardshine/' target="_blank">
                                <img src={Instagram} alt="" />
                            </Link>
                            {/* HackerRank
                            CodeChef */}
                        </div>
                        <div>
                            <Button variant="contained">
                                <Link style={{ color: '#fff', textDecoration: "none" }} to='https://drive.google.com/file/d/1fqDSDoKhMb4CAH_4q6_58lLokKclQJ9h/view' target="_blank">
                                    See my Resume
                                </Link>
                            </Button>
                        </div>
                        <div className={classes.contactForm}>
                            <form action="" onSubmit={handleSubmit}>
                                <FormControl>
                                    <FormLabel>Name</FormLabel>
                                    <Input className={classes.formFields} type="text" name="name" placeholder="Name" size="md" variant="outlined" onChange={handleChange} required />
                                    <FormLabel>Email</FormLabel>
                                    <Input className={classes.formFields} type="email" name="email" placeholder="Email" size="md" variant="outlined" onChange={handleChange} required />
                                    <FormLabel>Message</FormLabel>
                                    <Textarea className={classes.formFields} name="message" placeholder="Message" minRows={2} variant="outlined" size="lg" onChange={handleChange} />
                                    <Button type="submit" variant="contained">Send</Button>
                                </FormControl>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Thanks for Contacting us!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText> Your request has been received. We will contact you soon.</DialogContentText>
                </DialogContent>
            </Dialog>

            {
                loading && <Loader loading={loading} />
            }

        </div>
    )

}

export default Contact;