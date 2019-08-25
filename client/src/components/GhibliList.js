import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Ghibli from './Ghibli';

const GhibliList = props => {
  return (
    <div>
      <img src = "StudioGhibli.png" alt="StudioGhibli"/>
      <button className='btn' onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get Ghibli Data'
        )}
      </button>
      {props.Ghibli &&
        props.Ghibli.map(item => <Ghibli key={item.id} Ghibli={item} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    Ghibli: state.Ghibli
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(GhibliList);