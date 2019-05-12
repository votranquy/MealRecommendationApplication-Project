import * as commonLang from './screens-common';
import * as signInLang from './screens-sign-in';
import * as signedOutLang from './screens-signed-out';

import CM from './common';

export default {
  CM,
  ...commonLang,
  ...signInLang,
  ...signedOutLang,

  // TODO: Will be removed
  HDTxtBuyPolicy: 'Buy policy',
  HDTxtPolicyQuestion: 'When do you want to start?',
  IntroPolicyTravel: 'No traveling yet?You can start your 1 year policy anytime in the next 90 days',
  LBLPolicyStartDate: 'Policy start date',
};
