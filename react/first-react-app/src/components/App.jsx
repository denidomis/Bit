import "./App.css";

function Button() {
  return <button className="btn btn-primary">My Button</button>;
}

function App() {
  const name = "Domantas";
  return (
    <div className="app">
      <h1>Hello {name || "User"}!</h1>
      <Button />
    </div>
  );
}

export default App;
