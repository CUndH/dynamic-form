import { pathResolve } from '@/utils/routerHelper';
import type { RouteMeta } from 'vue-router';

export const filterBreadcrumb = (
  routes: AppRouteRecordRaw[],
  parentPath = ''
): AppRouteRecordRaw[] => {
  const res: AppRouteRecordRaw[] = [];

  for (const route of routes) {
    const meta = route?.meta as RouteMeta;
    if (meta.hidden) {
      continue;
    }

    const data: AppRouteRecordRaw =
      !meta.alwaysShow && route.children?.length === 1
        ? { ...route.children[0], path: pathResolve(route.path as string, route.children[0].path as string) }
        : { ...route };

    data.path = pathResolve(parentPath, data.path as string);

    if (data.children) {
      data.children = filterBreadcrumb(data.children, data.path);
    }
    if (data) {
      res.push(data);
    }
  }
  return res;
};
