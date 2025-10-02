import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Universities in the USA for International Students',
      excerpt: 'Discover the best universities in the United States that welcome international students with excellent programs and support services.',
      category: 'Study Abroad',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/assets/blog/usa-universities.jpg'
    },
    {
      id: 2,
      title: 'IELTS vs TOEFL: Which Test Should You Choose?',
      excerpt: 'A comprehensive comparison of IELTS and TOEFL to help you decide which English proficiency test is right for your goals.',
      category: 'Test Preparation',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '/assets/blog/ielts-vs-toefl.jpg'
    },
    {
      id: 3,
      title: 'How to Write a Winning Personal Statement',
      excerpt: 'Learn the essential tips and strategies for crafting a compelling personal statement that stands out to admissions committees.',
      category: 'Applications',
      date: '2024-01-10',
      readTime: '8 min read',
      image: '/assets/blog/personal-statement.jpg'
    },
    {
      id: 4,
      title: 'GRE Preparation: Complete Study Plan',
      excerpt: 'A detailed 10-week study plan to help you prepare effectively for the GRE and achieve your target score.',
      category: 'Test Preparation',
      date: '2024-01-08',
      readTime: '10 min read',
      image: '/assets/blog/gre-study-plan.jpg'
    },
    {
      id: 5,
      title: 'Student Visa Application Process: Step-by-Step Guide',
      excerpt: 'Everything you need to know about applying for a student visa, including required documents and common mistakes to avoid.',
      category: 'Visa',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/assets/blog/student-visa.jpg'
    },
    {
      id: 6,
      title: 'Study in Canada: Complete Guide for International Students',
      excerpt: 'Explore the benefits of studying in Canada, including top universities, cost of living, and post-graduation opportunities.',
      category: 'Study Abroad',
      date: '2024-01-03',
      readTime: '9 min read',
      image: '/assets/blog/study-canada.jpg'
    }
  ];

  const categories = ['All', 'Study Abroad', 'Test Preparation', 'Applications', 'Visa', 'Tips'];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navbar-blue to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Expert insights and tips for your international education journey
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-navbar-blue text-white'
                    : 'bg-white text-navbar-blue hover:bg-navbar-blue hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navbar-blue to-blue-600 rounded-lg p-8 text-white mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center mb-4">
                <span className="bg-highlight-yellow text-navbar-blue px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="ml-4 text-blue-100">{blogPosts[0].category}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-xl text-blue-100 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center text-blue-100 mb-6">
                <span>{blogPosts[0].date}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Link
                href={`/blog/${blogPosts[0].id}`}
                className="bg-cta-red hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gradient-to-r from-navbar-blue to-blue-600 flex items-center justify-center">
                  <span className="text-white text-4xl">📚</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-highlight-yellow text-navbar-blue px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="ml-3 text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navbar-blue mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-cta-red font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-navbar-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Our Latest Articles
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get expert tips and insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-highlight-yellow focus:outline-none"
              />
              <button className="bg-cta-red hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-100 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navbar-blue mb-4">Popular Topics</h2>
            <p className="text-xl text-gray-600">Explore our most read articles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { topic: 'IELTS Preparation', count: '25 articles', color: 'bg-blue-100 text-blue-800' },
              { topic: 'Study in USA', count: '18 articles', color: 'bg-red-100 text-red-800' },
              { topic: 'University Applications', count: '22 articles', color: 'bg-green-100 text-green-800' },
              { topic: 'Student Visa', count: '15 articles', color: 'bg-yellow-100 text-yellow-800' }
            ].map((topic, index) => (
              <div key={index} className="bg-light-gray p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-navbar-blue mb-2">{topic.topic}</h3>
                <p className="text-sm text-gray-600">{topic.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
