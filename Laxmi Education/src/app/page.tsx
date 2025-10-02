import Link from 'next/link';
import Image from 'next/image';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-pink-50 pt-4 pb-12 md:pt-6 md:pb-16 lg:pt-8 lg:pb-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 md:top-20 md:right-20 w-20 h-20 md:w-32 md:h-32 bg-royal-blue rounded-full opacity-10"></div>
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-32 h-32 md:w-48 md:h-48 bg-cta-red rounded-full opacity-10"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-pink-300 rounded-full opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Admit your Dream University through{' '}
                  <span className="text-royal-blue">Educo</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link
                  href="/contact-us"
                  className="bg-cta-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
                >
                  Our Package
                </Link>
                <div className="flex items-center space-x-2 text-cta-red">
                  <div className="w-8 h-8 bg-cta-red rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🏆</span>
                  </div>
                  <span className="text-sm font-medium">Trusted by 1000+ Students</span>
                </div>
              </div>
            </div>

            {/* Right side - Hero image */}
            <div className="relative h-full flex items-center justify-center">
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/hero-graduate.webp"
                  alt="Graduate student with certificate - Success in international education through Educo consultancy"
                  width={600}
                  height={900}
                  className="w-full h-full object-cover rounded-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={90}
                />
              </div>
              
              {/* Decorative background shapes */}
              <div className="absolute top-4 left-4 w-24 h-24 bg-royal-blue rounded-full opacity-20 -z-10"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-pink-300 rounded-full opacity-20 -z-10"></div>
              
              {/* Decorative lines */}
              <div className="absolute top-1/2 -left-6 w-12 h-0.5 bg-pink-300 transform -rotate-12"></div>
              <div className="absolute top-1/3 -right-6 w-8 h-0.5 bg-cta-red transform rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Filter Form Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-3/4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                  Find Your Perfect Course & Institution
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Discover the best educational opportunities tailored to your goals
                </p>
              </div>
              
              <form className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {/* Course Selection */}
                <div className="relative">
                  <select 
                    className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent appearance-none bg-white text-gray-700 text-sm md:text-base"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select your choice</option>
                    <option value="undergraduate">Undergraduate Programs</option>
                    <option value="graduate">Graduate Programs</option>
                    <option value="phd">PhD Programs</option>
                    <option value="diploma">Diploma Courses</option>
                    <option value="certificate">Certificate Courses</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Institution Selection */}
                <div className="relative">
                  <select 
                    className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent appearance-none bg-white text-gray-700 text-sm md:text-base"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select Institution</option>
                    <option value="usa">Universities in USA</option>
                    <option value="uk">Universities in UK</option>
                    <option value="canada">Universities in Canada</option>
                    <option value="australia">Universities in Australia</option>
                    <option value="newzealand">Universities in New Zealand</option>
                    <option value="germany">Universities in Germany</option>
                    <option value="netherlands">Universities in Netherlands</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-cta-red hover:bg-red-600 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg text-base md:text-lg transition-colors duration-200"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-1">
              <Image
                src="/assets/team.webp"
                alt="Laxmi Educational Consultancy professional team - Expert education consultants in Nepal with years of combined expertise in management, consulting, education, and training"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg mt-12 md:mt-16 lg:mt-20"
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                quality={90}
              />
            </div>
            <div className="order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-navbar-blue mb-4">
                Education Consultancy in Nepal
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Laxmi Educational Consultancy consists of a dedicated team of professionals with years of combined expertise in management, consulting, education, and training who are committed to providing high-quality services.
              </p>
              <Link
                href="/about-us"
                className="inline-block bg-navbar-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navbar-blue mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for your educational journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Study Abroad */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4" aria-hidden>🌍</div>
              <h3 className="text-2xl font-bold text-navbar-blue mb-4">Study Abroad</h3>
              <p className="text-gray-600 mb-6">
                Expert guidance for university applications, visa assistance, and country selection.
              </p>
              <Link
                href="/study-abroad"
                className="inline-flex items-center font-semibold text-cta-red hover:underline tracking-wide"
              >
                KNOW MORE
              </Link>
            </div>

            {/* Test Preparation */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4" aria-hidden>📚</div>
              <h3 className="text-2xl font-bold text-navbar-blue mb-4">Test Preparation</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive preparation for IELTS, TOEFL, GRE, GMAT, and other standardized tests.
              </p>
              <Link
                href="/test-preparation"
                className="inline-flex items-center font-semibold text-cta-red hover:underline tracking-wide"
              >
                KNOW MORE
              </Link>
            </div>

            {/* Contact Us */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4" aria-hidden>✉️</div>
              <h3 className="text-2xl font-bold text-navbar-blue mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                Speak with our expert counselors and get personalized guidance for your goals.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center font-semibold text-cta-red hover:underline tracking-wide"
              >
                KNOW MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navbar-blue">Dream Destinations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* USA */}
            <Link href="/study-abroad/usa" className="group block bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6">
              <div className="text-4xl mb-4" aria-hidden>🇺🇸</div>
              <h3 className="text-xl font-semibold text-navbar-blue mb-2">Study in USA</h3>
              <p className="text-gray-600 mb-3">Top-ranked universities and diverse academic programs.</p>
              <span className="text-cta-red font-semibold group-hover:underline">More</span>
            </Link>

            {/* New Zealand */}
            <Link href="/study-abroad/study-in-newzealand" className="group block bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6">
              <div className="text-4xl mb-4" aria-hidden>🇳🇿</div>
              <h3 className="text-xl font-semibold text-navbar-blue mb-2">Study in New Zealand</h3>
              <p className="text-gray-600 mb-3">World-class education with stunning natural landscapes.</p>
              <span className="text-cta-red font-semibold group-hover:underline">More</span>
            </Link>

            {/* Canada */}
            <Link href="/study-abroad/study-in-canada" className="group block bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6">
              <div className="text-4xl mb-4" aria-hidden>🇨🇦</div>
              <h3 className="text-xl font-semibold text-navbar-blue mb-2">Study in Canada</h3>
              <p className="text-gray-600 mb-3">High-quality education and welcoming multicultural society.</p>
              <span className="text-cta-red font-semibold group-hover:underline">More</span>
            </Link>

            {/* UK */}
            <Link href="/study-abroad/study-in-uk" className="group block bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6">
              <div className="text-4xl mb-4" aria-hidden>🇬🇧</div>
              <h3 className="text-xl font-semibold text-navbar-blue mb-2">Study in UK</h3>
              <p className="text-gray-600 mb-3">Historic institutions with globally recognized degrees.</p>
              <span className="text-cta-red font-semibold group-hover:underline">More</span>
            </Link>

            {/* Australia */}
            <Link href="/study-abroad/study-in-australia" className="group block bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 hover:-translate-y-1 p-6">
              <div className="text-4xl mb-4" aria-hidden>🇦🇺</div>
              <h3 className="text-xl font-semibold text-navbar-blue mb-2">Study in Australia</h3>
              <p className="text-gray-600 mb-3">Innovative programs and vibrant student lifestyle.</p>
              <span className="text-cta-red font-semibold group-hover:underline">More</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Recent Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navbar-blue">Recent Blog Posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-navbar-blue mb-3">Cost to Study in USA 2025–2026</h3>
              <p className="text-gray-600 line-clamp-3 mb-4">Breakdown of tuition, living expenses, scholarships, and budgeting tips for international students planning for the 2025–2026 academic year.</p>
              <Link href="/blog/cost-to-study-in-usa-2025-2026" className="text-cta-red font-semibold hover:underline">Read More</Link>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-navbar-blue mb-3">Student Visa Working Hours in New Zealand</h3>
              <p className="text-gray-600 line-clamp-3 mb-4">Latest rules on part-time and post-study work rights for international students in New Zealand.</p>
              <Link href="/blog/student-visa-working-hours-in-new-zealand" className="text-cta-red font-semibold hover:underline">Read More</Link>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-navbar-blue mb-3">International Student Working Hours in Canada</h3>
              <p className="text-gray-600 line-clamp-3 mb-4">An overview of work-hour limits, co-op permits, and on/off-campus opportunities for students in Canada.</p>
              <Link href="/blog/international-student-working-hours-in-canada" className="text-cta-red font-semibold hover:underline">Read More</Link>
            </div>
          </div>
        </div>
      </section>


      {/* Test Preparation Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navbar-blue mb-4">Test Preparation Programs</h2>
            <p className="text-xl text-gray-600">Choose from our comprehensive test preparation courses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'IELTS', score: 'Band 7+', duration: '8 weeks' },
              { name: 'TOEFL', score: '100+', duration: '6 weeks' },
              { name: 'GRE', score: '320+', duration: '10 weeks' },
              { name: 'GMAT', score: '700+', duration: '8 weeks' },
            ].map((test) => (
              <div key={test.name} className="bg-light-gray p-6 rounded-lg text-center hover:bg-highlight-yellow hover:bg-opacity-20 transition-colors duration-200">
                <h3 className="text-2xl font-bold text-navbar-blue mb-2">{test.name}</h3>
                <p className="text-lg text-gray-600 mb-1">Target Score: {test.score}</p>
                <p className="text-sm text-gray-500">Duration: {test.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
