// @ts-ignore
import { expect, test } from '@jupyterlab/galata';

/**
 * Don't load JupyterLab webpage before running the tests.
 * This is required to ensure we capture all log messages.
 */
test.use({ autoGoto: false });

// @ts-ignore
test('should emit an activation console message', async ({ page }) => {
  const logs: string[] = [];

  page.on('console', (message: { text: () => string; }) => {
    logs.push(message.text());
  });

  await page.goto();

  expect(
    logs.filter(s => s === 'JupyterLab extension jupyterlab_apod is activated!')
  ).toHaveLength(1);
});
