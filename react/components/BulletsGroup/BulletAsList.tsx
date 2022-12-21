import React from 'react'

import { BulletsSchema, Schema } from './BulletTypes'
import Bullet from './Bullet'

const getBulletAsList = (bullets: BulletsSchema) => {
  return bullets.map(({ image, titleBullet, link }: Schema, index) => (
    <Bullet key={index} scr={image} title={titleBullet} link={link} />
  ))
}

export default getBulletAsList
