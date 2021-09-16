import React from 'react';
import { Link } from "react-router-dom";

import b1 from '../assets/img/product/book11.jpg';
import b2 from '../assets/img/product/book9.jpg';
import b3 from '../assets/img/product/book12.jpg';
import b4 from '../assets/img/product/book13.jpg';
import b5 from '../assets/img/product/book10.jpg';
import b6 from '../assets/img/product/16.jpg';
import b7 from '../assets/img/product/7.jpg';
import b8 from '../assets/img/product/8.jpg';
import b9 from '../assets/img/product/9.jpg';
import b10 from '../assets/img/product/10.jpg';


function BookDetails()
{
    return(
        <div className="book-details">
            <header>
                    
                    {/*-- header-mid-area-start --*/}
                <div className="header-mid-area ptb-20">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="logo-area text-center logo-xs-mrg">
                            <Link to="/"><h1 className="text-center">Bibliophilic</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            {/*-- header-mid-area-end --*/}
            {/*-- main-menu-area-start --*/}
                <div className="main-menu-area d-md-none d-none d-lg-block sticky-header-1" id="header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="menu-area">
                                    <nav>
                                        <ul>
                                            
                                            <li>
                                                <Link to="/">Home</Link>
                                            
                                            </li>
                                            <li>
                                                <Link to="/categories">Categories<i className="fa fa-angle-down" /></Link>
                                                <div className="sub-menu sub-menu-2">
                                                <ul>
                                                    <li><Link to="/artMusic">Art and Music</Link></li>
                                                    <li><Link  to="/biographies">Biographies</Link></li>
                                                    <li><Link to="/business">Business</Link></li>
                                                    <li><Link to="/comics">Comics</Link></li>
                                                    <li><Link to="/computer">Computer and Technology</Link></li>
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
                            
                        </div>
                    </div>
                </div>
            {/*-- main-menu-area-end --*/}
            </header>

            {/* book-main-area-start */}
            <div className="product-main-area mb-70">
            <div className="container">
                <div className="row">
                <div className="col-lg-9 col-md-12 col-12 order-lg-1 order-1">
                    {/* product-main-area-start */}
                    <div className="product-main-area">
                        <div className="row mt-50">
                            <div className="col-lg-5 col-md-6 col-12">
                                <div className="product-wrapper-2 mt-20">
                                    <div className="product-img">
                                        <img src={b1} alt="book" className="primary" />
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 col-12">
                            <div className="product-info-main text-left">
                                <div className="page-title">
                                <h1>A Promised Land</h1>
                                </div>
                                <div className="product-info-stock-sku">
                                <span>Author: Barack Obama</span>
                                <div className="product-attribute">
                                    <span />
                                    <span className="value" />
                                </div>
                                </div>
                                <div className="product-reviews-summary">
                                <div className="rating-summary">
                                    <Link to="#"><i className="fa fa-star" /></Link>
                                    <Link to="#"><i className="fa fa-star" /></Link>
                                    <Link to="#"><i className="fa fa-star" /></Link>
                                    <Link to="#"><i className="fa fa-star" /></Link>
                                    <Link to="#"><i className="fa fa-star" /></Link>
                                </div>
                                <div className="reviews-actions">
                                    <Link to="#"> Reviews</Link>
                                    <Link to="#" className="view">Add Your Review</Link>
                                </div>
                                </div>
                                <div className="product-add-form">
                                <form action="#">
                                    <Link to="#">Add to Bookshelf</Link>
                                </form>
                                </div>
                                <div className="product-social-links">
                                <div className="product-addto-links-text">
                                    <p style={{marginTop: '-50px'}}>
                                    </p><h6>Description:</h6>
                                    A Promised Land is extraordinarily intimate and introspective—the story of one man’s bet with history, the faith of a community organizer tested on the world stage. Obama is candid about the balancing act of running for office as a Black American, bearing the expectations of a generation buoyed by messages of “hope and change,” and meeting the moral challenges of high-stakes decision-making. He is frank about the forces that opposed him at home and abroad, open about how living in the White House affected his wife and daughters, and unafraid to reveal self-doubt and disappointment. Yet he never wavers from his belief that inside the great, ongoing American experiment, progress is always possible.
                                    This beautifully written and powerful book captures Barack Obama’s conviction that democracy is not a gift from on high but something founded on empathy and common understanding and built together, day by day.<p />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>	
                    </div>
                    {/* product-main-area-end */}

                    {/* product-info-area-start */}
                    <div className="product-info-area mt-80">
                    {/* Nav tabs */}
                    <ul className="nav">
                        <li><Link className="active" to="#Reviews" data-toggle="tab">Reviews</Link></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="Reviews">
                        <div className="valu valu-2 text-left">
                            <div className="section-title mt-10">
                            <h2>Customer Reviews</h2>
                            </div>
                            <ul>
                            <li>
                                
                                <div className="review-left">
                                <div className="review-rating">
                                    <span>Rating</span>
                                    <div className="rating-result">
                                    <Link to="#"><i className="fa fa-star" /></Link>
                                    <Link to="#"><i className="fa fa-star" /></Link>
                                    <Link to="#"><i className="fa fa-star" /></Link>
                                    <Link to="#"><i className="fa fa-star" /></Link>
                                    <Link to="#"><i className="fa fa-star" /></Link>
                                    </div>
                                </div>
                                </div>
                                <div className="review-right">
                                <div className="review-content">
                                    <h4>
                                        This book was so incredible and it gave me so much hope for America. I miss Obama so much, he's so well-spoken and he has such a way with words, I listened to the audiobook which is definitely the way to go for this book. This is one of the only political books I have ever read, but it was absolutely captivating to hear about all the experiences he went through as President and all the tough decisions he had to make. I love that throughout it he sprinkles in his stories of his family and I loved hearing about Michelle and the girls, their family is the cutest.
                                    </h4>
                                </div>
                                <div className="review-details">
                                    <p className="review-author">Review by<Link to="#">John Wick</Link></p>
                                    <p className="review-date">Posted on <span>06/04/2021</span></p>
                                </div>
                                </div>
                            </li>
                            </ul>
                            </div>
                        </div>
                    </div>	
                    </div>
                    {/* product-info-area-end */}
                    

                    {/* new-book-area-start */}
                    <div className="new-book-area mt-60">
                        <div className="section-title text-center mb-30">
                            <h3>Related Books</h3>
                        </div>
                        <div className="tab-active-2">
                            <div className="row">
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-wrapper">
                                    <div className="product-img">
                                        <Link to="#">
                                        <img src={b2} alt="book" className="primary" />
                                        </Link>
                                        <div class="quick-view">
                                            <Link class="action-view" to="/BookDetails" data-target="#productModal" data-toggle="modal" title="Quick View">
                                                <i class="fa fa-search-plus"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-details text-center">
                                        <div className="product-rating">
                                        <ul>
                                            <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                            <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                            <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                            <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                            <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        </ul>
                                        </div>
                                        <h4><Link to="#">The Agitators</Link></h4>
                                    </div>
                                                            	
                                </div>
                                </div>
                                {/* single-product-end */}

                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-wrapper">
                                <div className="product-img">
                                    <Link to="#">
                                    <img src={b3} alt="book" className="primary" />
                                    </Link>
                                    <div class="quick-view">
                                            <Link class="action-view" to="/BookDetails" data-target="#productModal" data-toggle="modal" title="Quick View">
                                                <i class="fa fa-search-plus"></i>
                                            </Link>
                                    </div>
                                </div>
                                <div className="product-details text-center">
                                    <div className="product-rating">
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    </ul>
                                    </div>
                                    <h4><Link to="#">Born a Crime</Link></h4>
                                </div>
                                	
                                </div>
                                </div>
                                {/* single-product-end */}
                                
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-wrapper">
                                <div className="product-img">
                                    <Link to="#">
                                    <img src={b4} alt="book" className="primary" />
                                    </Link>
                                    <div class="quick-view">
                                            <Link class="action-view" to="/BookDetails" data-target="#productModal" data-toggle="modal" title="Quick View">
                                                <i class="fa fa-search-plus"></i>
                                            </Link>
                                    </div>
                                </div>
                                <div className="product-details text-center">
                                    <div className="product-rating">
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    </ul>
                                    </div>
                                    <h4><Link to="#">Steve Jobs</Link></h4>
                                </div>
                                	
                                </div>
                                </div>
                                {/* single-product-end */}
                                {/* single-product-start */}
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-wrapper">
                                <div className="product-img">
                                    <Link to="#">
                                    <img src={b5} alt="book" className="primary" />
                                    </Link>
                                    <div class="quick-view">
                                        <Link class="action-view" to="/BookDetails" data-target="#productModal" data-toggle="modal" title="Quick View">
                                            <i class="fa fa-search-plus"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-details text-center">
                                    <div className="product-rating">
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    </ul>
                                    </div>
                                    <h4><Link to="#">The Disordered Cosmos</Link></h4>
                                </div>
                                	
                                </div>
                                </div>
                                {/* single-product-end */}	
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
            </div>

		
        </div>
        );
}
export default BookDetails;