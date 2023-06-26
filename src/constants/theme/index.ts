const modulesFiles = import.meta.glob('./packages/*.ts', { eager: true });

const themeModules: ThemeConfigs[] = [];
Object.keys(modulesFiles).forEach(async (key) => {
  const value = (modulesFiles[key] as any).default
  themeModules.push(value)
});

export default themeModules;
