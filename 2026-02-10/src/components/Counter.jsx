import useCounter from "../hooks/UseCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter({
    initialValue: 0,
    min: 0,
    max: 10,
  });

  return (
    <div style={container}>
      <h2>Count: {count}</h2>

      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const container = {
  textAlign: "center",
  marginTop: "100px",
};
