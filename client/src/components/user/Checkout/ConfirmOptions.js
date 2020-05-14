// ConfirmOptions.js
// ===========================

// function
const ConfirmOptions = (yesFunction) => {
    return {
        title: 'Please confirm payment',
        message: 'Are you sure you would like to charge payment?',
        buttons: [
            {
                label: 'Yes',
                onClick: () => {
                    alert("Processing Payment")
                    yesFunction()
                }
            },
            {
                label: 'No',
                onClick: () => alert('Payment Cancelled')
            }
        ]
    }
}

// exports
export default ConfirmOptions;








