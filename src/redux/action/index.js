export const type={
  MENU_BREADCRUMB:'MENU_BREADCRUMB'
}
export function switchMenu(title) {
  return {
    type:type.MENU_BREADCRUMB,
    title:title
  }
}