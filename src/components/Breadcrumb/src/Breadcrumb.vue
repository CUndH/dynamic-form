<script lang="tsx">
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import { ArrowRight } from '@element-plus/icons-vue';
import { ref, watch, computed, unref, defineComponent, TransitionGroup } from 'vue';
import { useRouter } from 'vue-router';
import { filterBreadcrumb } from './helper';
import { filter, treeToList } from '@/utils/tree';
import type { RouteLocationNormalizedLoaded, RouteMeta } from 'vue-router';
import { useRouterStore } from '@/store/modules/router'
// import { useAppStore } from '@/store/modules/app';
import { useDesign } from '@/utils/useDesign';

const { getPrefixCls } = useDesign();

const prefixCls = getPrefixCls('breadcrumb');

const routerStore = useRouterStore()

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const { currentRoute } = useRouter();

    const levelList = ref<AppRouteRecordRaw[]>([]);

    const menuRouters = computed(() => {
      const routers = routerStore.routers
      return filterBreadcrumb(routers);
    });

    const getBreadcrumb = () => {
      const currentPath = currentRoute.value.path;
      levelList.value = filter<AppRouteRecordRaw>(unref(menuRouters), (node: AppRouteRecordRaw) => {
        return node.path === currentPath;
      });
    };

    const renderBreadcrumb = () => {
      const breadcrumbList = treeToList<AppRouteRecordRaw[]>(unref(levelList));
      console.log(breadcrumbList)
      return breadcrumbList.map((v) => {
        const disabled = v.redirect === 'noredirect';
        const meta = v.meta as RouteMeta;
        return (
          <ElBreadcrumbItem to={{ path: disabled ? '' : v.path }} key={v.name}>
            { meta.title }
          </ElBreadcrumbItem>
        );
      });
    };

    watch(
      () => currentRoute.value,
      (route: RouteLocationNormalizedLoaded) => {
        if (route.path.startsWith('/redirect/')) {
          return;
        }
        getBreadcrumb();
      },
      {
        immediate: true
      }
    );

    return () => (
      <ElBreadcrumb separator-icon={ArrowRight} class={`${prefixCls} flex items-center h-full`}>
        <TransitionGroup appear enter-active-class="animate__animated animate__fadeInRight">
          {renderBreadcrumb()}
        </TransitionGroup>
      </ElBreadcrumb>
    );
  }
});
</script>

<style lang="scss" scoped>
$prefix-cls: '#{elNamespace}-breadcrumb';

.#{prefix-cls} {
  :v-deep(&__item) {
    display: flex;
    .#{prefix-cls}__inner {
      display: flex;
      align-items: center;
      color: var(--app-contnet-text-color);
      font-weight: 500;

      &:hover {
        color: var(--el-color-primary);
      }
    }
  }
  :v-deep(&__item):not(:last-child) {
    .#{prefix-cls}__inner {
      color: var(--app-contnet-text-color);
      font-weight: bold;
      &:hover {
        color: var(--el-color-primary);
      }
    }
  }

  :v-deep(&__item):last-child {
    .#{prefix-cls}__inner {
      color: var(--left-menu-text-color);
    }
  }
  ::v-deep(&__separator) {
    color: var(--app-contnet-text-color);
  }
}
</style>
