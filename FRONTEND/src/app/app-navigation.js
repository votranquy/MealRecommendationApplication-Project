import React from 'react';
import {
  createStackNavigator, createDrawerNavigator,
  createSwitchNavigator, createAppContainer,
} from 'react-navigation';

import theme from '../theme';
import i18n from '../i18n';
import TopBarActions from './components/TopBarActions';

import WelcomePreloader from './WelcomePreloader';
import * as commonSs from './screens-common';
import * as signedOutSs from './screens-signed-out';
import * as signInSs from './screens-sign-in';

// TODO: Will be removed
import AllScreens from './AllScreens';
import * as oldScreens from './screens';
//-------------------

function createStack(screens, title) {
  return createStackNavigator({
    ...screens,
  }, {
    defaultNavigationOptions: {
      headerTintColor: theme.Color.White,
      headerStyle: {
        backgroundColor: theme.Color.TopBarColor,
      },
      headerRight: <TopBarActions />,
      title: 'MSIG',
    },
    navigationOptions: {
      title,
    },
  });
}

const {
  LearnMore, EstimateTripPremium, WhatIsCovered, FAQ, PrivacyPolicy,
} = commonSs;
const { MyTrip, MyClaim, MyProfile } = signInSs;
const { BuyPolicy, WelcomeSignedOutUser } = signedOutSs;

const LearnMoreStack = createStack({ LearnMore }, i18n.t('CM.LearnMore'));
const EstimateTripPremiumStack = createStack({ EstimateTripPremium }, i18n.t('CM.EstimateTripPremium'));
const WhatIsCoveredStack = createStack({ WhatIsCovered }, i18n.t('CM.WhatIsCovered'));
const FAQStack = createStack({ FAQ }, i18n.t('CM.FAQ'));
const PrivacyPolicyStack = createStack({ PrivacyPolicy }, i18n.t('CM.PrivacyPolicy'));

const MyTripStack = createStack({ MyTrip }, i18n.t('CM.MyTrip'));
const MyClaimStack = createStack({ MyClaim }, i18n.t('CM.MyClaim'));
const MyProfileStack = createStack({ MyProfile }, i18n.t('CM.MyProfile'));

const BuyPolicyStack = createStack({ BuyPolicy }, i18n.t('CM.BuyPolicy'));

const SignInDrawerNavigator = createDrawerNavigator({
  MyTripStack,
  MyClaimStack,
  MyProfileStack,
  LearnMoreStack,
  EstimateTripPremiumStack,
  WhatIsCoveredStack,
  FAQStack,
  PrivacyPolicyStack,
});

// TODO: Will be removed
function createAllStack(allScreens, title) {
  return createStackNavigator({
    AllScreen: {
      screen: props => <AllScreens screenNames={Object.keys(allScreens)} />,
    },
    ...allScreens,
  }, {
    defaultNavigationOptions: {
      headerTintColor: theme.Color.White,
      headerStyle: {
        backgroundColor: theme.Color.TopBarColor,
      },
      headerRight: <TopBarActions />,
      title: 'MSIG',
    },
    navigationOptions: {
      title,
    },
  });
}

const OldScreensStack = createAllStack(oldScreens, 'Old screens');
const CommonScreensStack = createAllStack(commonSs, 'Common screens');
const SignInScreensStack = createAllStack(signInSs, 'Sign In screens');
const SignedOUtScreensStack = createAllStack(signedOutSs, 'Signed Out screens');
//---------------

const SignedOutDrawerNavigator = createDrawerNavigator({
  // TODO: Will be removed
  OldScreensStack,
  CommonScreensStack,
  SignInScreensStack,
  SignedOUtScreensStack,
  //-----------------------
  WelcomeSignedOutUser,
  LearnMoreStack,
  BuyPolicyStack,
  EstimateTripPremiumStack,
  WhatIsCoveredStack,
  FAQStack,
  PrivacyPolicyStack,
});

const MainSwitchNavigator = createSwitchNavigator({
  WelcomePreloader,
  SignInDrawerNavigator,
  SignedOutDrawerNavigator,
});

export default createAppContainer(MainSwitchNavigator);
