// src/pages/ContactUsPage.jsx
import React from 'react';
import ContactHero from '../components/ContactHero';
import OfficeLocations from '../components/OfficeLocations';
import SupportInfo from '../components/SupportInfo';
import ContactForm from '../components/ContactForm';

const ContactUsPage = () => {
  return (
    <>
      <main>
        <ContactHero />
        <OfficeLocations />
        <SupportInfo />
        <ContactForm />
      </main>
    </>
  );
};

export default ContactUsPage;
