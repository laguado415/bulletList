import React, { PropsWithChildren } from 'react'
import { useDevice } from 'vtex.device-detector'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { useCssHandles } from 'vtex.css-handles'

import { BulletsSchema } from './BulletTypes'
import getBulletAsList from './BulletAsList'
import './styles.css'

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children,
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice()
  const { list } = useListContext() || []
  const bulletsGroup = getBulletAsList(bullets)
  const imageList = list.concat(bulletsGroup)

  const CSSHANDLES = ['bullet__group']

  const handle = useCssHandles(CSSHANDLES)

  return (
    <ListContextProvider list={imageList}>
      {isMobile ? (
        <div className={handle.bullet__group}>{bulletsGroup}</div>
      ) : (
        children
      )}
    </ListContextProvider>
  )
}

export default BulletGroup
