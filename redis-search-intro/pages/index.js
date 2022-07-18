import CarForm from "../lib/CarForm"
import SearchForm from "../lib/SearchForm"

export default function Home({ }) {
  return (
    <div>
      <h1>Create A Car</h1>
      <CarForm />

      <SearchForm />
    </div>
  )
}