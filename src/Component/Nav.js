import React from 'react';

const Nav = () => {
    return (
        <div className='py-4'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <h2 className="btn btn-ghost normal-case text-xl">🌟 Redefine Status</h2>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;