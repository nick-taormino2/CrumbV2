import React from 'react';
import { FormattedMessage, intlShape } from '../../util/reactIntl';
import { formatMoney } from '../../util/currency';
import { LINE_ITEM_TAX, propTypes } from '../../util/types';

import css from './OrderBreakdown.module.css';

const LineItemTaxMaybe = props => {
  const { lineItems, intl } = props;

  const TaxItem = lineItems.find(
    item => item.code === LINE_ITEM_TAX  && !item.reversal
  );

  console.log(lineItems);

  return TaxItem ? (
    <div className={css.lineItem}>
      <span className={css.itemLabel}>
        <FormattedMessage id="OrderBreakdown.tax" />
      </span>
      <span className={css.itemValue}>{formatMoney(intl, TaxItem.lineTotal)}</span>
    </div>
  ): 
  (<div className={css.lineItem}>
    <span className={css.itemLabel}>
      Tax
    </span>
    <span className={css.itemValue}>{"N/A"}</span>
  </div>)
  ;
};

LineItemTaxMaybe.propTypes = {
  lineItems: propTypes.lineItems.isRequired,
  intl: intlShape.isRequired,
};

export default LineItemTaxMaybe;
