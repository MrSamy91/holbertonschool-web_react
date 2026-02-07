import './Notifications.css';
import closeIcon from './assets/close-button.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="notification-items" style={{ position: 'relative' }}>
      <button
        aria-label="Close"
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0
        }}
      >
        <img src={closeIcon} alt="close" style={{ width: 12, height: 12 }} />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
