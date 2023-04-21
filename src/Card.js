import React from 'react'

function Card() {
    const cards = ["Evan", "Beck", "Bryce", "Theo", "Winnie", "Jack"];

    const list = cards.map(card => <div className="p-3">{card}</div>)

  return (
    <div className="flex">
        {list}
    </div>
  )
}

export default Card