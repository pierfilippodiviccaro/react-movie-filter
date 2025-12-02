import { useState, useEffect} from 'react'
import './App.css'
const initialFilms = [ { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
{title:'Questo non è un paese per vecchi', genre:'giallo'}]
function App() {
  const [search, setSearch] = useState('')
  const [films, setFilms] = useState(initialFilms);
useEffect(() => { const newfilms = initialFilms.filter((film) => film.title.includes(search)); setFilms(newfilms); }, [search]);

  return (
    <>
      <header className='miao-consiglia'>
        <h1>i film consigliati dalla miao corporation</h1>
      </header>
      <main>
        <input type="search" 
        className='cerca'
        placeholder='cerca film'
        value={search}
        onChange={(event) => setSearch(event.target.value)}/>
        <ul>
          {films.map((film, index) => (
            <li key={index}>
              <strong>{film.title}</strong> - <em>{film.genre}</em>
            </li>
          ))}
        </ul>
        </main>
    </>
  )
}

export default App
