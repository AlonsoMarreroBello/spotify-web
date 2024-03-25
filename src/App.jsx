import './App.css';
import PlayList from './PlayList';
import likedSongsImage from './img/liked-songs-300.png';

// likedSongsImage, name, type, creator

const playlistInfo = [
  {
    likedSongsImage: likedSongsImage,
    name: 'Uno',
    type: 'lista',
    creator: 'Alonso'
  },
  {
    likedSongsImage: likedSongsImage,
    name: 'Dos',
    type: 'lista',
    creator: 'Alonso'
  },
  {
    likedSongsImage: likedSongsImage,
    name: 'Tres',
    type: 'lista',
    creator: 'Alonso'
  },
  {
    likedSongsImage: likedSongsImage,
    name: 'Cuatro',
    type: 'lista',
    creator: 'Alonso'
  },
  {
    likedSongsImage: likedSongsImage,
    name: 'Cinco',
    type: 'lista',
    creator: 'Alonso'
  },
  {
    likedSongsImage: likedSongsImage,
    name: 'Seis',
    type: 'lista',
    creator: 'Alonso'
  },
  {
    likedSongsImage: likedSongsImage,
    name: 'Siete',
    type: 'lista',
    creator: 'Alonso'
  },
  {
    likedSongsImage: likedSongsImage,
    name: 'Ocho',
    type: 'lista',
    creator: 'Alonso'
  },
  {
    likedSongsImage: likedSongsImage,
    name: 'Nueve',
    type: 'lista',
    creator: 'Alonso'
  },
  {
    likedSongsImage: likedSongsImage,
    name: 'Diez',
    type: 'lista',
    creator: 'Alonso'
  },
  {
    likedSongsImage: likedSongsImage,
    name: 'Once',
    type: 'lista',
    creator: 'Alonso'
  },
  {
    likedSongsImage: likedSongsImage,
    name: 'Doce',
    type: 'lista',
    creator: 'Alonso'
  }
]

function App() {
  return (
    <div className="App">
      <div className="menu">
        <nav>
          <div className='menu--main'>
            <ul className="menu--icons">
              <li className="menu__inicio">
                <i class="bi bi-house bi-x2"></i>
                <span className="menu__inner">Inicio</span>
              </li>
              <li className="menu__buscar">
                <i class="bi bi-search bi-x2"></i>
                <span className="menu__inner">Buscar</span>
              </li>
            </ul>
          </div>
          <div className="biblioteca">
            <div className="biblioteca__search">
              <div className='search__header'>
                <button className='search__button'>
                  <i class="bi bi-list bi-x3"></i>
                  <span className='search__inner'> Tu biblioteca</span>
                </button>
                <i class="bi bi-plus bi-x3"></i>
                <i class="bi bi-arrow-right-short bi-x3"></i>
              </div>
              <div className='search__categorias'>

              </div>
              <div className='search__container'>
                <div className='search__searchbar'>
                  <button className='searchbar__button'>
                    <i class="bi bi-search bi-x2"></i>
                  </button>
                </div>
                <div className="biblioteca__playlists">
                  {playlistInfo.map(({ likedSongsImage, name, type, creator }) => (
                    <PlayList
                      key={name}
                      likedSongsImage={likedSongsImage}
                      name={name}
                      type={type}
                      creator={creator}
                    >
                    </PlayList>
                  ))
                  }
                </div>
              </div>

            </div>

          </div>
        </nav>
      </div>
      <div className="main">
        Hola mundo
      </div>
      <div className="player">
        Hola mundo
      </div>
    </div>
  );
}

export default App;
