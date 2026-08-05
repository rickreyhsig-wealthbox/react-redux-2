import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(({ cars: { searchTerm } }) => searchTerm);

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">
        My Cars
      </h3>
      <div className="field">
        <label className="label">Search by Name</label>
        <div className="search field is-horizontal">
          <label className="label">Search</label>
          <input
            className="input"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CarSearch;
