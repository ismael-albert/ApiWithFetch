import { useState, useEffect } from 'react';

function App() {
  const [repositores, setRepositores] = useState([])

useEffect(async () => {
  const response = await fetch('https://api.github.com/users/ismael-albert/repos');
  const data = await response.json();

  setRepositores(data);

}, [])

useEffect(() => {
  const filtered = repositores.filter(repo => repo.favorite)


  document.title = `Você tem ${filtered.length} favoritos`;
}, [repositores])

function handleFavorite (id) {
  const newRepositories = repositores.map(repo => {
    return repo.id === id ? { ...repo, favorite: !repo.favorite} : repo
  });

  setRepositores(newRepositories);
}

  return (
    <div>
      <ul>
        {repositores.map(repo => (
          <li key={repo.id}>
            {repo.name} 
            {repo.favorite && <span>favorito</span>}
            <button onClick={()=>handleFavorite(repo.id)}>Favoritar</button>
            </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
