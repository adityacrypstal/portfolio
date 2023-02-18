import React from 'react';
import dynamic from 'next/dynamic'

const Portfolio = dynamic(() => import('./portfolio'));


const Main = () => {
    return (
        <div>
            <main id="main">
                <Portfolio/>
            </main>
        </div>
    );
};

export default Main;
