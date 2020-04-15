import React from 'react';
import { connect } from 'react-redux';
import ContriesListItem from './ContriesListItem';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const AllCountriesList = ({ countriesData: { allCountries, loading } }) => {
  return (
    <div>
      {allCountries === null || loading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        allCountries
          .sort((a, b) => {
            return b.cases - a.cases;
          })
          .map((country, id) => (
            <ContriesListItem country={country} key={id} id={id} />
          ))
      )}
    </div>
  );
};

AllCountriesList.prototype = {
  countriesData: PropTypes.array
};

const mapStateToProps = state => ({
  countriesData: state.Data
});

export default connect(mapStateToProps)(AllCountriesList);
