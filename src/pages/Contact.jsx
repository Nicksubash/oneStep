import React from 'react';
import data from '../data/data.json';

const Contact = () => {
  const { name, contact } = data;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2"><strong>Company:</strong> {name}</p>
      <p className="mb-2"><strong>Address:</strong> {contact.address}</p>
      <p className="mb-2"><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-600 underline">{contact.email}</a></p>
      <p className="mb-2"><strong>Phone:</strong> <a href={`tel:${contact.phone}`} className="text-blue-600 underline">{contact.phone}</a></p>
      <p className="mb-2"><strong>Website:</strong> <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{contact.website}</a></p>
    </div>
  );
};

export default Contact;
