import { useHistory } from 'react-router-dom';

export default function MovieCard(props) {
  const { title, director, metascore, id } = props.movie;

  const history = useHistory();

  return (
    <div onClick={ () => history.push(`/movies/${id}`) }>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

