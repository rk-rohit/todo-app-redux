import React from 'react';

const Layout = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 px-0">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout;