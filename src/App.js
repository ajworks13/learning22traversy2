import "./styles.css";
import Header from "./components/Header";
import FeedbackItem from "./components/feedbackItem";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;

/*
  When using li, always add the key={} prop
*/
