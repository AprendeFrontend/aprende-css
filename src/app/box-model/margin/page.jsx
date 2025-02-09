'use client';
import { useState } from 'react';
import styles from './margin.module.css';

const MarginPage = () => {
  const [marginValues, setMarginValues] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  });

  return (
    <>
      <h1>Margin</h1>
      <p>
        El margin en CSS es la propiedad que define el espacio exterior alrededor de un elemento, separándolo de otros elementos en la
        página.
      </p>
      <div className={styles['container-example']}>
        <div className={styles['box']} style={{ '--top': `${marginValues.top * -1}px` }}></div>
        <div className={styles['box']} style={{ '--left': `${marginValues.left * -1}px` }}></div>
        <div className={`${styles['box']} ${styles['box-main']} `}></div>
        <div className={styles['box']} style={{ '--right': `${marginValues.right * -1}px` }}></div>
        <div className={styles['box']} style={{ '--bottom': `${marginValues.bottom * -1}px` }}></div>
      </div>
      <div>
        <label htmlFor='range-top'>Margin top</label>
        <input
          type='range'
          id='range-top'
          min={0}
          max={50}
          value={marginValues.top}
          name='top'
          onChange={event => changeMarginValues(event, marginValues, setMarginValues)}
        />
        <span>{marginValues.top ? marginValues.top + 'px' : 0}</span>
      </div>
      <div>
        <label htmlFor='range-right'>Margin right</label>
        <input
          type='range'
          id='range-right'
          min={0}
          max={50}
          value={marginValues.right}
          name='right'
          onChange={event => changeMarginValues(event, marginValues, setMarginValues)}
        />
        <span>{marginValues.right ? marginValues.right + 'px' : 0}</span>
      </div>
      <div>
        <label htmlFor='range-bottom'>Margin bottom</label>
        <input
          type='range'
          id='range-bottom'
          min={0}
          max={50}
          value={marginValues.bottom}
          name='bottom'
          onChange={event => changeMarginValues(event, marginValues, setMarginValues)}
        />
        <span>{marginValues.bottom ? marginValues.bottom + 'px' : 0}</span>
      </div>
      <div>
        <label htmlFor='range-left'>Margin left</label>
        <input
          type='range'
          id='range-left'
          min={0}
          max={50}
          value={marginValues.left}
          name='left'
          onChange={event => changeMarginValues(event, marginValues, setMarginValues)}
        />
        <span>{marginValues.left ? marginValues.left + 'px' : 0}</span>
      </div>
      <div className={styles['result']}>
        <p>margin-top: {marginValues.top ? marginValues.top + 'px' : 0};</p>
        <p>margin-right: {marginValues.right ? marginValues.right + 'px' : 0};</p>
        <p>margin-bottom: {marginValues.bottom ? marginValues.bottom + 'px' : 0};</p>
        <p>margin-left: {marginValues.left ? marginValues.left + 'px' : 0};</p>
        <p>margin:{calculateFinalMarginValues(marginValues)}</p>
      </div>
    </>
  );
};

const changeMarginValues = (event, marginValues, setMarginValues) => {
  setMarginValues({ ...marginValues, [event.target.name]: Number(event.target.value) });
};

const calculateFinalMarginValues = marginValues => {};

// top right bottom left
// top right-left bottom
// top-bottom right-left
// top-bottom-right-left

export default MarginPage;
