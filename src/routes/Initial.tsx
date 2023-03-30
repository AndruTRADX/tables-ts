import { Link } from "react-router-dom";

function Hello():JSX.Element {
  return (
    <div>
      <Link to="/tables-ts/dashboard">Go to dashboard</Link>
    </div>
  )
}

export default Hello