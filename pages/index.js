import Link from 'next/link'

const Index = () => (
  <div className="mt-8 max-w-xl mx-auto px-8">
    <h1 className="text-center">
      <span className="block text-xl text-gray-600 leading-tight">
        Momen Yasser 2001627 Welcomes you to
      </span>
      <span className="block text-5xl font-bold leading-none">
        Cloud Computing Course
      </span>
    </h1>
    <div className="mt-12 text-center">
      <Link href="https://www.giu-uni.de/">
        <a className="inline-block bg-orange-900 hover:bg-orange-800 text-white font-medium rounded-lg px-6 py-4 leading-tight">
          Visit GIU Website
        </a>
      </Link>
    </div>
  </div>
)

export default Index
