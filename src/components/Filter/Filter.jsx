import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/phoneBookSlice';
import css from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.phoneBook.filter);

  const onChange = item => {
    dispatch(updateFilter(item));
  };

  return (
    <>
      Find contacts by name:
      <label className={css.container}>
        <input
          className={css.filter__input}
          type="text"
          onChange={e => onChange(e.target.value.trim().toLocaleLowerCase())}
          value={filter}
        ></input>
        {filter && (
          <button
            className={css.button}
            type="button"
            onClick={() => dispatch(updateFilter(''))}
          >
            Clear filter
          </button>
        )}
      </label>
    </>
  );
};
