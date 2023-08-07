// Write your code here
import './index.css'

const NotFound = () => {
  const description =
    "Sorry, we can't find that page. You'll find lots to explore on the home page"

  return (
    <div className="content-background">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        className="not-found-img"
        alt="not found"
      />
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-description">{description}</p>
    </div>
  )
}

export default NotFound
