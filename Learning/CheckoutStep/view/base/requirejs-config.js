var config ={
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'Learning_CheckoutStep/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Learning_CheckoutStep/js/view/shipping-payment-mixin': true
            }
        }
    }
}
