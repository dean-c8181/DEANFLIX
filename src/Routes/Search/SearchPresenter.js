import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({ movieResults, tvResults, handleSubmit, searchTerm, loading, error }) => null;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    handleSubmit: PropTypes.func.isRequired,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string    
};

export default SearchPresenter;