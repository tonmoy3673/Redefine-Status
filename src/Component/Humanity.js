import React from 'react';
import { ImPointRight } from "react-icons/im";

const Humanity = () => {
    return (
        <div className='py-4 dark:bg-gray-900 dark:text-white'>

            <div className="text-center">
                <div className=" dark:bg-gray-900">
                    <h1 className="text-3xl font-bold mb-5  dark:bg-gray-900">We have a coordination test for humanity</h1>
                    <p className="py-4 px-4 text-justify mt-4">If we have every individual with a self-interest approach we go into a terrible situation. The more we convert to love for others the better chance we have to pass the test. </p>
                    <p className="py-4 px-4 text-justify mb-3">It wasn't until our culture defined cigarettes as bad that we quit them. They are just as addicting. They become negative status symbols. Hopefully showing the power status has on human behavior. If you thought sex/mating runs the world just wait till you realize that status is above even that.  </p>

                    <div className="chat chat-start py-3">
                        <div className="chat-bubble bg-blue-200 text-black text-justify italic">"If only we could make love what people optimize for over wealth. We can help society at large realize that is the true way to win the game of life.”<span><a href='https://jackjay.io/' className='underline hover:underline-offset-4'> -Jack Jay</a></span> </div>
                    </div>

                    <div className='py-6'>

                        <p className='flex lg:items-center gap-2 mb-3'>
                            <ImPointRight /> <span>If we can change whats cool, then love can rule.</span>
                        </p>
                        <p className='flex items-center gap-2 mb-3'>
                            <ImPointRight /> <span>If you are moved, then let's move mountains.</span>
                        </p>
                        <p className='flex items-center gap-2 mb-3'>
                            <ImPointRight /> <span>Schedule a call <a href='https://www.calendar.com/not-found/' target='blank' className='underline hover:underline-offset-4 hover:border-red-500'>
                            HERE</a></span>
                        </p>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Humanity;