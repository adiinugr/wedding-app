import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CustomModal = ({ showSubmitModal, closeModal, handleSubmitTest }) => {
  return (
    <Modal
      isOpen={showSubmitModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <div className="flex flex-col">
        <div>Apa kamu yakin ingin mengakhiri test?</div>
        <div className="mt-6 self-end">
          <button
            className="border focus:outline-none active:bg-gray-200 py-1 px-3 mr-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 focus:outline-none active:bg-green-400 text-gray-50 py-1 px-3"
            onClick={handleSubmitTest}
          >
            Selesai
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
