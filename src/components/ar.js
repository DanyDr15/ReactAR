import React from 'react'
import {AFrameRenderer,Marker} from 'react-web-ar'
export default function ar() {
    return (
        <AFrameRenderer arToolKit={{ sourceType: 'webcam' }} >
         <Marker parameters={{ preset: 'hiro' }}>
        
        < a-text  value = " Profesor(a): Susana " > </ a-text ><br></br>

        </Marker>
      </AFrameRenderer>
    )
}