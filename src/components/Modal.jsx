import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children }) {
  const dialog = useRef();

  // this won't work because remember the connection of useRef element is only made after the rendering is done for the first time..
  // hence we will use useEffect here..
  // if(open) {
  //   dialog.current.showModal();
  // } else {
  //   dialog.current.close();
  // }

  console.log("model component ... ");

  // this will run whenver the value of open prop changes
  useEffect(() => {
    console.log("useEffect of modal ...");
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    // no backdrop will be seen if you use this approach of setting open prop which is open = {open} on the dialog element.
    // backdrop means, when modal is open user cant interact with anything else.
    // backdrop will only appear if we use dialog.current.showModal() method ..
    // since the dialog element also closes if someone presses the escape key .. therefore it does not change the value of open prop
    // in this case.. to fix this issue.. we need to set the open to false.. by setting the onClose prop.
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
