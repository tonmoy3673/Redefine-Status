import React from 'react';

const Banner = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <div className="hero min-h-screen rounded" style={{ backgroundImage: `url("https://redefinestatus.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1568736772245-26914aae0b09%3Fixlib%3Drb-4.0.3%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb&w=3840&q=75")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div >
                        <div className="text-center">
                        <h3 className='text-7xl mb-3'>🌟</h3>
                        <h1 className="mb-5 text-5xl font-bold">Redefine Status</h1>
                        
                        <h3 className='text-2xl font-semibold'>How We Can Correct Mankind's Leader board</h3>
                        </div>
                        <p className="py-5 px-8 whitespace-pre-wrap text-lg">
                        The fact that our designer goods do not represent wealth for positive utility is having more negative damage to society than we can fathom. This article is going to help detail why, and detail our solution in progress.As individuals, once we cover our basic needs, status becomes an intrinsic motivator in the rest of our actions. Status comes in many forms.
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;