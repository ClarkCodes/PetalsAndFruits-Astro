import { Utils } from './Utils.js';

export class Notification {
    utils = new Utils();

    constructor() {
        const notiDialog = document.querySelector( '#notificationDialog' ); // Sets the funcionality to close the dialog when clicking the close button or pressing the Escape key
        if ( notiDialog ) {
            notiDialog?.querySelector( '.CloseButton' )?.addEventListener( 'click', () => {
                this.utils.closeDialogWithTransition( notiDialog );
            });

            notiDialog.addEventListener( 'keyup', ( e ) => {
                if ( e.key === 'Escape' ) {
                    this.utils.closeDialogWithTransition( notiDialog );
                }
            });
        }
    }

    /**
     * Opens the notification dialog with a title, message and type
     *  @param {string} title - The title of the notification.
     *  @param {string} message - The message of the notification.
     *   @param {string} notificationType - The type of notification (e.g., 'success', 'error', 'warning').
     *   * @example
     *   const notification = new Notification();
     *    notification.open( 'Realizado', 'Su acción se ha realizado con éxito!', 'success' );
     *    notification.open( 'Error', 'Hubo un problema en el procesamiento de su solicitud', 'error' );
     *    notification.open( 'Cuidado', 'La acción realizada debe ser exacta o los cambios se perderán', 'warning' );
     * */
    open( title = 'Titulo', message = 'Mensaje', notificationType = 'success' ) {
        const notificationDialog = document.querySelector( '#notificationDialog' );
        const titleElement = notificationDialog.querySelector( '.TitleClass' );
        const messageElement = notificationDialog.querySelector( '.MessageClass p' );

        titleElement.textContent = title;
        messageElement.textContent = message;
        notificationDialog.setAttribute( 'noti-type', notificationType );

        notificationDialog.show();

        setTimeout( () => {
            this.utils.closeDialogWithTransition( notificationDialog ); // Close after 3 seconds
        }, 3000 );
    }
}