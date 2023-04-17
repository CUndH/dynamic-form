// import variables from '@/styles/variables.module.scss'

export const useDesign = () => {
  const scssVariables = {
    namespace: 'heilanfe',
    elNamespace: 'el'
  }

  /**
   * @param scope 类名
   * @returns 返回空间名-类名
   */
  const getPrefixCls = (scope: string) => {
    return `${scssVariables.namespace}-${scope}`
  }

  return {
    variables: scssVariables,
    getPrefixCls
  }
}
