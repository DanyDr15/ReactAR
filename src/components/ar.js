import React from 'react'
import {AFrameRenderer,Marker} from 'react-web-ar'
export default function ar() {
    return (
        <AFrameRenderer arToolKit={{ sourceType: 'webcam' }} >
         <Marker parameters={{
                preset: "pattern",
                type: "pattern",
                url: "https://github.com/DanyDr15/ReactAR/blob/master/src/components/path/pattern-marker.patt"
              }}>
        
        < a-text  value = " Profesor(a): Susana " > </ a-text ><br></br>

        </Marker>
      </AFrameRenderer>
    )
}