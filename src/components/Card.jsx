export const Card = (props) => {
  return (
    <div
      className={props.className}
      style={{ "--flow-space": "2.667rem" }}
    >
      <div className="u-fs-500 u-text-center">{props.title}</div>
      <div
        className={`u-flex u-fs-800 u-letter-spacing-2 u-text-center ${props.featured ? 'u-text-white' : 'u-text-dark-grayish-blue'}`}
        style={{ flexDirection: "row", alignItems: "center", "--gap": "3px", justifyContent: "center" }}
      >
        <span className="u-fs-700">$</span>
        {props.checked ? props.price.monthly : props.price.annually}
      </div>

      <ul className="c-card-list">
        {props.features.map(feature => (
          <li className="u-fs-400 u-text-center item" key={((Math.random()) * 5).toFixed(2)}>
            {feature}
          </li>
        ))}
      </ul>

      <button className={`c-button ${props.featured === true ? '-featured' : ''}`} >
        Learn More
      </button>

    </div >
  )
}