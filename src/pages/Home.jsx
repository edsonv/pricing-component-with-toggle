import { Card } from '../components/Card'
import { data } from '../cardsData'
import { useRef, useState } from 'react'

export const Home = () => {
  const [checked, setChecked] = useState(true)
  const inputValue = useRef(null)

  const hanldeChange = (e) => {
    setChecked(inputValue.current.checked)
  }

  return (
    <>
      <main >
        <header className='header' style={{ marginBottom: "2.667rem" }}>
          <h1 className='header-title u-text-grayish-blue u-text-center'>Our Pricing</h1>
        </header>
        <div className='u-flex' style={{ "--gap": "1.6rem", marginBottom: "5.333rem", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <span className='u-text-light-grayish-blue'>Annually</span>
          <label className="c-checkbox">
            <input type="checkbox" name="toggle" id="" ref={inputValue} onChange={() => hanldeChange()} checked={checked} />
            <div></div>
          </label>
          <span className='u-text-light-grayish-blue'>Monthly</span>
        </div>
        <div className='u-flex' style={{ justifyContent: "center", "--gap": ".9rem" }}>
          {
            data.map(card => (
              <Card className={`u-flow c-card ${card.featured ? '-featured' : ''}`} key={card.id} id={card.id} title={card.title} price={card.price} features={card.features} featured={card.featured} checked={checked} />
            ))
          }
        </div>
      </main>
    </>
  );
}