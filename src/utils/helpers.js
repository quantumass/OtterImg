export const getToast = function(vue) {
    return vue.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', vue.$swal.stopTimer)
            toast.addEventListener('mouseleave', vue.$swal.resumeTimer)
        }
    })
}

export const logError = function(vue, error) {
    console.log("error", error)
    if (error.data.code >= 400) {
        let data = error.data.data;
        let inputErrors = Object.keys(data)
        if (inputErrors.length == 0 && error.message) {
            getToast(vue).fire({
                icon: 'error',
                title: error.message
            });
        } else {
            inputErrors.forEach(function (key) {
                getToast(vue).fire({
                    icon: 'error',
                    title: `${key} ${data[key].message}`.toLowerCase()
                });
            });
        }
    }
}