
import { tw } from 'twind'

const HomeComponent = () => {
  return (
    <main className={tw`h-[calc(100vh-100px)] bg-purple-400 flex items-center justify-center`}>
        <h1 className={tw`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}>Home Page</h1>
    </main>
  )
}

export default HomeComponent