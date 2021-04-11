import React, { useEffect, useState } from 'react';

import CardItem from '../CardItem';
import '../../App.css';

import Footer from '../Footer';
import { getAll, onChunks } from "../services/pillowHandlers";
import fP from '../services/pathSolver';

export default function Products({ match }) {
  const [pillows, setPillows] = useState([]);
  const [countByRow, setCountByRow] = useState(3)
  const [isDelete, setIsDelete] = useState(false)
  useEffect(() => {
    getAll().then(res => {
      setPillows(onChunks(res, countByRow));
    })
  }, [countByRow, isDelete])



  function onChangeCount(e) {
    setCountByRow(e.target.value)
  }
  function onDeletePress(e) {
    if (e.keyCode === 8) {
      setIsDelete(prev => !prev)
    }
  }
  function onChangeSearch(e) {

    let value = e.target.value
    setPillows(prev => {
      let res = prev.flat(1).filter(el => el[1].text.includes(value) ? el : '');
      return onChunks(res, countByRow)
    });
  }

  return (
    <>
      <div className="products-header">
        <h1>Products  </h1>

        <form className="product-forms" onChange={onChangeSearch} onKeyUp={onDeletePress}>
          <label htmlFor="search-bar">Search:  </label>
          <input type="text" id="search-bar" placeholder="for pillow" name="search" minLength="1" max="40" />
        </form>

        <form onChange={onChangeCount} className="product-forms">
          <label htmlFor="count">cards in a row:  </label>
          <input type="number" id="count" value={countByRow} name="count" min="1" max="10" />
        </form>
      </div>
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>

            {
              pillows.map(set => {

                let el = set.map(([id, all]) => {
                  return (
                    <CardItem
                      key={id}
                      src={all.src}
                      text={all.text}
                      label={"BGN " + all.label}
                      description={all.description}
                      path={fP(`products/${id}`)}
                    />)
                })

                return (
                  <ul className="cards__items">
                    {el}
                    
                  </ul>
                )
              })
            }

          </div>
        </div>
      </div>
      <Footer></Footer>
    </>

  )
}
