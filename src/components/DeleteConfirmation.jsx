import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  console.log("Delete confirmation loading ....");

  // make sure that this timer is not started when the app starts. so this timer starts only when the place is selected and
  // modal is opened for that we make it a part of the dom based on whether the modal is open or not.

  // also we need to be sure that this timer is closed when we click the Yes or NO in the modal. So we use useEffect
  // now in useEffect we can also have a clean up method which is return from useEffect. This cleanup is executed whenever the useEffect
  // runs except for the first time.
  // So this clean up function will run from the second time, and the sequence of running is that it runs before the useEffect logic.
  // so here the creation of timer ...
  // also this will run when the component destroys or gets deleted from the DOM.
  useEffect(() => {
    console.log("timer set");
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      console.log("timer cleared");
      clearTimeout(timer);
    };
  }, []);

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
