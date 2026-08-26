const MINIMUM_LOADING_TIME_IN_MS = 2800;

export function lazyWithDelay<T>(importPage: () => Promise<T>): Promise<T> {
  return Promise.all([
    importPage(),
    new Promise((resolveDelay) => {
      window.setTimeout(resolveDelay, MINIMUM_LOADING_TIME_IN_MS);
    }),
  ]).then(([pageModule]) => pageModule);
}
