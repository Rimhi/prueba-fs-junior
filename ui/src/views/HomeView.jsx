import { Link } from 'react-router'
import { Card } from '../components/Card'
import useMovie from '../controller/useMovie'
const movie = {
  title: 'Deadpool & Wolverine',
  year: '2024',
  image: 'https://i.pinimg.com/736x/6f/4a/b8/6f4ab823d4a61e08724d647c14daa888.jpg',
  genre: 'Acción',
  synopsis:
    'Deadpool viaja en el tiempo con la intención de reclutar a Wolverine en la batalla contra un enemigo común: Paradox.',
}
export const HomeView = () => {
  const {movies} = useMovie(true)
  return (
    <main className="min-h-screen mx-auto w-full container">
      <h1 className="text-center text-5xl text-gray-200 font-bold my-4">Best movies of all time</h1>
      <div className="flex justify-end">
        <Link
          to="/movie"
          className="mb-4 inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
        >
          Add Movie
        </Link>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  )
}
