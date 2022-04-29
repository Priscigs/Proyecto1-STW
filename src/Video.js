import React from 'react';
 
class Video extends React.Component {
 
    render() {const item = [
        {id: 1, video: '../assets/nature.mp4', formato: 'video/mp4',
        }
    ];

    return (

        item.map(item => {
            return  <div key={ item.id }>
                <video width='100%' controls>
                    <source src={ item.video} type={ item.formato }/>
                </video>
            </div>;
        })
    );
    }
}
 
export default Video;