import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ContactPage from '../components/contact';
const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className=" min-h-screen">
                <ContactPage />
            </div>
            <Footer />
        </div>
    )
}

export default Contact
