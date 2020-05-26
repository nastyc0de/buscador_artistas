import React,{Fragment} from 'react';

const Song = ({lyrics}) => {
    if (lyrics.length === 0) return null;
    
    return ( 
        <Fragment>
            <h2>Letra cancion</h2>
            <p className="letra">{lyrics}</p>
        </Fragment>
     );
}
 
export default Song;