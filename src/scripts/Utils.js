export class Utils{
    /**
     * Closes a dialog with a transition effect.
     * @param {HTMLDialogElement} dialog - The dialog element to close.
     */
    closeDialogWithTransition( dialog ) {
        dialog.classList.add( 'closing' );
        
        setTimeout( () => {
            dialog.close();
            dialog.classList.remove( 'closing' );    
        }, 250 ); // Debe coincidir con la duración del transition en CSS
    }
}