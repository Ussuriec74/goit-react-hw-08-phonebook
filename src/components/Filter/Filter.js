import PropTypes from 'prop-types';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from 'redux/actions';
import { getFilter } from 'redux/selectors';

import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';

export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event => dispatch(updateFilter(event.currentTarget.value));

  return (
    <FilterLabel>Find contacts by name
      <FilterInput type="text" value={filter} onChange={handleFilterChange} />
    </FilterLabel>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string,
//   onChange: PropTypes.func,
// };