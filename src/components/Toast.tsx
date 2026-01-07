interface ToastProps {
  errorMessage: string | null;
  setError: Function;
}
const Toast = ({ errorMessage, setError }: ToastProps) => {
  // On click, remove toast
  const handleClickToast = () => {
    console.log("Clicked toast!");
    setError(null);
  };
  return (
    <div
      className={`toast ${errorMessage ? "is-visible clickable" : ""}`}
      onClick={handleClickToast}
    >
      {errorMessage}
    </div>
  );
};

export default Toast;
