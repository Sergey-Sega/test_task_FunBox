import React from 'react';
import './style.scss';
import { CatCard } from './CatCard';
import { cats } from '../../utils/constant';

export const CatListPage = () => {
    return (
        <>
        <h1 className='cat-list-head'>Ты сегодня покормил кота?</h1>
        <div className='cat-list-page'>
            {cats.map((el) => (
              <React.Fragment key={el.id}>
                <CatCard el={el} />
              </React.Fragment>
              )) }
        </div>
        </>
    );
};
