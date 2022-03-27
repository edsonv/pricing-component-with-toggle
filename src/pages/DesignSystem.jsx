const colorBox1 = {
  padding: "3rem 1rem 1rem",
  border: "1px solid white"
}

const colorBox2 = {
  padding: "3rem 1rem 1rem",
  border: "1px solid hsl(232, 13%, 33%)"
}

export const DesignSystem = () => (
  <>
    <header>
      <h1 className="u-uppercase">Design System</h1>
    </header>
    <main>
      <section className="u-flow" id="colors" style={{ margin: "4rem 0" }}>
        <h2>Colors</h2>
        <div className="u-flex">
          <div className="u-flow" style={{ flexGrow: "1" }}>
            <div className="u-bg-gradient-start u-text-white" style={colorBox1}>#A3A8F0</div>
            <p><span className="u-text-dark-grayish-blue">RGB</span> 163, 168, 240</p>
            <p><span className="u-text-dark-grayish-blue">HSL</span> 236, 72%, 79%</p>
          </div>
          <div className="u-flow" style={{ flexGrow: "1" }}>
            <div className="u-bg-gradient-end u-text-white" style={colorBox1}>#696FDD</div>
            <p><span className="u-text-dark-grayish-blue">RGB</span> 105, 111, 221</p>
            <p><span className="u-text-dark-grayish-blue">HSL</span> 237, 63%, 64%</p>
          </div>
          <div className="u-flow" style={{ flexGrow: "1" }}>
            <div className="u-bg-very-light-grayish-blue u-text-dark-grayish-blue" style={colorBox2}>#F6F6FE</div>
            <p><span className="u-text-dark-grayish-blue">RGB</span> 246, 246, 254</p>
            <p><span className="u-text-dark-grayish-blue">HSL</span> 240, 78%, 98%</p>
          </div>
        </div>
        <div className="u-flex">
          <div className="u-flow" style={{ flexGrow: "1" }}>
            <div className="u-bg-light-grayish-blue u-text-white" style={colorBox1}>#B3B5C6</div>
            <p><span className="u-text-dark-grayish-blue">RGB</span> 179, 181, 198</p>
            <p><span className="u-text-dark-grayish-blue">HSL</span> 234, 14%, 74%</p>
          </div>
          <div className="u-flow" style={{ flexGrow: "1" }}>
            <div className="u-bg-grayish-blue u-text-white" style={colorBox1}>#6D708D</div>
            <p><span className="u-text-dark-grayish-blue">RGB</span> 109, 112, 141</p>
            <p><span className="u-text-dark-grayish-blue">HSL</span> 233, 13%, 49%</p>
          </div>
          <div className="u-flow" style={{ flexGrow: "1" }}>
            <div className="u-bg-dark-grayish-blue u-text-white" style={colorBox1}>#494C5F</div>
            <p><span className="u-text-dark-grayish-blue">RGB</span> 73, 76, 95</p>
            <p><span className="u-text-dark-grayish-blue">HSL</span> 232, 13%, 33%</p>
          </div>
        </div>
      </section>

      <section className="u-flow" id="typography" style={{ margin: "4rem 0" }}>
        <h2>Typography</h2>
        <div className="u-flex">
          <div className="u-flow" style={{ flexBasis: "100%", "--flow-space": "4rem" }}>
            <div>
              <p className="u-text-dark-grayish-blue">Heading 1 - Montserrat Bold - 72.5px / -1.77 Character Space</p>
              <p className="u-fs-800 u-letter-spacing-2">299</p>
            </div>
            <div>
              <p className="u-text-dark-grayish-blue">Heading 1 Span - Montserrat Bold - 40px</p>
              <p className="u-fs-700">$</p>
            </div>
            <div>
              <p className="u-text-dark-grayish-blue">Heading 2 - Montserrat Bold - 30px</p>
              <p className="u-fs-600">Our Pricing</p>
            </div>
          </div>
          <div className="u-flow" style={{ flexBasis: "100%", "--flow-space": "4rem" }}>
            <div>
              <p className="u-text-dark-grayish-blue">Subheading 1 - Montserrat Bold - 18.75</p>
              <p className="u-fs-500">Professional</p>
            </div>
            <div>
              <p className="u-text-dark-grayish-blue">List Item - Montserrat Bold - 15px</p>
              <p className="u-fs-400">500 GB Storage</p>
            </div>
            <div>
              <p className="u-text-dark-grayish-blue">Button Text - Montserrat Bold - 12.5px - 2 Character Space</p>
              <p className="u-fs-300 u-uppercase">Learn more</p>
            </div>
          </div>
        </div>
      </section>

      <section className="u-flow" id="interactive-elements" style={{ margin: "4rem 0" }}>
        <h2>Interactive Elements</h2>
        <div className="u-flex">
          <div className="u-flow" style={{ flexBasis: "max-content", "--flow-space": "1rem" }}>
            <button className="c-button u-uppercase u-letter-spacing-1">Learn More</button>
            <p className="u-text-center">Featured Card CTA Button</p>
          </div>
          <div className="u-flow" style={{ flexBasis: "max-content", "--flow-space": "1rem" }}>
            <button className="c-button -featured u-uppercase u-letter-spacing-1">Learn More</button>
            <p className="u-text-center">Card CTA Button</p>
          </div>
          <div className="u-flow" style={{ flexBasis: "max-content", "--flow-space": "1rem" }}>
            <label className="c-checkbox">
              <input type="checkbox" name="toggle" id="" />
              <div></div>
            </label>
            <p className="u-text-center">Toggle Slider</p>
          </div>
        </div>
      </section>
    </main>
  </>
);