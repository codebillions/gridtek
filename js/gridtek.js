AOS.init();

// form validation

function validate() {
    'use strict'

    // Fetch all the forms assoc Bootstrap validation
    var forms = document.querySelectorAll( '.needs-validation' )

    // Loop over them and prevent submission
    Array.prototype.slice.call( forms )
        .forEach( function ( form ) {
            form.addEventListener( 'submit', function ( event ) {
                if ( !form.checkValidity() ) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add( 'was-validated' )
            }, false )
        } )
};

validate()
