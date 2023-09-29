import "../App.css";

function Login() {
  const myList = ["apple", "banana", "orange"];

  const listItems = myList.map((item) => <li key={item}>{item}</li>);

  return (
    <>
      <h1 className="center">Login</h1>
      <ul className="center">{listItems}</ul>
    </>
  );
}

export default Login;
