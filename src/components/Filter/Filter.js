import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "redux/contacts/contactsSlice";
import { selectFilter } from 'redux/contacts/selectors';

import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';

export const Filter = () => {

  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const handleFilterChange = event => dispatch(updateFilter(event.target.value));

  return (
    <FilterLabel>Find contacts by name
      <FilterInput
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </FilterLabel>
  );
};
