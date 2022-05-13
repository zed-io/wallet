import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import { HomeEvents } from 'src/analytics/Events'
import ValoraAnalytics from 'src/analytics/ValoraAnalytics'
import Button, { BtnSizes, BtnTypes } from 'src/components/Button'
import { navigate } from 'src/navigator/NavigationService'
import { Screens } from 'src/navigator/Screens'
import useSelector from 'src/redux/useSelector'
import { canSendTokensSelector } from 'src/send/selectors'
import variables from 'src/styles/variables'
import { tokensListSelector } from 'src/tokens/selectors'

export default function SendOrRequestButtons() {
  const sendButtonsDisabled = !useSelector(canSendTokensSelector)
  const requestButtonDisabled = useSelector(tokensListSelector).length === 0

  const onPressSend = () => {
    ValoraAnalytics.track(HomeEvents.home_send)
    navigate(Screens.Send)
  }

  const onPressRequest = () => {
    ValoraAnalytics.track(HomeEvents.home_request)
    navigate(Screens.Send, { isOutgoingPaymentRequest: true })
  }

  const { t } = useTranslation()

  return (
    <View style={styles.container} testID="SendOrRequestButtons">
      <Button
        style={styles.button}
        size={BtnSizes.MEDIUM}
        text={t('send')}
        onPress={onPressSend}
        disabled={sendButtonsDisabled}
        testID="SendOrRequestButtons/SendButton"
      />
      <Button
        style={[styles.button, styles.requestButton]}
        size={BtnSizes.MEDIUM}
        type={BtnTypes.PRIMARY2}
        text={t('request')}
        onPress={onPressRequest}
        disabled={requestButtonDisabled}
        testID="SendOrRequestButtons/RequestButton"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: variables.contentPadding,
    paddingVertical: 12,
  },
  button: {
    flex: 1,
    flexDirection: 'column',
  },
  requestButton: {
    marginHorizontal: 12,
  },
})
