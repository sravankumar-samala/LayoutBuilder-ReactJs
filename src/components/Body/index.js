// Write your code here
import ConfigurationContext from '../../context'
import './index.css'

export default function Body() {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-layout-container">
            {showLeftNavbar && <LeftNavbar />}
            {showContent && <Content />}
            {showRightNavbar && <RightNavbar />}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

function LeftNavbar() {
  return (
    <div className="left-navbar">
      <h2>Left Navbar Menu</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
      </ul>
    </div>
  )
}

function Content() {
  return (
    <div className="content">
      <h2>Content</h2>
      <p>
        Lorem ipsum is typically a corrupted version of De minibus bonum et
        malory, a 1st-century BC text by the Roman statesman and philosopher
        Cicero, with words altered, added, and removed to make it nonsensical
        and improper Latin. The first two words themselves are a truncation of
        dolores ipsum.
      </p>
    </div>
  )
}

function RightNavbar() {
  return (
    <div className="right-navbar">
      <h2>Right Navbar</h2>
      <div>Ad 1</div>
      <div>Ad 2</div>
    </div>
  )
}
