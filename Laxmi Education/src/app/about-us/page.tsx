import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Laxmi Education',
  description: 'Learn about Laxmi Education\'s mission, team, and commitment to helping students achieve their international education dreams.',
};

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navbar-blue to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Laxmi Education</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Your trusted partner in international education
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navbar-blue mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Laxmi Education, we believe that every student deserves the opportunity to pursue their dreams of international education. Our mission is to provide comprehensive, personalized guidance that empowers students to make informed decisions about their academic and career paths.
              </p>
              <p className="text-lg text-gray-600">
                We are committed to breaking down barriers and making quality education accessible to students from all backgrounds, helping them achieve their goals through expert counseling, test preparation, and application support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-navbar-blue mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-highlight-yellow text-xl mr-3">✓</span>
                  <span className="text-gray-600">Expert counselors with years of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-yellow text-xl mr-3">✓</span>
                  <span className="text-gray-600">Personalized guidance for each student</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-yellow text-xl mr-3">✓</span>
                  <span className="text-gray-600">Comprehensive test preparation programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-yellow text-xl mr-3">✓</span>
                  <span className="text-gray-600">End-to-end application support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-yellow text-xl mr-3">✓</span>
                  <span className="text-gray-600">Proven track record of success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navbar-blue mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">Meet the professionals who will guide your journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'Director of International Programs',
                experience: '15+ years',
                expertise: 'University Applications, Visa Guidance'
              },
              {
                name: 'Michael Chen',
                role: 'Test Preparation Specialist',
                experience: '12+ years',
                expertise: 'IELTS, TOEFL, GRE, GMAT'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Student Counselor',
                experience: '10+ years',
                expertise: 'Career Guidance, Application Essays'
              }
            ].map((member, index) => (
              <div key={index} className="bg-light-gray p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200">
                <div className="w-24 h-24 bg-navbar-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-navbar-blue mb-2">{member.name}</h3>
                <p className="text-cta-red font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2">Experience: {member.experience}</p>
                <p className="text-sm text-gray-500">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navbar-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Numbers that speak for our success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '5000+', label: 'Students Helped' },
              { number: '95%', label: 'Success Rate' },
              { number: '50+', label: 'Countries Covered' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-highlight-yellow mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navbar-blue mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our expert team guide you towards your international education goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="bg-cta-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Get Free Consultation
            </a>
            <a
              href="/study-abroad"
              className="bg-transparent border-2 border-navbar-blue text-navbar-blue hover:bg-navbar-blue hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

