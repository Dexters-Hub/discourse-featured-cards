export default {
    setupComponent(args, component) {
      if (settings.plugin_outlet == "below-discovery-categories") {
        this.set("belowDiscoveryCategories", true);
      } else {
        this.set("belowDiscoveryCategories", false);
      }
    },
  };