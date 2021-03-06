import React,{useState} from 'react';


const Form = ({setSearchLyrics}) => {
    const [search, setSearch] = useState({
        artist:'',
        songs:''
    });
    const [error, setError] = useState(false);
    
    // Destructurar search
    const {artist, songs} = search;
    
    // funcion para leer el contenido de cada input
    const updateState = e =>{
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    // consultar las apis
    const searchInfo = e =>{
        e.preventDefault();

        if (artist.trim() ==='' || songs.trim() ===''){
            setError(true);
            return;
        }
        setError(false);
    }
    setSearchLyrics(search);

    return ( 
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>:null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={searchInfo} 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador de Letras</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Ingrese el nombre del Artista"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="songs"
                                            placeholder="Ingrese el titulo de la canción"
                                            onChange={updateState}
                                            value={songs}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Form;