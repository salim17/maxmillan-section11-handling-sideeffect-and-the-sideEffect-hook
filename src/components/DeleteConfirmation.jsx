export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // make sure that this timer is not started when the app starts. so this timer starts only when the place is selected and
  // modal is opened for that we make it a part of the dom based on whether the modal is open or not.

  // also we need to be sure that this timer is closed when we click the Yes or NO in the modal.
  setTimeout(() => {
    onConfirm();
  }, 3000);

  console.log("Delete confirmation loading ....");

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
