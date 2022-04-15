import React from 'react';

const ImagesComp = (props) => {
    return (
        <React.Fragment>
            <div className='image' onClick={(event) => {props.clickHandle(event, props.index)}}>                
                <img onClick={(event) => {props.clickHandle(event, props.index)}} src={props.imageUrl} alt="" />
            </div>
        </React.Fragment>
    )
}

export default ImagesComp