import React from "react";

export const Results = props => (
    <wrapper>
        {props
            .articles
            .map(article => <ul key={article._id}>
                <div className="container">
                    <div className="card border-dark" style={{marginRight: 40}}>
                        <div className="card-body special-card">
                            <h5 className="card-title">
                                <a href={article.web_url}>{article.headline.print_headline}</a>
                            </h5>

                            <div className="card-text">
                                <h5 className="text-muted">
                                    <a href={article.web_url}>{article.multimedia.filter(media => media.subtype === 'wide').map(media => (
                                            <img src={'https://nytimes.com/' + media.url} style={{float: "right"}} alt={article.headline.main} />
                                          ))}
                                        </a><br/>
                                </h5>
                                <h6>
                                    {article.snippet}<br/><br/>
                                    
                                    Author: {article.byline ? article.byline.original : 'Not Listed' }<br/>
                                    Published Date: {article.pub_date}<br/>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>)}
    </wrapper>
);