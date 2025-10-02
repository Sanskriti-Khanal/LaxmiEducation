'use client';

export default function ContactUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navbar-blue to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Get in touch with our expert counselors
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-navbar-blue mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navbar-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navbar-blue focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navbar-blue focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navbar-blue focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navbar-blue focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="study-abroad">Study Abroad</option>
                    <option value="ielts">IELTS Preparation</option>
                    <option value="toefl">TOEFL Preparation</option>
                    <option value="gre">GRE Preparation</option>
                    <option value="gmat">GMAT Preparation</option>
                    <option value="university-application">University Application</option>
                    <option value="visa-assistance">Visa Assistance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navbar-blue focus:border-transparent"
                    placeholder="Tell us about your goals and how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-cta-red hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navbar-blue mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Ready to start your international education journey? Our expert counselors are here to help you every step of the way. Contact us today for a free consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navbar-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📧</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-navbar-blue">Email Us</h3>
                    <p className="text-gray-600">info@laxmieducation.com</p>
                    <p className="text-gray-600">support@laxmieducation.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navbar-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📞</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-navbar-blue">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navbar-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-navbar-blue">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Education Street<br />
                      Learning City, LC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navbar-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🕒</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-navbar-blue">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navbar-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How much does a consultation cost?",
                answer: "Our initial consultation is completely free. We offer a comprehensive assessment of your profile and goals at no cost."
              },
              {
                question: "How long does the application process take?",
                answer: "The timeline varies depending on the country and university, but typically takes 6-12 months from start to finish."
              },
              {
                question: "Do you help with visa applications?",
                answer: "Yes, we provide comprehensive visa assistance including document preparation, application guidance, and interview preparation."
              },
              {
                question: "What test scores do I need for universities?",
                answer: "Requirements vary by university and program, but generally IELTS 6.5-7.0, TOEFL 90-100, GRE 310+, or GMAT 650+ are competitive scores."
              },
              {
                question: "Do you offer online classes?",
                answer: "Yes, we offer both online and in-person classes for test preparation. All our courses are designed to be flexible and accessible."
              },
              {
                question: "What if I don't get accepted to my chosen universities?",
                answer: "We work with you to create a backup plan and help you apply to alternative universities that match your profile and goals."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-light-gray p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-navbar-blue mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navbar-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your free consultation today and take the first step towards your international education goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-cta-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Call Now: (555) 123-4567
            </a>
            <a
              href="mailto:info@laxmieducation.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navbar-blue font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
