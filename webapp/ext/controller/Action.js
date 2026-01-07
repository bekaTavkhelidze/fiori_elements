sap.ui.define(['sap/m/MessageToast'], function (MessageToast) {
  'use strict';

  return {
    /**
     * Generated event handler.
     *
     * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
     * @param aSelectedContexts the selected contexts of the table rows.
     */

    OnCallAction: function (oEvent) {
      const oModel = this.getModel();
      console.log('first');
      const oContext = this.base.getView().getBindingContext();
      console.log(oContext);
      const oAction = oModel.bindContext('/mutate(...)');
      oAction.setParameter('param', 'param');
      oAction
        .execute()
        .then(() => {
          oContext
            .requestSideEffects([
              {
                targetProperties: ['Name'],
              },
            ])
            .then(() => {
              console.log('noce');
            });

          sap.m.MessageToast.show('Action executed successfully!');
        })
        .catch(function (oError) {
          sap.m.MessageBox.error(oError.message);
        });
    },
  };
});
