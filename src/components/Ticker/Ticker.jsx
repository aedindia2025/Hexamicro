// Ticker — continuously scrolling product category strip between Hero and Products.
// Items are duplicated in the data array to create a seamless CSS loop.
import './Ticker.css'

const tickerItems = [
  'Industrial PCs',
  'Self-Service Kiosks',
  'Mini PCs',
  'Active LED Displays',
  'Digital Signage',
  'Custom Assembly',
  'OEM / ODM Services',
]

// Duplicate for seamless infinite scroll
const allItems = [...tickerItems, ...tickerItems]

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {allItems.map((item, index) => (
          <div className="ticker-item" key={index}>
            <span className="ticker-sep">✦</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
