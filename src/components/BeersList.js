import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';
class BeersList extends Component {
  state = {
    beers: [],
    name: '',
    image_url: '',
    contributed_by: '',
    tagline: '',
  };
  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({ beers: [...response.data] });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
          <Header/>
        {this.state.beers.map((beer) => {
          return (
            <div>
              <div className= "d-flex list-group-item list-group-item-action">
                <div className="mr-5 d-flex align-items-center">
                  <Link className="me-2" to={'/single-beer'}>
                    <img
                      width="60px"
                      src={beer.image_url}
                      className="img-fluid rounded-start"
                    />
                  </Link>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{beer.name}</h5>
                      <p className="card-text">{beer.tagline}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          {beer.contributed_by}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default BeersList;
















