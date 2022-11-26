import css from './Filter.module.scss';

export const Filter = ({ onChange }) => {
  return (
    <label>
      Find contacts by name:
      <input className={css.filter__input} type="text" onChange={onChange}></input>
    </label>
  );
};
