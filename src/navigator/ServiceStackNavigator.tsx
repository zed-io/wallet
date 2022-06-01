import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { headerWithBackButton, noHeader } from 'src/navigator/Headers'
import { Screens } from 'src/navigator/Screens'
import WalletServices from 'src/services/WalletServices'
import SwapScreen from 'src/swap/SwapScreen'

const TAG = 'ServiceStackNavigatorService'

const Service = createStackNavigator()

export default function ServiceStackNavigator() {
  const { t } = useTranslation()
  return (
    <Service.Navigator initialRouteName={Screens.WalletServices}>
      <Service.Screen name={Screens.WalletServices} component={WalletServices} options={noHeader} />
      <Service.Screen
        name={Screens.Swap}
        component={SwapScreen}
        options={{ ...headerWithBackButton, headerTitle: t('Swap') }}
      />
    </Service.Navigator>
  )
}