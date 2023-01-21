import type { NextPage } from 'next'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
      // <div className="space-y-14 lg:space-y-24">
        <div className='flex flex-col flex-wrap items-center content-center justify-center'>
        <main className="max-w-4xl mx-auto antialiased">
          <Main/>
        </main>
        </div>
      // </div>
  )
}

export default Home