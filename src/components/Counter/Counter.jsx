import "./Counter.css";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Store
import { counterActions } from "../../store/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      {showCounter && <div className="value">{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
