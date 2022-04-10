// export const waitForTextChange = async (el, text, timeout) => {
//   await browser.waitUntil(
//     async () => {
//       (await el.getText()) === text;
//     },
//     { timeout }
//   );
// };

export const waitForTextChange = async (el, text, timeout) => {
    await browser.waitUntil(
        async () => (await el.getText()) === text,
      { timeout }
    );
  };
