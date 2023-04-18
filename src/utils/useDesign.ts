// import variables from '@/styles/variables.module.scss'

export const useDesign = () => {
  const scssVariables = {
    vNamespace: 'heilanfe',
    elNamespace: 'el'
  }

  /**
   * @param scope 类名
   * @returns 返回空间名-类名
   */
  const getPrefixCls = (scope: string) => {
    return `${scssVariables.vNamespace}-${scope}`
  }

  return {
    variables: scssVariables,
    getPrefixCls
  }
}
