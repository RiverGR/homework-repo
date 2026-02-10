import { useState } from "react";

export default function useCounter(options = {}) {
  const { initialValue = 0, min = -Infinity, max = Infinity } = options;

  const [count, setCount] = useState(initialValue);

  // 증가
  const increment = () => {
    setCount((prev) => {
      if (prev < max) return prev + 1;
      return prev;
    });
  };

  // 감소
  const decrement = () => {
    setCount((prev) => {
      if (prev > min) return prev - 1;
      return prev;
    });
  };

  // 초기화
  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
