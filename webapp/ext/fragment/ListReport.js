sap.ui.define(
  ['sap/ui/model/Filter', 'sap/ui/model/FilterOperator'],
  function (Filter, FilterOperator) {
    'use strict';
    return {
      filterItems: function (sValue) {
        if (!sValue) {
          return null;
        }

        return new Filter({
          path: 'FloorArea',
          operator: FilterOperator.GT,
          value1: 2000,
        });
      },
    };
  }
);
