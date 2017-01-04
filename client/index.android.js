import React, {
   Component,
   PropTypes
} from 'react'

import {
   AppRegistry,
   StyleSheet,
   View
} from 'react-native'

import NavigatorComp from './app/Components/Navigator'

AppRegistry.registerComponent('Whatever', () => NavigatorComp);