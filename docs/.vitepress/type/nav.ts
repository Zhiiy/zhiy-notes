export interface NavData {
  title: string
  items: NavItems[]
}

export interface NavItems {
  /** 站点图标 */
  icon?: string
  /** 站点名称 */
  title: string
  /** 站点描述 */
  desc?: string
  /** 站点链接 */
  link: string
}
