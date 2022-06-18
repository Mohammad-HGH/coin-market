import React, { Fragment } from 'react';

const Navbar = () => {
    return (
        <Fragment>
            <nav className="vertical-social">
                <ul>
                    <li><a href="#"><i className="fa fa-telegram" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
                    <li><a href="#"> <i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                </ul>
            </nav>

            {/* <!-- /////////////////////////////////// HEADER /////////////////////////////////////--> */}


            <header className="page-header">
                <nav className="main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1">
                    <div className="container">
                        <a className="navbar-brand animated" data-animation="fadeInDown" data-animation-delay="1s"
                            href="#head-area"><img src="../../../theme-assets/images-3d-animation/logo.png"
                                alt="Crypto Logo" /><span className="brand-text"><span className="font-weight-bold">Crypto</span>
                                ICO</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div id="navigation" className="navbar-nav ml-auto">
                                <ul className="navbar-nav mt-1">
                                    <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.1s">
                                        <a className="nav-link" href="index.html#about">What is ICO</a>
                                    </li>
                                    <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.2s">
                                        <a className="nav-link" href="index.html#problem-solution">Solutions</a>
                                    </li>
                                    <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.3s">
                                        <a className="nav-link" href="index.html#whitepaper">Whitepaper</a>
                                    </li>
                                    <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.4s">
                                        <a className="nav-link" href="index.html#token-sale-mobile-app">Token Sale</a>
                                    </li>
                                    <li className="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.5s">
                                        <a className="nav-link" href="index.html#roadmap">Roadmap</a>
                                    </li>
                                    <li className="dropdown show mr-2 px-2 animated" data-animation="fadeInDown"
                                        data-animation-delay="1.6s">
                                        <a className="dropdown-toggle white" href="#" role="button" id="more" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">More</a>
                                        <div className="dropdown-menu" aria-labelledby="more">
                                            <a className="dropdown-item" href="index.html#mobile-app">App</a>
                                            <a className="dropdown-item" href="index.html#team">Team</a>
                                            <a className="dropdown-item" href="index.html#faq">FAQ</a>
                                            <a className="dropdown-item" href="index.html#contact">Contact</a>
                                            <a className="dropdown-item" href="template-404.html">404</a>
                                            <a className="dropdown-item" href="template-inner-page-with-sidebar.html">Sample
                                                Page</a>
                                        </div>
                                    </li>
                                    <li className="dropdown show mr-4 animated" data-animation="fadeInDown"
                                        data-animation-delay="1.7s">
                                        <a className="dropdown-toggle" href="#" role="button" id="language" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><span
                                                className="flag-icon flag-icon-us"></span> EN</a>
                                        <div className="dropdown-menu" aria-labelledby="language">
                                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-de"></span>
                                                GN</a>
                                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-es"></span>
                                                SP</a>
                                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-mq"></span>
                                                FR</a>
                                        </div>
                                    </li>
                                </ul>
                                <span id="slide-line"></span>
                                <form className="form-inline mt-2 mt-md-0">
                                    <a className="btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated"
                                        data-animation="fadeInDown" data-animation-delay="1.8s"
                                        href="https://pixinvent.com/demo/crypto-ico-admin/html/ltr/vertical-menu/account-login.html"
                                        target="_blank">Sign in</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    );
};

export default Navbar;