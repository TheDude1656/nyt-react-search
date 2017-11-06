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
                                    <a href={article.web_url}><img
                                        style={{float: "right"}}
                                        src={"https://www.nytimes.com/" + article.multimedia[1].url}
                                        alt="img"/></a><br/>
                                </h3>
                                <h5>
                                    Summary: {article.snippet}<br/><br/>
                                    Source: {article.source}<br/>
                                    Author: {article.byline.original}<br/>
                                    Published Date: {article.pub_date}<br/>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>)}
    </wrapper>
);