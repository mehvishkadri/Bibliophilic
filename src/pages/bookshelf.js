import React from 'react';
import { Link } from "react-router-dom";
import b15 from '../assets/img/product/book7.jpg';
import b16 from '../assets/img/product/book8.jpg';
import b17 from '../assets/img/product/book14.jpg';
import b18 from '../assets/img/product/book15.jpg';
import b19 from '../assets/img/product/book1.jpg';
import b20 from '../assets/img/product/book17.jpg';
import b21 from '../assets/img/product/book18.jpg';
import b22 from '../assets/img/product/book19.jpg';
import b23 from '../assets/img/product/book20.jpg';

function Bookshelf(){
    return(
        <div className="book-shelf">
                <header>
                    
                    {/*-- header-mid-area-start --*/}
                <div className="header-mid-area ptb-20">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="logo-area text-center logo-xs-mrg">
                            <Link to="/loginHome"><h1 className="text-center">Bibliophilic</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/*-- header-mid-area-end --*/}
                {/*-- main-menu-area-start --*/}
                <div className="main-menu-area d-md-none d-none d-lg-block sticky-header-1" id="header-sticky">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="menu-area">
                                    <nav>
                                        <ul>
                                            
                                            <li>
                                                <Link to="/loginHome">Home</Link>
                                            </li>
                                            <li className="active">
                                                <Link to="/categoriesLogin">Categories<i className="fa fa-angle-down" /></Link>
                                                <div className="sub-menu sub-menu-2">
                                                <ul>
                                                    <li><Link to="/artMusic">Art and Music</Link></li>
                                                    <li><Link  to="/biographies">Biographies</Link></li>
                                                    <li><Link to="/business">Business</Link></li>
                                                    <li><Link to="/comics">Comics</Link></li>
                                                    <li><Link to="/computer">Computer</Link></li>
                                                    <li><Link to="/cooking">Cooking</Link></li>
                                                    <li><Link to="/education">Education</Link></li>
                                                    <li><Link to="/health">Health and Fitness</Link></li>
                                                    <li><Link to="/history">History</Link></li>
                                                    <li><Link to="/romance">Romance</Link></li>
                                                    <li><Link to="/kids">Kids</Link></li>
                                                    <li><Link to="/sports">Sports</Link></li>
                                                    <li><Link to="/travel">Travel</Link></li>
                                                    <li><Link to="/crime">Crime</Link></li>
                                               
                                                </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                    
                            </div>
                            <div className="col-lg-6">
                                <div className="menu-area ">
                            
                                    <nav>
                                        <ul>
                                        <li>
                                            <Link to="/profile">Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/bookshelf">Bookshelf</Link>
                                        </li>
                                        <li>
                                            <Link to="/followers">Followers</Link>
                                        </li>
                                        
            
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="col-lg-2">
                                <div className="menu-area ">
                            
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to=""><i className="fa fa-user" />Username</Link>
                                                <div className="sub-menu sub-menu-2">
                                                    <ul>
                                                        <li><Link to="/logout">Logout</Link></li>
                                                    </ul>
                                                </div>
                                            </li>    
                                        </ul>
                                    </nav>
                                </div>
                            </div>            
                        </div>
                    </div>
                </div>
            {/*-- main-menu-area-end --*/}
            </header>

            <div className="shop-main-area mb-70 mt-50">
            <div className="container">
                <div className="row">
                <div className="col-lg-2 col-md-12 col-12 order-lg-1 order-2 mt-sm-50 mt-xs-40">
                    <div className="shop-left" style={{marginTop: 105}}>
                    <div className="section-title-5 mb-30">
                        <h2>Menu</h2>
                    </div>
                    <div className="left-menu mb-30 text-justify">
                        <ul>
                        <li className="active"><Link to="/bookshelf">All</Link></li>
                        <li><Link to="/readBooks">Read</Link></li>
                        <li><Link to="/flagBooks">Flagged</Link></li>
                        </ul>
                    </div>
                    </div>	
                </div>
                <div className="col-lg-9 col-md-12 col-12 order-lg-2 order-1">
                    <div className="section-title-5 mb-30">
                    <h2 style={{marginLeft:'210px'}}>All</h2>
                    <Link className="btn btn-sqr" style={{marginLeft:'410px'}} to='/addBook'> Add New Book</Link>
                    </div>
                    {/* tab-area-start */}
                    <div className="tab-content mt-70 text-justify">
                    <div className="tab-pane fade show active" id="list">
                        {/* single-shop-start */}
                        <div className="single-shop mb-30">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="product-wrapper-2">
                                        <div className="product-img">
                                            <Link to="#">
                                                <img src={b20} alt="book" className="primary" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <div className="product-wrapper-content">
                                        <div className="product-details">
                                            <div className="product-rating">
                                                <ul>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                </ul>
                                            </div>
                                            <h4><Link to="#">Spilt Milk</Link></h4>
                                            <h6>Courtney Zoffness</h6>
                                            <p>What role does a mother play in raising thoughtful, generous children? In her literary debut, internationally award-winning writer Courtney Zoffness considers what we inherit from generations past―biologically, culturally...</p>
                                        </div>
                                        <div className="product-link">
                                            <div className="product-button">
                                                <Link to="/bookDetails" title="Add to cart"><i className="fa fa-book" />Book Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single-shop-end */}
                        {/* single-shop-start */}
                        <div className="single-shop mb-30">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="product-wrapper-2">
                                        <div className="product-img">
                                            <Link to="#">
                                                <img src={b21} alt="book" className="primary" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <div className="product-wrapper-content">
                                        <div className="product-details">
                                            <div className="product-rating">
                                                <ul>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                </ul>
                                            </div>
                                            <h4><Link to="#">My Inner Sky</Link></h4>
                                            <h6>Mari Andrew</h6>
                                            <p>From New York Times bestselling author Mari Andrew, a collection of essays and illustrations, divided into phases of the sky--twilight, golden hour, night, and dawn--that serves as a loyal companion for  life's curveballs A whole...</p>
                                        </div>
                                        <div className="product-link">
                                            <div className="product-button">
                                                <Link to="/bookDetails" title="Add to cart"><i className="fa fa-book" />Book Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single-shop-end */}
                        {/* single-shop-start */}
                        <div className="single-shop mb-30">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="product-wrapper-2">
                                        <div className="product-img">
                                            <Link to="#">
                                                <img src={b22} alt="book" className="primary" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <div className="product-wrapper-content">
                                        <div className="product-details">
                                            <div className="product-rating">
                                                <ul>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                </ul>
                                            </div>
                                            <h4><Link to="#">The Agreement</Link></h4>
                                            <h6>Bethany-Kris</h6>
                                            <p>Criminal. Spoiled. Entirely out of control. Roman Avdonin has heard it all. None of it stops him from crossing the line one more time. Sent to Chicago to answer for his wrongs, he’s an outsider beneath the cruel gazes of men...</p>
                                        </div>
                                        <div className="product-link">
                                            <div className="product-button">
                                                <Link to="/bookDetails" title="Add to cart"><i className="fa fa-book" />Book Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single-shop-end */}
                        {/* single-shop-start */}
                        <div className="single-shop mb-30">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="product-wrapper-2">
                                        <div className="product-img">
                                            <Link to="#">
                                                <img src={b23} alt="book" className="primary" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <div className="product-wrapper-content">
                                        <div className="product-details">
                                            <div className="product-rating">
                                                <ul>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                                </ul>
                                            </div>
                                            <h4><Link to="#">Nöthin' But a Good Time</Link></h4>
                                            <h6>Tom Beaujour</h6>
                                            <p>The New York Times BestsellerThe Explosive National Bestseller"A backstage pass to the wildest and loudest party in rock history—you'll feel like you were right there with us!" —Bret Michaels of PoisonNothin' But a Good Time is...</p>
                                        </div>
                                        <div className="product-link">
                                            <div className="product-button">
                                                <Link to="/bookDetails" title="Add to cart"><i className="fa fa-book" />Book Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single-shop-end */}

                        {/* single-shop-start */}
                        <div className="single-shop mb-30">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="product-wrapper-2">
                                <div className="product-img">
                                <Link to="#">
                                    <img src={b15} alt="book" className="primary" />
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                            <div className="product-wrapper-content">
                                <div className="product-details">
                                <div className="product-rating">
                                    <ul>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    </ul>
                                </div>
                                <h4><Link to="#">Maybe Now</Link></h4>
                                <h6>Colleen Hoover</h6>
                                <p>What is more important? Friendship, loyalty or love? Colleen Hoover and Griffin Peterson collaborate once again to bring fans of Maybe Someday back into the musical world of Ridge and Sydney. And Maggie. And Warren and...</p>
                                </div>
                                <div className="product-link">
                                <div className="product-button">
                                    <Link to="/bookDetails" title="Add to cart"><i className="fa fa-book" />Book Details</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* single-shop-end */}
                        {/* single-shop-start */}
                        <div className="single-shop mb-30">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="product-wrapper-2">
                                <div className="product-img">
                                <Link to="#">
                                    <img src={b16} alt="book" className="primary" />
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                            <div className="product-wrapper-content">
                                <div className="product-details">
                                <div className="product-rating">
                                    <ul>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    </ul>
                                </div>
                                <h4><Link to="#">The Violinist of Auschwitz</Link></h4>
                                <h6>Ellie Midwood</h6>
                                <p>Auschwitz, 1943: In the depths of hell, can hope rise? And can love triumph over hatred? Based on the unforgettable true story of Alma Rosé, The Violinist of Auschwitz brings to life one of history’s most fearless...</p>
                                </div>
                                <div className="product-link">
                                <div className="product-button">
                                    <Link to="/bookDetails" title="Add to cart"><i className="fa fa-book" />Book Details</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* single-shop-end */}
                        {/* single-shop-start */}
                        <div className="single-shop mb-30">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="product-wrapper-2">
                                <div className="product-img">
                                <Link to="#">
                                    <img src={b17} alt="book" className="primary" />
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                            <div className="product-wrapper-content">
                                <div className="product-details">
                                <div className="product-rating">
                                    <ul>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    </ul>
                                </div>
                                <h4><Link to="#">Last Call</Link></h4>
                                <h6>Elon Green</h6>
                                <p>The gripping true story, told here for the first time, of the Last Call Killer and the gay community of New York City that he preyed upon.The Townhouse Bar, midtown, July 1992: The piano player seems to know every song ever...</p>
                                </div>
                                <div className="product-link">
                                <div className="product-button">
                                    <Link to="/bookDetails" title="Add to cart"><i className="fa fa-book" />Book Details</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* single-shop-end */}
                        {/* single-shop-start */}
                        <div className="single-shop mb-30">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="product-wrapper-2">
                                <div className="product-img">
                                <Link to="#">
                                    <img src={b18} alt="book" className="primary" />
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                            <div className="product-wrapper-content">
                                <div className="product-details">
                                <div className="product-rating">
                                    <ul>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    </ul>
                                </div>
                                <h4><Link to="#">The Babysitter</Link></h4>
                                <h6>Liza Rodman</h6>
                                <p>Growing up on Cape Cod in the 1960s, Liza Rodman was a lonely little girl. During the summers, while her mother worked days in a local motel and danced most nights in the Provincetown bars, her babysitter—the kind...</p>
                                </div>
                                <div className="product-link">
                                <div className="product-button">
                                    <Link to="/bookDetails" title="Add to cart"><i className="fa fa-book" />Book Details</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* single-shop-end */}
                        {/* single-shop-start */}
                        <div className="single-shop">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="product-wrapper-2">
                                <div className="product-img">
                                <Link to="#">
                                    <img src={b19} alt="book" className="primary" />
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                            <div className="product-wrapper-content">
                                <div className="product-details">
                                <div className="product-rating">
                                    <ul>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    </ul>
                                </div>
                                <h4><Link to="#">Feelings: A Story in Seasons</Link></h4>
                                <h6>Manjit Thapp</h6>
                                <p>A gorgeous visual journey through one young woman's year of emotions--from the saturated highs of early summer to the grey isolation of late winter. Enter Manjit Thapp's world, where you'll find moods that change as quickly...</p>
                                </div>
                                <div className="product-link">
                                <div className="product-button">
                                    <Link to="/bookDetails" title="Add to cart"><i className="fa fa-book" />Book Details</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* single-shop-end */}
                    </div>
                    </div>
                    {/* tab-area-end */}
                    {/* pagination-area-start */}
                    <div className="pagination-area mt-50">
                    <div className="list-page-2">
                        <p>Items 1-9 of 11</p>
                    </div>
                    <div className="page-number">
                        <ul>
                        <li><Link to="#" className="active">1</Link></li>
                        <li><Link to="#">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li><Link to="#">4</Link></li>
                        <li><Link to="#" className="angle"><i className="fa fa-angle-right" /></Link></li>
                        </ul>
                    </div>
                    </div>
                    {/* pagination-area-end */}
                </div>
                </div>
            </div>
            </div>


        </div>
    );
}
export default Bookshelf;