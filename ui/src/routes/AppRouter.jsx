import { BrowserRouter, Route, Routes } from 'react-router'
import { HomeView } from '../views/HomeView'
import MovieView from '../views/Detail'
import MovieForm from '../views/AddMovie'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movie/:id" element={<MovieView />} />
        <Route path="/movie/" element={<MovieForm />} />
      </Routes>
    </BrowserRouter>
  )
}
