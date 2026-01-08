sap.ui.define(
  ['sap/m/MessageToast', 'sap/m/MessageBox'],
  function (MessageToast, MessageBox) {
    'use strict';

    return {
      OnCallAction: function (oBindingContext, aSelectedContexts) {
        const oModel = this.getModel();

        console.log(this.base.getView());
        const oAction = oModel.bindContext('/mutate(...)');
        oAction.setParameter('param', 'param');

        oAction
          .execute()
          .then(() => {
            oCurrentContext.requestSideEffects([
              {
                targetProperties: ['Email'],
              },
            ]);
            MessageToast.show('Action executed successfully!');
          })
          .catch((oError) => {
            MessageBox.error(oError.message);
          });
      },
    };
  }
);
