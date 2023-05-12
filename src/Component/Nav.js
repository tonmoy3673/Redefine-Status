import React from 'react';

const Nav = () => {
    return (
        <div className='py-4'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <h2 className="btn btn-ghost normal-case text-xl">🌟 Redefine Status</h2>
                </div>
                <div className="relative gap-2">
                <span className='absolute right-3 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        </span>
                    <div className="form-control">
                        
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;