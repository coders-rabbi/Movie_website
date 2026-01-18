import React from 'react';
import useMovie from '../../Hooks/useMovie';

const Test = () => {
    const { data } = useMovie()
    console.log(data)
    return (
        <div>
            <h1>This is for testng purpose</h1>
        </div>
    );
};

export default Test;