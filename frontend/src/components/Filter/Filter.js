import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  selectTitleFilter,
  selectAuthorFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter,
  resetFilters,
} from '../../redux/slices/filterSlice';
import './Filter.css';
const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);

  const authorFilter = useSelector(selectAuthorFilter);

  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };
  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleOnlyFavoriteFilterChange = (e) => {
    dispatch(setOnlyFavoriteFilter());
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            onChange={handleTitleFilterChange}
            placeholder="Filter by title..."
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            onChange={handleAuthorFilterChange}
            placeholder="Filter by name..."
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Only favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
