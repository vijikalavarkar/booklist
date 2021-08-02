import React from 'react'
import '../css/Books.css'

export default function Books() {
    return (
        <>
            <div className="main_background">
                <div className="row">
                    <div className="cols-lg-10 col-md-10 mx-auto col-12">
                        <div className="header">
                            <h1 className="text-center my-3">Books</h1>
                        </div>

                        <div className="searchbox">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit"><i className="fas fa-th-large"></i></button>
                            <button class="btn btn-outline-success" type="submit"><i className="fas fa-th-list"></i></button>
                        </form>
                        </div>
                        
                        <div className="menus">
                            <div className="row text-center mt-4">
                                <div className="col-lg-6 col-md-6 col-12">
                                    {/* Cards */}
                                    <div class="card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                            <img src="https://wallpapercave.com/fuwp/uwp1288615.jpeg" class="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <h3>Author</h3>
                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                               
                                            </div>
                                            </div>
                                        </div>
                                        </div>


                                    {/* Cards */}
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Special title treatment</h5>
                                        <h3>Author</h3>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.</p>
                              
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        
                    </div>
                </div>
            </div>
        </>
    )
}
