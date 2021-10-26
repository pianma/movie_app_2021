import React  from "react";
import axios  from "axios";
import Movie from "../components/Movie";
import './Home.css';




class Home extends React.Component{
  state = {
    isLoading: true,
    movies: [],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqc2meVMwc1LgH_YtWmF0SSZ3F5AOmppMoQ&usqp=CAU',
  };

  getMovies = async () => {
    const {
      data: {
        data : { movies}, 
      },
    } = await axios.get(" https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading : false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render(){
    const {isLoading, movies,image} = this.state;
    return (
    <section className = "container">
    {isLoading ? (
      <div className="loader">
          <span className="loader__text">Loading....</span>
      </div>
    ) : (
      <div className="backpicture">
        <img src={image} alt="dd" />
        <p className="award">Titane was selected as the French entry for the Best International Feature Film at the 94th Academy Awards</p>
        <canvas id="noise" class="noise"></canvas>
        <div class="vignette"></div>

      <div className="movies">
     {movies.map(movie => (
       <Movie
          key={movie.id}
          id={movie.id}
          yaer={movie.yaer}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
      />
     ))}
     </div>
     </div>
     )}
   </section> 
   );
  }
}

export default Home;
