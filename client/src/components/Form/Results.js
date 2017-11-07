import React from "react";

export const Results = props => (
    <div>
        {props
            .articles
            .map(article => <ul key={article._id}>
                <div className="container">
                    <div className="card border-dark" style={{marginRight: 40}}>
                        <div className="card-body special-card">
                            <h5 className="card-title">
                                <a href={article.web_url}>{article.headline.print_headline || article.headline.main}</a>
                            </h5>

                            <div className="card-text">
                                <h5 className="text-muted">
                                    <a href={article.web_url}>{article.multimedia.filter(media => media.subtype === 'wide').map(media => (
                                            <img src={'https://nytimes.com/' + media.url} key={article.headline.main} style={{float: "right"}} alt={article.headline.main} />
                                          ))}
                                        </a><br/>
                                </h5>
                                <h6>
                                    {article.snippet}<br/><br/>
                                    
                                    Author: {article.byline ? article.byline.original : 'Not Listed' }<br/>
                                    Published Date: {article.pub_date}<br/>
                                    <a href={article.web_url}>Link</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>)}
    </div>
);