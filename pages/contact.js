import Layout from './components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Formspree URL (replace with your own Formspree form URL)
    const formSpreeUrl = 'https://formspree.io/f/{your-form-id}';
    
    try {
      const response = await fetch(formSpreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      setStatus('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-6">We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.</p>
        
        {status && (
          <p className={`mb-4 ${status.startsWith('There') ? 'text-red-500' : 'text-green-500'}`}>{status}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-lg text-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-lg text-black"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-lg text-black"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
}
