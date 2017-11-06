import React from "react";

export const Results = props => (
    <wrapper>
        {props
            .articles
            .map(article => <ul key={article._id}>
                <div className="container">
                    <div className="card border-dark">
                        <div className="card-body">
                            <h2 className="card-title">
                                <a href={article.web_url}>{article.headline.print_headline}</a>
                            </h2>

                            <div className="card-text">
                                <h3>
                                    <a href={article.web_url}>{article.multimedia.filter(media => media.subtype === 'thumbnail').map(media => (
                                            <img src={'https://nytimes.com/' + media.url} style={{float: "right"}} alt={article.headline.main} />
                                          ))}
                                        </a><br/>
                                </h3>
                                <h5>
                                    Summary: {article.snippet}<br/><br/>
                                    Source: {article.source}<br/>
                                   
                                    Published Date: {article.pub_date}<br/>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>)}
    </wrapper>
);