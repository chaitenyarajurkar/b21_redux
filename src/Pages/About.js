import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {


    const reducerDta = useSelector(state=>state);

    console.log("About>>>",reducerDta);
    return (
        <div>
            About
        </div>
    );
};

export default About;