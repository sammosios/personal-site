import './ActionButton.css';

const ActionButton = ({ icon: Icon, label, onClick }) => {
  return (
    <div className="action-button">
      <button
        className="action-button__btn"
        onClick={onClick}
        aria-label={label}
        type="button"
      >
        <Icon aria-hidden="true" />
      </button>

      <span className="action-button__tooltip" role="tooltip">
        {label}
      </span>
    </div>
  );
};

export default ActionButton;