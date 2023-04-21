import React from 'react'

function Card() {
    const cards = ["Evan", "Beck", "Bryce", "Theo", "Winnie", "Jack"];

    const list = cards.map(card => <div className="block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3">{card}</div>)

  return (
    <div className="flex">
        {list}
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Submit</button>
    </div>
  )
}

export default Card