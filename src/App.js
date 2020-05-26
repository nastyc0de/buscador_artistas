import React,{Fragment,useState, useEffect} from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';
import Axios from 'axios';

function App() {
  // States
  const [searchLyrics, setSearchLyrics] = useState({});
  const [lyrics, setLyrics] = useState('');
  const [info, setInfo] = useState({});

  useEffect(() => {
    if(Object.keys(searchLyrics).length === 0) return;
    
    const queryAPI = async() =>{
      const {artist, songs} = searchLyrics;
      const url = `https://api.lyrics.ovh/v1/${artist}/${songs}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyric, information] = await Promise.all([
        Axios(url),
        Axios(url2)
      ]);
        setLyrics(lyric.data.lyrics);
        setInfo(information.data.artists[0]);
        
    }
    queryAPI();
  }, [searchLyrics, info]);

  return (
    <Fragment>
      <Form
        setSearchLyrics={setSearchLyrics}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Song
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
