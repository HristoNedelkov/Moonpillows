import React, { useEffect, useState } from 'react';

import CardItem from '../CardItem';
import '../../App.css';

import Footer from '../Footer';
import { getAll, onChunks } from "../services/pillowHandlers";
import fullPath from '../services/pathSolver';

export default function Products({ match }) {
  const [pillows, setPillows] = useState([]);
  const [countByRow, setCountByRow] = useState(4)

  useEffect(() => {
    getAll().then(res => {
      setPillows(makeOnChunks(res,countByRow));
    })
  }, [countByRow])

  function makeOnChunks (arr,n) {
    return onChunks(arr, n)
  }

  function onChangeCount(e) {
    setCountByRow(e.target.value)
  }

  return (
    <>
      <h1>Products  </h1>
      <form onChange={onChangeCount}>
        <label htmlFor="count">Брой на ред: </label>
        <input type="number" id="count" value={countByRow} name="count" min="1" max="10" />
      </form>

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
                      path={fullPath(`pillows/${id}`)}
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
