import React from 'react'
import { Button, Login, useWalletModal } from '@pancakeswap/uikit'

import WalletButton from '../Button/WalletButton'

interface Props {
  account?: string
  login: Login
  logout: () => void
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account)
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  return (
    <div>
      {account ? (

        <WalletButton onClick={() => {
          onPresentAccountModal()
        }}>{accountEllipsis}</WalletButton>

/*        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal()
          }}
        >
          {accountEllipsis}
        </Button> */

      ) : (

        <WalletButton onClick={() => {
          onPresentConnectModal()
        }}>Connect</WalletButton>

       /* <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal()
          }}
        >
        Connect
        </Button> */
      )}
    </div>
  )
}

export default React.memo(
  UserBlock,
  (prevProps, nextProps) =>
    prevProps.account === nextProps.account &&
    prevProps.login === nextProps.login &&
    prevProps.logout === nextProps.logout,
)
