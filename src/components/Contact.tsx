import { Button, Grid } from "@mui/material";
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

const Contact = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: any) => {
        console.log("handle change")
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }



    const handleSubmit = async (e: any) => {
        e.preventDefault();


        const response = await fetch("https://masterportfolio-tm5w.onrender.com/contact", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data)
        alert(data.message);

    }

    return (
        <div>
            <Grid container>
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
                            <GitHubIcon />
                            <LinkedInIcon />
                            <GoogleIcon />
                            <InstagramIcon />
                            <FacebookIcon />
                            HackerRank
                            CodeChef
                        </div>
                        <div>
                            <Button variant="contained">See my Resume</Button>
                        </div>
                        <div className={classes.contactForm}>
                            <form action="" onSubmit={handleSubmit}>
                                <FormControl>
                                    <FormLabel>Name</FormLabel>
                                    <Input type="text" name="name" placeholder="Name" size="md" variant="outlined" onChange={handleChange} required />
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" name="email" placeholder="Email" size="md" variant="outlined" onChange={handleChange} required />
                                <Textarea name="message" placeholder="Message" minRows={2} variant="outlined" size="lg" onChange={handleChange} required />
                                <Button type="submit" variant="contained">Send</Button>
                                </FormControl>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </div>
    )

}

export default Contact;