import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ContriesListItem from './ContriesListItem';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const AllCountriesList = ({
  AllCountriesData: {
    allCountriesData,
    allCountriesSortedByCases,
    allCountriesloading
  }
}) => {
  return (
    <Fragment>
      {allCountriesData === null || allCountriesloading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="AllCountriesListCounteiner">
          <p className='countriesListHeader'>
            <i class='far fa-flag'></i>All Countries Stats
          </p>
          <div className='AllCountriesList'>
            {allCountriesSortedByCases.map((country, id) => (
              <ContriesListItem country={country} key={id} id={id} />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

AllCountriesList.prototype = {
  allCountriesData: PropTypes.array,
  allCountriesSortedByCases: PropTypes.array,
  allCountriesloading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  AllCountriesData: state.AllCountries
});

export default connect(mapStateToProps)(AllCountriesList);
