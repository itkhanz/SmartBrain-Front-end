import React from 'react';
import BorderBox from './BorderBox';

const FaceRecognition = ({imageUrl, box, boxAll}) => {
    // console.log(boxAll);
    return (
        <div className='center ma'>
            <div className="absolute mt2">
                <img id='inputimage' src={imageUrl} alt='' width='500px' height='auto' />
                {/* <div 
                    className = 'bounding-box' 
                    style = {{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
                ></div> */}
                {
                    boxAll.map((box, i) => {
                        return (
                            <BorderBox
                                key = {boxAll[i].topRow}
                                top={boxAll[i].topRow}
                                right={boxAll[i].rightCol}
                                bottom={boxAll[i].bottomRow}
                                left={boxAll[i].leftCol}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default FaceRecognition
