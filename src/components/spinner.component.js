import React from 'react';


const Spinner = (props) => {

    return (<div className={props.loading?'loading':'hidden'}>
        <img src="src/imgs/loading.gif" width="30" height="30" />
        Loading...
        </div>)


}

export default Spinner;