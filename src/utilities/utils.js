export const getProgressPercentage = (status) => {
    switch (status) {
        case 'PENDING':
            return 0;
        case 'PROCESSING':
            return 33;
        case 'ANALYZED':
            return 67;
        case 'COMPLETED':
            return 100;
        default:
            return 0;
    }
};