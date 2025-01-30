function Modal({
  variant,
  setModal,
}: {
  variant: string | true;
  setModal: (e: any) => void;
}) {
  return (
    <div id="modal">
      {variant}
      <button onClick={setModal}>New Game?</button>
    </div>
  );
}

export default Modal;
