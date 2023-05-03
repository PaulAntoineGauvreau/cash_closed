import './cash.css';
import { useState } from 'react';

export default function Cash() {
    const [basicCash, setBasicCash] = useState(200);
    const [cash025, setCash025] = useState(0);
    const [cash1, setCash1] = useState(0);
    const [cash2, setCash2] = useState(0);
    const [cash5, setCash5] = useState(0);
    const [cash10, setCash10] = useState(0);
    const [cash20, setCash20] = useState(0);
    const [cash100, setCash100] = useState(0);


    const onChangeHandler = e => {

        if(e.target.name === 'basicCash') setBasicCash(e.target.value) 
        if(e.target.name === '0.25') setCash025(e.target.value * 0.25)
        if(e.target.name === '1') setCash1(e.target.value * 1)
        if(e.target.name === '2') setCash2(e.target.value * 2)
        if(e.target.name === '5') setCash5(e.target.value * 5)
        if(e.target.name === '10') setCash10(e.target.value * 10)
        if(e.target.name === '20') setCash20(e.target.value * 20)
        if(e.target.name === '100') setCash100(e.target.value * 100)
    };


    return (
      <div className="cash">
            <div className='container-input'>
                <label htmlFor="basicCash">Montant à laisser dans la caisse</label>
                <input 
                    type="number"
                    name="basicCash"
                    onChange={onChangeHandler}
                    value={basicCash}
                    />
                <span>{basicCash}</span>
            </div>
            <div className="line"></div>
            <div className='container-input'>
                <label htmlFor="0.25">0.25</label>
                <input 
                    type="number"
                    name="0.25"
                    onChange={onChangeHandler}
                    value={cash025 / 0.25}
                    />
                <span>{cash025}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="1">1</label>
                <input 
                    type="number"
                    name="1"
                    onChange={onChangeHandler}
                    value={cash1 / 1}
                    />
                <span>{cash1}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="2">2</label>
                <input 
                    type="number"
                    name="2"
                    onChange={onChangeHandler}
                    value={cash2 / 2}
                    />
                <span>{cash2}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="5">5</label>
                <input 
                    type="number"
                    name="5"
                    onChange={onChangeHandler}
                    value={cash5 / 5}
                    />
                <span>{cash5}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="10">10</label>
                <input 
                    type="number"
                    name="10"
                    onChange={onChangeHandler}
                    value={cash10 / 10}
                    />
                <span>{cash10}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="20">20</label>
                <input 
                    type="number"
                    name="20"
                    onChange={onChangeHandler}
                    value={cash20 / 20}
                    />
                <span>{cash20}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="100">100</label>
                <input 
                    type="number"
                    name="100"
                    onChange={onChangeHandler}
                    value={cash100 / 100}
                    />
                <span>{cash100}</span>
            </div>
            <div className="total">Total : {cash025 + cash1 + cash2 + cash5 + cash10 + cash20 + cash100} $</div>
            <div className="total">Dépot : {cash025 + cash1 + cash2 + cash5 + cash10 + cash20 + cash100 - basicCash} $</div>
      </div>
    );
  }
  