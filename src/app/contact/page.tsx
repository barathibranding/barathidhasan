// "use client";
// import React, { useState } from "react";
// import {
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiLinkedin,
//   FiSend,
//   FiCheck,
// } from "react-icons/fi";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Method 1: Using Formspree (Recommended)
//   const handleFormspreeSubmit = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch("https://formspree.io/f/xzzgkopv", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//         }),
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         setFormData({ name: "", email: "", message: "" });
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Me</h1>
//           <p className="text-lg text-gray-600">
//             Feel free to reach out through any of these channels
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Contact Details */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
//               <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
//                 <FiMail className="text-xl" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-700">Email</h3>
//                 <a
//                   href="mailto:barathidhasan.dev@gmail.com"
//                   className="text-gray-600 hover:text-indigo-600"
//                 >
//                   barathidhasan.dev@gmail.com
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
//               <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
//                 <FiPhone className="text-xl" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-700">Phone/WhatsApp</h3>
//                 <a
//                   href="tel:+917094861938"
//                   className="text-gray-600 hover:text-indigo-600"
//                 >
//                   +91 70948 61938
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
//               <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
//                 <FiMapPin className="text-xl" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-700">Location</h3>
//                 <p className="text-gray-600">Chennai, India</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
//               <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
//                 <FiLinkedin className="text-xl" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-700">LinkedIn</h3>
//                 <a
//                   href="https://linkedin.com/in/barathidhasan"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-600 hover:text-indigo-600"
//                 >
//                   linkedin.com/in/barathidhasan
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-gray-50 p-6 rounded-lg">
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">
//               Quick Message
//             </h2>

//             {submitted ? (
//               <div className="text-center py-8">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
//                   <FiCheck className="text-2xl text-green-600" />
//                 </div>
//                 <h3 className="text-lg font-medium text-gray-800 mb-2">
//                   Message Sent!
//                 </h3>
//                 <p className="text-gray-600">
//                   Thank you for reaching out. I'll get back to you soon.
//                 </p>
//                 <button
//                   onClick={() => setSubmitted(false)}
//                   className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
//                 >
//                   Send Another Message
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder:text-gray-300"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder:text-gray-300"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder:text-gray-300"
//                     placeholder="Your message here..."
//                   />
//                 </div>

//                 <button
//                   onClick={handleFormspreeSubmit}
//                   disabled={
//                     isSubmitting ||
//                     !formData.name ||
//                     !formData.email ||
//                     !formData.message
//                   }
//                   className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-md flex items-center justify-center gap-2"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <FiSend className="text-sm" />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;

"use client";
import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiSend,
  FiCheck,
} from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Method 1: Using Formspree (Recommended)
  const handleFormspreeSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzgkopv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Me</h1>
          <p className="text-lg text-gray-600">
            Feel free to reach out through any of these channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                <FiMail className="text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Email</h3>
                <a
                  href="mailto:barathidhasan.dev@gmail.com"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  barathidhasan.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                <FiPhone className="text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Phone/WhatsApp</h3>
                <a
                  href="tel:+917094861938"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  +91 70948 61938
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                <FiMapPin className="text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Location</h3>
                <p className="text-gray-600">Chennai, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                <FiLinkedin className="text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/barathidhasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  linkedin.com/in/barathidhasan
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Quick Message
            </h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <FiCheck className="text-2xl text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder:text-gray-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder:text-gray-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder:text-gray-300"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  onClick={handleFormspreeSubmit}
                  disabled={
                    isSubmitting ||
                    !formData.name ||
                    !formData.email ||
                    !formData.message
                  }
                  className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-sm" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
