import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [listNumbers, setListNumbers] = useState('');
  const sendListNumber = async (e) => {
    try {
      e.preventDefault();
      const listNumberToArray = listNumbers.split(',').map((element) => {
        return parseInt(element);
      });
      console.log(listNumberToArray);
      const {
        data: { result },
      } = await axios.post('http://localhost:3001/api/order-numbers', {
        listNumbers: listNumberToArray,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const addingListNumbers = ({ target }) => {
    setListNumbers(target.value);
  };

  return (
    <div className='App'>
      <form onSubmit={sendListNumber}>
        <label htmlFor='list'>Agrega tu lista de numeros</label>
        <input
          placeholder='Introdusca su lista numeros'
          name='list'
          value={listNumbers}
          onChange={addingListNumbers}
        />
        <button type='submit'>Ordenar Lista </button>
      </form>
    </div>
  );
}

export default App;
