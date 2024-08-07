import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  console.log("Delete confirmation loading ....");

  // make sure that this timer is not started when the app starts. so this timer starts only when the place is selected and
  // modal is opened for that we make it a part of the dom based on the condition whether the modal is open or not.

  // also we need to be sure that this timer is closed when we click the Yes or NO in the modal. So we use useEffect
  // now in useEffect we can also have a clean up method which is return from useEffect. This cleanup is executed whenever the useEffect
  // runs except for the first time.
  // So this clean up function will run from the second time, and the sequence of running is that it runs before the useEffect logic.
  // so here the creation of timer ...
  // also this will run when the component destroys or gets deleted from the DOM.

  // no here since useEffect depends on onConfirm prop which is a method by the way.
  // when adding methods as a dependency, you should know that the functions in javascript are objects.
  // so when the onConfirm method executes it triggers state update cause App component to reload.
  // and it will reload new function will be created to functions in javascript are like objects. and this new function or object
  // will be different to the previous function even though they have the same code. this will cause useEffect to re-execute
  // and cause infinite loop. even though in our case we remove it from the DOM hence we do not see it.

  // as a side note , also for objects as a dependency even if the value of one key changes useEffect will re-run. even if the value
  // of the inner object changes then also...

  useEffect(() => {
    console.log("timer set");
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      console.log("timer cleared");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
