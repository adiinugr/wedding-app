const CustomButton = ({ children, type, disabled, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="
        bg-green-500 flex justify-center items-center text-white px-3 py-2 w-full rounded-lg hover:bg-green-600 focus:outline-none active:bg-green-700"
    >
      {children}
    </button>
  );
};

export default CustomButton;
