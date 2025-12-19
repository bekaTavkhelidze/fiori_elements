sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fiorielements/test/integration/pages/StoresList",
	"fiorielements/test/integration/pages/StoresObjectPage",
	"fiorielements/test/integration/pages/ProductsObjectPage"
], function (JourneyRunner, StoresList, StoresObjectPage, ProductsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fiorielements') + '/test/flp.html#app-preview',
        pages: {
			onTheStoresList: StoresList,
			onTheStoresObjectPage: StoresObjectPage,
			onTheProductsObjectPage: ProductsObjectPage
        },
        async: true
    });

    return runner;
});

