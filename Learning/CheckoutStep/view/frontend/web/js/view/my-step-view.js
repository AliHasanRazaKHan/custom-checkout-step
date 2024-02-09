define([
    'ko',
    'uiComponent',
    'underscore',
    'Magento_Checkout/js/model/step-navigator'
], function(ko, Component, _, stepNavigator)
{
    /**
     * mystep - is the name of the component's .html template,
     * Learning_CheckoutStep - is the name of my module dir
     */
    return Component.extend(
        {
            defaults: {
                template: 'Learning_CheckoutStep'
            },
            //logic to display step
            isVisible: ko.observable(true),
            /**
             * @returns {*}
             */
            initialize: function (){
                this._super();

                //register your step
                stepNavigator.registerStep(
                    //step code will be used as step content id in the component template
                    'step_code',
                    //step alias
                    null,
                    //step title value
                    'Step Title',
                    //observable property with logic when display step or hide step
                    this.isVisible,

                    _.bind(this.navigate,this),

                    /**
                     * sort order value
                     * 'sort order value' < 10: step displays before shipping step;
                     * 10 < 'sort order value' < 20 : step displays between shipping and payment step
                     * 'sort order value' > 20 : step displays after payment step
                     */
                    15
                );
                return this;
            },

            /**
             * The, navigate() method is responsible for navigation between checkout step
             * during checkout. You can add custom logic, for example some conditions
             * for switching to your custom step
             * when the user navigates to the custom step via url anchor or back button we_must show step manually here
             */
            navigate: function () {
                this.isVisible(true);
            },

            /**
             * @returns void
             */
            navigateToNextStep: function () {
                stepNavigator.next();
            }
        }
    )
})
