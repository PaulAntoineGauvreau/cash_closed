import './cash.css';
import { useState } from 'react';

export default function Cash() {
    const [basicCash, setBasicCash] = useState(200);
    const [cash025, setCash025] = useState();
    const [cash1, setCash1] = useState();
    const [cash2, setCash2] = useState();
    const [cash5, setCash5] = useState();
    const [cash10, setCash10] = useState();
    const [cash20, setCash20] = useState();
    const [cash100, setCash100] = useState();
    const [transSyst, setTransSyst] = useState();
    const [tipSyst, setTipSys] = useState();


    const onChangeHandler = e => {
        if(e.target.name === 'tipSyst') setTipSys(e.target.value * 1) 
        if(e.target.name === 'transSyst') setTransSyst(e.target.value * 1) 
        if(e.target.name === 'basicCash') setBasicCash(e.target.value * 1) 
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
                { basicCash ?
                    <input 
                        type="number"
                        name="basicCash"
                        onChange={onChangeHandler}
                        value={basicCash}
                    />
                    :
                    <input 
                        type="number"
                        name="basicCash"
                        onChange={onChangeHandler}
                        value=""
                    />
                }

                <span>{basicCash}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="transSyst">Transaction syst. CASH</label>
                {transSyst ?
                    <input 
                        type="number"
                        name="transSyst"
                        onChange={onChangeHandler}
                        value={transSyst}
                    />
                    :
                    <input 
                    type="number"
                    name="transSyst"
                    onChange={onChangeHandler}
                    value=""
                />
                }
       
                <span>{transSyst}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="tipSyst">Pourboire syst.</label>
                { tipSyst ?

                <input 
                    type="number"
                    name="tipSyst"
                    onChange={onChangeHandler}
                    value={tipSyst}
                />
            
                :
                    <input 
                        type="number"
                        name="tipSyst"
                        onChange={onChangeHandler}
                        value=''
                    />
                        }
            <span>{tipSyst}</span>
            </div>

            <div className='container-input'>
                <label htmlFor="0.25">0.25</label>
                { cash025 ?
                    <input 
                        type="number"
                        name="0.25"
                        onChange={onChangeHandler}
                        value={cash025 / 0.25}
                    />
                    :
                    <input 
                        type="number"
                        name="0.25"
                        onChange={onChangeHandler}
                        value=""
                    />
                }
              
                <span>{cash025}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="1">1</label>
                { cash1 ?
                    <input 
                        type="number"
                        name="1"
                        onChange={onChangeHandler}
                        value={cash1 / 1}
                    />
                    :
                    <input 
                        type="number"
                        name="1"
                        onChange={onChangeHandler}
                        value=""
                    />
                }
                <span>{cash1}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="2">2</label>
                { cash2 ?
                    <input 
                        type="number"
                        name="2"
                        onChange={onChangeHandler}
                        value={cash2 / 2}
                    />
                    :
                    <input 
                        type="number"
                        name="2"
                        onChange={onChangeHandler}
                        value=""
                    />
                }
                
                <span>{cash2}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="5">5</label>
                {cash5  ?
                    <input 
                        type="number"
                        name="5"
                        onChange={onChangeHandler}
                        value={cash5 / 5}
                    />
                    : 
                    <input 
                        type="number"
                        name="5"
                        onChange={onChangeHandler}
                        value=''
                    />
                }
                
                <span>{cash5}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="10">10</label>
                { cash10 ?
                    <input 
                        type="number"
                        name="10"
                        onChange={onChangeHandler}
                        value={cash10 / 10}
                    />
                    : 
                    <input 
                        type="number"
                        name="10"
                        onChange={onChangeHandler}
                        value=""
                    />
                }
                
                <span>{cash10}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="20">20</label>
                { cash20 ?
                    <input 
                        type="number"
                        name="20"
                        onChange={onChangeHandler}
                        value={cash20 / 20}
                    />
                    :
                    <input 
                        type="number"
                        name="20"
                        onChange={onChangeHandler}
                        value=""
                    />
                }
                <span>{cash20}</span>
            </div>
            <div className='container-input'>
                <label htmlFor="100">100</label>
                { cash100 ?
                    <input 
                        type="number"
                        name="100"
                        onChange={onChangeHandler}
                        value={cash100 / 100}
                    />
                    :
                    <input 
                        type="number"
                        name="100"
                        onChange={onChangeHandler}
                        value=""
                    />
                }
              
                <span>{cash100}</span>
            </div>
            {cash025 + cash1 + cash2 + cash5 + cash10 + cash20 + cash100 ?
                <div className="total">Total : {cash025 + cash1 + cash2 + cash5 + cash10 + cash20 + cash100} $</div>
                :
                <div className="total">Total : 0 $</div>
            }
           {cash025 + cash1 + cash2 + cash5 + cash10 + cash20 + cash100 - basicCash - tipSyst ?
                <div className="total">Dépot : {cash025 + cash1 + cash2 + cash5 + cash10 + cash20 + cash100 - basicCash - tipSyst} $</div> 
                :
                <div className="total">Dépot : 0 $</div> 
           }
           {(cash025 + cash1 + cash2 + cash5 + cash10 + cash20 + cash100 - transSyst) + tipSyst ?
            <div className="total">Tip : {(cash025 + cash1 + cash2 + cash5 + cash10 + cash20 + cash100 - transSyst) + tipSyst } $</div> 
            :
            <div className="total">Tip : 0 $</div> 
           }
           {basicCash ?
            <div className="total">Laisser dans la caisse : {basicCash} $</div>
            :
            <div className="total">Laisser dans la caisse : 0 $</div>
           }
      </div>
    );
  }
  