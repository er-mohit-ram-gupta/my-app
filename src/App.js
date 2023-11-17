import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
  {/* Theme Made By www.w3schools.com - No Copyright */}
  <title>Bootstrap Theme Simply Me</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  body {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n  }\n  p {font-size: 16px;}\n  .margin {margin-bottom: 45px;}\n  .bg-1 { \n    background-color: #1abc9c; /* Green */\n    color: #ffffff;\n  }\n  .bg-2 { \n    background-color: #474e5d; /* Dark Blue */\n    color: #ffffff;\n  }\n  .bg-3 { \n    background-color: #ffffff; /* White */\n    color: #555555;\n  }\n  .bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n  }\n  .container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n  .navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n  }\n  .navbar-nav  li a:hover {\n    color: #1abc9c !important;\n  }\n  "
    }}
  />
  {/* Navbar */}
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">
          Me
        </a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">WHO</a>
          </li>
          <li>
            <a href="#">WHAT</a>
          </li>
          <li>
            <a href="#">WHERE</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* First Container */}
  <div className="container-fluid bg-1 text-center">
    <h3 className="margin">Who Am I?</h3>
    <img
      src="bird.jpg"
      className="img-responsive img-circle margin"
      style={{ display: "inline" }}
      alt="Bird"
      width={350}
      height={350}
    />
    <h3>I'm an adventurer</h3>
  </div>
  {/* Second Container */}
  <div className="container-fluid bg-2 text-center">
    <h3 className="margin">What Am I?</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.{" "}
    </p>
    <a href="#" className="btn btn-default btn-lg">
      <span className="glyphicon glyphicon-search" /> Search
    </a>
  </div>
  {/* Third Container (Grid) */}
  <div className="container-fluid bg-3 text-center">
    <h3 className="margin">Where To Find Me?</h3>
    <br />
    <div className="row">
      <div className="col-sm-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img
          src="birds1.jpg"
          className="img-responsive margin"
          style={{ width: "100%" }}
          alt="Image"
        />
      </div>
      <div className="col-sm-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img
          src="birds2.jpg"
          className="img-responsive margin"
          style={{ width: "100%" }}
          alt="Image"
        />
      </div>
      <div className="col-sm-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img
          src="birds3.jpg"
          className="img-responsive margin"
          style={{ width: "100%" }}
          alt="Image"
        />
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer className="container-fluid bg-4 text-center">
    <p>
      Bootstrap Theme Made By{" "}
      <a href="https://www.w3schools.com">www.w3schools.com</a>
    </p>
  </footer>
</>

  );
}

export default App;
