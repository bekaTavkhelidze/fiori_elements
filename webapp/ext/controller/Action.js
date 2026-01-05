sap.ui.define(['sap/m/MessageToast'], function (MessageToast) {
  'use strict';

  return {
    /**
     * Generated event handler.
     *
     * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
     * @param aSelectedContexts the selected contexts of the table rows.
     */

    OnCallAction: function () {
      const oModel = this.getModel();

      const oAction = oModel.bindContext('/mutate(...)');

      oAction.setParameter('param', 'param');
      oAction
        .execute()
        .then(function () {
          sap.m.MessageToast.show('Action executed successfully!');
        })
        .catch(function (oError) {
          sap.m.MessageBox.error(oError.message);
        });
    },
  };
});
