export type BulletsSchema = Schema[]

export type Schema = {
  image: string
  titleBullet: string
  link: LinkProps
}

export interface LinkProps {
  url: string
  attributeNofollow: boolean
  attributeTitle?: string
  newTab?: boolean
  openNewTab?: boolean
}
