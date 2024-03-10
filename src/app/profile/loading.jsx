"use client"
import { FallingLines } from 'react-loader-spinner';

const loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <FallingLines
                color="#ffffff"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
        </div>
    );
};

export default loading;
