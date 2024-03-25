import React from 'react'

export default function PlayList({ likedSongsImage, name, type, creator }) {
  return (
    <div className='playlist'>
      <img className='playlist__img' src={likedSongsImage} alt={'Foto'} />
      <div>
        <h1 className='playlist__name'>{name}</h1>
        <h3 className='playlist__info'>{type} • {creator}</h3>
      </div>
    </div>
  )
}
