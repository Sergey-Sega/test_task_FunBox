/* eslint-disable max-len */
import React from 'react';

export const CatCard = ({el}) => {
const { name, header, taste, weight, kg, id, portion, present, satisfied } = el;
  return (
    <div className="cat-group">
   <div className="cat-list-page__cat-card" id={id}
    onClick={(e)=> {
      const a = e.currentTarget.children[1];
      if (e.currentTarget.classList.contains('hidden') && a.classList.contains('kg')) {
        e.currentTarget.classList.remove('hidden');
        a.classList.remove('kg');
      } else {
        a.classList.add('kg');
        e.currentTarget.classList.add('hidden');
        e.currentTarget.classList.add('hidden');
      }
    }}
   >
      <div className="cat-list-page__cat-card__block">
      <p className='cat-list-page__cat-card__block__header'>{header}</p>
       <p className='cat-list-page__cat-card__block__name'>{name}</p>
       <p className='cat-list-page__cat-card__block__taste'>{taste}</p>
       <p className='cat-list-page__cat-card__block__portion'>{portion}</p>
       <p className='cat-list-page__cat-card__block__present'>{present}</p>
       <p className='cat-list-page__cat-card__block__satisfied'>{satisfied}</p>
        </div>
      <div className="cat-list-page__cat-card__kg">
        <p>{weight}<br/>
        {kg}</p>
      </div>
    </div>
    <p className='cat-list-page__cat-card__buy'>Чего сидишь? Порадуй котэ, <a className='cat-list-page__cat-card__buy__a' href=''>купи</a>.</p>
    </div>
  );
};
