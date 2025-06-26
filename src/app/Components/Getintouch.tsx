// "use client";
// import React, { useState } from "react";

// const GetInTouch = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.MouseEvent<HTMLSpanElement>) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch("https://formspree.io/f/xzzgkopv", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         throw new Error("Form submission failed");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("There was an error submitting your form. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (submitted) {
//     return (
//       <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6 text-gray-800">Thank You!</h2>
//           <p className="text-xl text-gray-600 mb-8">
//             Your message has been sent successfully. I'll get back to you soon.
//           </p>
//           <button
//             onClick={() => setSubmitted(false)}
//             className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
//           >
//             Send Another Message
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//           Get In{" "}
//           <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Touch
//           </span>
//         </h2>
//         <div className="bg-gray-50 rounded-xl p-8 shadow-md">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500
//              text-gray-800 placeholder:text-gray-400/80"
//                   placeholder="Your name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500
//              text-gray-800 placeholder:text-gray-400/80"
//                   placeholder="your.email@example.com"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder:text-gray-300"
//                 placeholder="Your message"
//                 required
//               ></textarea>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
//                   isLoading
//                     ? "bg-indigo-400"
//                     : "bg-indigo-600 hover:bg-indigo-700"
//                 } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
//               >
//                 {isLoading ? "Sending..." : "Send Message"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GetInTouch;

"use client";
import React, { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzgkopv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Thank You!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Your message has been sent successfully. I&apos;ll get back to you
            soon.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Get In{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <div className="bg-gray-50 rounded-xl p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 
             text-gray-800 placeholder:text-gray-400/80"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 
             text-gray-800 placeholder:text-gray-400/80"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder:text-gray-300"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isLoading
                    ? "bg-indigo-400"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
