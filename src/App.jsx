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
useEffect(() => { const newfilms = initialFilms.filter((film) => film.genre.includes(search)); setFilms(newfilms); }, [search]);

  return (
    <>
      <header className='miao-consiglia'>
        <h1>i film consigliati dalla miao corporation</h1>
      </header>
      <main>
        <input type="search" 
        className='cerca'
        placeholder='seleziona tra uno di questi film'
        value={search}
        onChange={(event) => setSearch(event.target.value)}/>
        <ul>
          {films.map((film, index) => (
            <li key={index}>
              <strong>{film.title}</strong> - <em>{film.genre}</em>
              <p>{film.index}10/10 IGN</p>
            </li>
          ))}
        </ul>
        </main>
    </>
  )
}

export default App
