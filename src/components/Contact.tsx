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


const Contact = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: any) => {
        console.log("handle change")
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

   

    const handleSubmit = async (e: any) => {
        e.preventDefault();


        const responseGet = await fetch("https://masterportfolio-tm5w.onrender.com/contact", {
            method: "GET",
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(formData),
        });

        console.log("response: ",responseGet)

        // const dataGet = await responseGet.json();
        // console.log(dataGet)
        // alert(dataGet.message);


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
                <Grid item xs={12} md={6} sm className={classes.contactMeContent}>
                    <div>
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
                    </div>
                </Grid>
            </Grid>

            <div>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <textarea name="message" placeholder="Message" onChange={handleChange} required />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )

}

export default Contact;