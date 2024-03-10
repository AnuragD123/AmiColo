"use client"
import { ThreeCircles } from 'react-loader-spinner';
const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default loading;
