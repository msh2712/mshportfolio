import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdLocalPhone } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import emailjs from 'emailjs-com';

function Contact() {
    const [statusMessage, setStatusMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let errorMessage = '';

        if (name === 'name' && !value) errorMessage = 'Name is required';
        else if (name === 'email' && (!value || !/\S+@\S+\.\S+/.test(value))) errorMessage = 'Valid email is required';
        else if (name === 'subject' && !value) errorMessage = 'Subject is required';
        else if (name === 'message' && !value) errorMessage = 'Message cannot be empty';

        setErrors({ ...errors, [name]: errorMessage });
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.name) { newErrors.name = 'Name is required'; isValid = false; }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Valid email is required'; isValid = false; }
        if (!formData.subject) { newErrors.subject = 'Subject is required'; isValid = false; }
        if (!formData.message) { newErrors.message = 'Message cannot be empty'; isValid = false; }

        setErrors(newErrors);
        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            e.target,
            'YOUR_PUBLIC_KEY'
        ).then(
            () => {
                setStatusMessage('✅ Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setErrors({});
            },
            (error) => {
                setStatusMessage('✅ Message sent successfully!');
                alert(statusMessage)
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        );
    };

    return (
        <section id="contact" className="mb-20 px-5">
            <div className="flex px-36 justify-center items-end w-full">
                <h2 className="relative  text-4xl md:text-5xl p font-semibold font-name my-14 mb-16 md:24 text-white">
                    Contact
                    <div className="absolute -top-4 -left-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="30"
                            height="30"
                            className="animate-rotate-left"
                        >
                            <defs>
                                <linearGradient id="starGradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#FF7C57" />
                                    <stop offset="50%" stopColor="#9B5DE5" />
                                    <stop offset="100%" stopColor="#3A86FF" />
                                </linearGradient>
                            </defs>

                            <path
                                d="M256 0
         C256 100 100 256 0 256
         C100 256 256 412 256 512
         C256 412 412 256 512 256
         C412 256 256 100 256 0Z"
                                fill="url(#starGradient)"
                            />
                        </svg>
                    </div>

                </h2>
            </div>

            <div className="mx-5 md:px-20">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <FaLocationDot className="text-xl text-white mt-1" />
                            <div>
                                <h6 className="font-semibold font-project text-white custom-subheading">Address</h6>
                                <p className="text-gray-600 font-about custom-info">Udhna Surat, Gujrat</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <MdLocalPhone className="text-xl text-white mt-1" />
                            <div>
                                <h6 className="font-semibold font-project text-white custom-subheading">Call Us</h6>
                                <p className="text-gray-600 font-about custom-info">+91 9913005595</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <TfiEmail className="text-xl text-white mt-1" />
                            <div>
                                <h6 className="font-semibold font-project text-white custom-subheading">Email Us</h6>
                                <p className="text-gray-600 font-about custom-info">mshpatil369@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2">
                        <form onSubmit={sendEmail} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full p-2 border font-project  rounded-lg custom-input ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full p-2 border font-project rounded-lg custom-input ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full p-2 border font-project  rounded-lg custom-input ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    rows="6"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full p-1 border font-project ps-2 rounded-lg custom-input ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <div className="text-center">
                                <button className="px-10 mt-4 md:mt-3 py-2 font-name font-medium text-white border-2 border-gray-400 rounded-lg h-12">
                                    <span className="flex items-center justify-center  ">
                                        Hire Me
                                    </span>

                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
