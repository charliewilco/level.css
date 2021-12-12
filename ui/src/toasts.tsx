import * as React from "react";
import { Portal } from "./portal";

interface INotifcationProps {
  notifications: Array<{ message: string; dismissable?: boolean; id: string }>;
  onDismiss(id: string): void;
}

export const ToastNotifications: React.VFC<INotifcationProps> = ({
  notifications
}) => {
  return (
    <Portal type="div">
      <div aria-live="polite">
        {notifications.map((notification) => {
          return (
            <div key={notification.id} className="toast">
              <span>{notification.message}</span>
            </div>
          );
        })}

        <style jsx>{`
          [aria-live="polite"] {
            position: fixed;
            bottom: 0;
            right: 0;
          }
          .toast {
            max-width: 100%;
            width: 420px;
            align-items: center;
            justify-content: space-between;
            font-size: 0.875rem;
            display: flex;
            transition: all 0.4s ease;
          }
        `}</style>
      </div>
    </Portal>
  );
};
