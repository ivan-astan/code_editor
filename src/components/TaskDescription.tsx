import React from "react";

const TaskDescription: React.FC = () => {
  return (
    <div className="task-description mt-4 p-3 border rounded bg-light">
      <h2>Task Description</h2>
      <p>
        You are required to implement a function that takes two integers as inputs and returns their sum.
        Please ensure that your function handles various test cases, including negative numbers and zero.
      </p>
      <h4>Example Task:</h4>
      <p>
        Write a function that accepts two numbers and returns their sum.
      </p>
      <h4>Input Format:</h4>
      <p>
        Two integers separated by a space.
      </p>
      <h4>Output Format:</h4>
      <p>
        A single integer - the sum of the two numbers.
      </p>
      <h4>Test Cases:</h4>
      <ul>
        <li>Input: 3 5 | Output: 8</li>
        <li>Input: -2 4 | Output: 2</li>
        <li>Input: 0 0 | Output: 0</li>
      </ul>
    </div>
  );
};

export default TaskDescription;