import { useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children }) {
  const dialog = useRef();

  return createPortal(
    // no backdrop will be seen if you use this approach of setting open prop on the dialog element.
    // backdrop means, when modal is open user cant interact with anything else.
    // backdrop will only appear if we use dialog.current.showModal() method ..
    <dialog className="modal" ref={dialog} open={open}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
