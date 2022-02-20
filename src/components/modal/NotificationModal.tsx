import React from "react";
import NotificationManager from "../../data/NotificationManager";

type NotificationModalViewProps = {

}
const NotificationModalView : React.FC<NotificationModalViewProps> = ({

}) => {

    const notiManager = NotificationManager.shared;

    // ** Modal Control
    const closeModal = (e : React.MouseEvent) => {
        e.preventDefault();
        const modal = document.getElementById('notification');
        if(modal) {
            modal.classList.remove('show');
        }
    }

    return (
        <div className="Modal-page Modal-page-notification" id='notification'>
            <div className="Modal-page-intro">
                <div className="modal-title">알림</div>
                <button className="cancel" onClick={closeModal}>
                    <i className="bx bx-x"></i>
                </button>
            </div>
        </div>
    );
}

const NotificationModal = () => {
    return <NotificationModalView />
}

export default NotificationModal;