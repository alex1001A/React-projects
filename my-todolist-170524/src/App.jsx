import "./App.css";
import MyComponent from "./components/MyComponent";


//'https://jsonplaceholder.typicode.com/users'

export default function App() {

  return (
    <div className="wrapper">
      <MyComponent animal='cat' age={4} hasPet />
      <MyComponent animal='dog' age={2} hasPet={false} />
    </div>
  );
}
