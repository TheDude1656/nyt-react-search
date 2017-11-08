import React, {Component} from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import {Col, Row, Container} from "../../components/Grid";

import {Search, FormBtn, Results} from "../../components/Form";

const currentYear = (new Date()).getFullYear();
var years = [];
for (let i = 1851; i <= currentYear; i++) {
  years.unshift(i);
}

class Articles extends Component {
  state = {
    articles: [],
    title: "",
    beginDate: (currentYear - 5),
    endDate: (currentYear),
    numSearches: 5,
    query: "",
    url: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API
      .getArticles({q: this.state.title, beginDate: this.state.beginDate, endDate: this.state.endDate, numSearches: this.state.numSearches})
      .then(res => this.setState({articles: res.data.response.docs}))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API
      .deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadArticles();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="12">
            <Jumbotron>
              <h1 className="text-center">
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>New York Times React Search</h1>
            </Jumbotron>
            <div className="card border-dark customCard">
              <div className="card-header bg-dark text-light shadowText">
                <i className="fa fa-search" aria-hidden="true"></i>Search Parameters
              </div>
              <br/>
              <form>
                <Search
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Search Phrase (required)"/>

                <div className="form-group container">
                  <label htmlFor="beginDateSelect">Select Beginning Year (Optional)</label>
                  <select
                    className="form-control"
                    value={this.state.beginDate}
                    onChange={this.handleInputChange}
                    name="beginDate">
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div>
                <div className="form-group container">
                  <label htmlFor="endDateSelect">Select End Year (Optional)</label>
                  <select
                    className="form-control"
                    value={this.state.endDate}
                    onChange={this.handleInputChange}
                    name="endDate">
                    {years.map(year => <option key={year + "end"} value={year}>{year}</option>)}
                  </select>
                </div>
                <FormBtn onClick={this.handleFormSubmit}>
                  <i className="fa fa-search" aria-hidden="true"></i>
                  Search
                </FormBtn>
              </form>
            </div>
            <br/>
            <div className="card border-dark customCard">
              <div
                className="card-header bg-dark text-light shadowText"
                style={{
                marginBottom: 10
              }}>
                <i className="fa fa-table" aria-hidden="true"></i>
                Article Results
              </div>
              <Results articles={this.state.articles}/>
              <br/>
            </div>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Articles;
