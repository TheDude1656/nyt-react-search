import React, {Component} from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "../../components/Grid";
import {List, ListItem} from "../../components/List";
import {
  Search,
  TextArea,
  FormBtn,
  Select,
  StartYear,
  EndYear
} from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    title: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API
      .getArticles()
      .then(res => this.setState({articles: res.data, title: "", date: "", url: ""}))
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
    if (this.state.title && this.state.url) {
      API
        .saveArticle({title: this.state.title, date: this.state.date, url: this.state.url})
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="12">
            <Jumbotron>
              <h1>
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>New York Times React Search</h1>
            </Jumbotron>
            <div className="card border-dark">
              <div className="card-header bg-dark text-light">
                <i className="fa fa-search" aria-hidden="true"></i>Search Parameters
              </div>
              <br/>
              <form>
                <Search
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Search Phrase (required)"/>
                <Select/>
                <StartYear/>
                <EndYear/>

                <FormBtn onClick={this.handleFormSubmit}>
                  <i className="fa fa-search" aria-hidden="true"></i>
                  Search
                </FormBtn>
              </form>
            </div>
            <br/>
            <div className="card border-dark">
              <div className="card-header bg-dark text-light">
                <i className="fa fa-table" aria-hidden="true"></i>
                Article Results
              </div>
              <br/>
            </div>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Articles;
