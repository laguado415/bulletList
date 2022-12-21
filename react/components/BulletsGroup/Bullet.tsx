import React from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import { LinkProps } from './BulletTypes'
import './styles.css'

type Props = {
  scr: string
  title: string
  link: LinkProps
}

const Bullet = ({ scr, title, link }: Props) => {
  const CSS_HANDLES = [
    'bullet__item',
    'bullet__item--title',
    'bullet__item--link',
    'bullet__item--image',
  ]

  const handle = useCssHandles(CSS_HANDLES)

  return (
    <div className={handle.bullet__item}>
      <Link className={handle['bullet__item--link']} to={link.url}>
        <p className={handle['bullet__item--title']}>{title}</p>
        <img className={handle['bullet__item--image']} src={scr} alt="" />
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: 'bullet',
  type: 'object',
  properties: {
    scr: {
      title: 'bullet image',
      type: 'string',
      description: 'image del bullet',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    title: {
      title: 'bullet title',
      type: 'string',
    },
    link: {
      title: 'link',
      type: 'string',
      format: 'data-url',
      description: 'hipervinculo a otra pagina',
    },
  },
}

export default Bullet
