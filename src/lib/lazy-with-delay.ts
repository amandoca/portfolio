const MINIMUM_LOADING_TIME_IN_MS = 2800;
let hasShownInitialLoading = false;

export function lazyWithDelay<T>(importPage: () => Promise<T>): Promise<T> {
  if (hasShownInitialLoading) {
    return importPage();
  }

  hasShownInitialLoading = true;

  return Promise.all([
    importPage(),
    new Promise((resolveDelay) => {
      window.setTimeout(resolveDelay, MINIMUM_LOADING_TIME_IN_MS);
    }),
  ]).then(([pageModule]) => pageModule);
}
