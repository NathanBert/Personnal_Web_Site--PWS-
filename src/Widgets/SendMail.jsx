// src/Widgets/SendMail.js
import emailjs from '@emailjs/browser';

export default function sendMail(name, email, message) {
  return emailjs.send(
    'gmx_custom',        // service ID
    'template_n5pu4vu',  // template ID
    { name, email, message },
    'VXIxhprC0VFjW249V' // public key
  );
}
