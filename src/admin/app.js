const DEBUG_PREFIX = "[admin-debug]";

const installAdminDebugger = () => {
  if (typeof window === "undefined") return;
  if (window.__STRAPI_ADMIN_DEBUG__) return;
  window.__STRAPI_ADMIN_DEBUG__ = true;

  window.addEventListener("error", (event) => {
    const { message, filename, lineno, colno, error } = event;
    console.error(`${DEBUG_PREFIX} window.error`, {
      message,
      source: `${filename}:${lineno}:${colno}`,
      stack: error && error.stack,
    });
  });

  window.addEventListener("unhandledrejection", (event) => {
    const reason = event.reason;
    console.error(`${DEBUG_PREFIX} unhandledrejection`, {
      message: reason && reason.message,
      stack: reason && reason.stack,
      reason,
    });
  });

  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const url = typeof args[0] === "string" ? args[0] : args[0]?.url;
    try {
      const response = await originalFetch(...args);
      if (!response.ok && url && url.includes("/admin/")) {
        console.warn(`${DEBUG_PREFIX} fetch ${response.status}`, url);
      }
      return response;
    } catch (err) {
      console.error(`${DEBUG_PREFIX} fetch threw`, url, err);
      throw err;
    }
  };

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.initiatorType === "script" && entry.name.endsWith(".js")) {
        if (entry.responseStatus && entry.responseStatus >= 400) {
          console.error(
            `${DEBUG_PREFIX} script load failed ${entry.responseStatus}`,
            entry.name
          );
        }
      }
    }
  });
  try {
    observer.observe({ type: "resource", buffered: true });
  } catch (_) {}
};

const config = {
  locales: [],
};

const bootstrap = (app) => {
  installAdminDebugger();

  console.info(`${DEBUG_PREFIX} bootstrap start`);

  try {
    const plugins = app && app.plugins ? Object.keys(app.plugins) : [];
    console.info(`${DEBUG_PREFIX} registered plugins`, plugins);
  } catch (err) {
    console.warn(`${DEBUG_PREFIX} could not enumerate plugins`, err);
  }

  try {
    const settingsLinks = (app && app.router && app.router.routes) || [];
    console.info(
      `${DEBUG_PREFIX} top-level routes`,
      Array.isArray(settingsLinks) ? settingsLinks.map((r) => r.path) : settingsLinks
    );
  } catch (err) {
    console.warn(`${DEBUG_PREFIX} could not enumerate routes`, err);
  }

  console.info(`${DEBUG_PREFIX} bootstrap end`);
};

const register = (app) => {
  console.info(`${DEBUG_PREFIX} register start`);
};

export default {
  config,
  bootstrap,
  register,
};
