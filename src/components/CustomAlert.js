export default function CustomAlert({ messageStatus, message, setMessage }) {
  const bgColor = () => {
    if (messageStatus === 400) {
      return "text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-400";
    } else {
      return "text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-400";
    }
  };
  return (
    <div className={bgColor()}>
      <span className="text-xl inline-block mr-5 align-middle">
        <i className="fas fa-bell" />
      </span>
      <span className="inline-block align-middle mr-8">{message}</span>
      <button
        onClick={setMessage}
        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
      >
        <span>×</span>
      </button>
    </div>
  );
}
