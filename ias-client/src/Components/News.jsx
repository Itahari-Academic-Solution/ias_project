import React from 'react'

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'Breaking News: AI Revolutionizes Industry',
      description: 'Artificial Intelligence is changing the way businesses operate worldwide.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39mfqu2ioEkpEGu8OLeh2DL7eULPDJiYFJQ&s',
    },
    {
      id: 2,
      title: 'New Advances in Quantum Computing',
      description: 'Quantum computing has reached new milestones this year.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRy37F6_LIHLd-KJP41Nsv6Q-y1FtuKuoZQ&s',
    },
    {
      id: 3,
      title: 'Climate Change: Urgent Measures Needed',
      description: 'Scientists urge immediate action to address climate change before it’s too late.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwYbKHJTOg6ffA3tgOw5XhCPsBeEkJYJq1A&s',
    },
    {
      id: 4,
      title: 'Sports: The Greatest Moments of the Year',
      description: 'A review of the most incredible sports events in the last year.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILjikQ7UcwJATOFV8dH_nBJ4V20IJwkqi7A&s',
    },
  ];
  return (
    <>
    <div className="container mx-auto relative p-4">
    <h2 className="text-gray-900 text-5xl mb-4 font-normal">About</h2>
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className='p-10 mt-20'>
              <h1 className="text-5xl font-bold text-gray-800 mb-4">Today's Headlines</h1>
              <p className="text-gray-600 text-lg">
                Stay updated with the latest news around the world. From technology to sports, get the breaking news at your fingertips.
              </p>
              <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Explore More</button>
            </div>
            <div>
              <img
                src="https://lh3.googleusercontent.com/proxy/Q5dCj1dlJh7bE7m92oshjDRWiDJ6BXaftPYv-4sJ-X8s8ukPiCIZdclZ-AOxe7V8_mJTENyT_p4MuN7iQs2Dxuvo-9lM7j5cvp2jKMtX2TO0wr_mfWQgjxteTAiVKBQ7xrHfdIJLLM4yTG_xS423VX6bwez_305MePtVFzVCFsAwygmsEQ_u1g"
                alt="Featured News"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
                <p className="text-gray-600">{article.description}</p>
                <button className="mt-4 text-blue-600 hover:underline">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories/Additional Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
              <h3 className="text-2xl font-bold">Program</h3>
              <p className="mt-2">The latest Program / functions news</p>
            </div>
            <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition">
              <h3 className="text-2xl font-bold">Result</h3>
              <p className="mt-2">Result news that matters to you.</p>
            </div>
            <div className="p-6 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition">
              <h3 className="text-2xl font-bold">announcement</h3>
              <p className="mt-2">Latest updates on your New Schedule.</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>

    
    </div>
    </>
   
  )
}
