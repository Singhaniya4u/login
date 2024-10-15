const wrapper = document.querySelector('.wrapper');
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');
        const btnPopup = document.querySelector('.btnLogin-popup');
        const iconClose = document.querySelector('.icon-close');

        // Open login popup
        btnPopup.addEventListener('click', () => {
            wrapper.classList.add('active-popup');
        });

        // Switch to register form
        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');
        });

        // Switch to login form
        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
        });

        // Close popup
        iconClose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
        });
        document.querySelectorAll('.input-box input').forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.style.borderColor = '#162938'; // Change border color on focus
            });

            input.addEventListener('blur', () => {
                if (input.value === '') {
                    input.parentElement.style.borderColor = '#162938'; // Reset border color if empty
                }
            });

            input.addEventListener('input', () => {
                const label = input.nextElementSibling; // Assuming the label is the next sibling
                if (input.value) {
                    label.style.top = '-5px'; // Move label up when there is input
                } else {
                    label.style.top = '50%'; // Reset label position if input is empty
                }
            });
        });
    </script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
