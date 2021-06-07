import './InputData.css';

const InputData = () => {
  return (
    <div className='input-data-fields'>
      <label>Username</label>
      <input type='text'></input>
      <label>Age (Years)</label>
      <input type='number'></input>
      <button>Add User</button>
    </div>
  );
};

export default InputData;
