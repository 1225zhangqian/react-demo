import Notification from "./notification.component";

['success', 'info', 'warning', 'error'].forEach((type) => {
  Notification[type] = (props) => Notification.open({
    ...props,
    type,
  });
});

export default Notification;
