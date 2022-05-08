import React, { Component } from 'react';
import './App.css';
import movies from './data/movies.json';
import mapper from './Utils/mapper';
import { Button } from './components/Counter/Button/Button';
import { GalleryList } from './components/Gallery/GalleryList/GalleryList';

// import Counter from './components/Counter';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#608D88' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F5185' },
// ];

// const App = () => (
//   <>
//     <h1>Состояние компонента</h1>
//     <Counter initialValue={10} />
//   </>
// );

// export default App;

class App extends Component {
  state = {
    movies: mapper(movies),
    isShown: false,
  };

  showFilms = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  };
  toggleWatched = id => {
    this.setState(prevState => ({
      movies: prevState.movies.map(movie => {
        if (movie.id === id) {
          return {
            ...movie,
            isWatched: !movie.isWatched,
          };
        }
        return movie;
      }),
    }));
  };

  render() {
    const { isShown, movies } = this.state;
    return (
      <>
        <Button showFilms={this.showFilms} isShown={isShown} />
        {isShown && (
          <GalleryList movies={movies} toggleWatched={this.toggleWatched} />
        )}
      </>
    );
  }
}

export default App;
