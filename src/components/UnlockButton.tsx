import React from 'react'
import { Button, useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import GradientButton from './Button/GradientButton'

const UnlockButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <GradientButton onClick={onPresentConnectModal} {...props}>
      {t('Unlock Wallet')}
    </GradientButton>
  )
}

export default UnlockButton
