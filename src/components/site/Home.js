import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Welcome to the react fundementals at Eleven Fifty</h1>
        <p>
          This app is intended to be a starter/tutorial app for your upcoming project and a learning
          sandbox for you in months and years to come.
        </p>
        <hr />
        <h1>Important Notes</h1>
        <ul>
          <li>Being component based.</li>
          <li>The styling is intentionally left bland.</li>
          <li>not yet responsive</li>
          <li>refactor the texton this page</li>
          <li>simply scratches the surface</li>
          <li>hang in there.</li>
          <li>
            <Link to="/resources">React Resources</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;