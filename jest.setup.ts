// Mock `navigator.getGamepads`
Object.defineProperty(global.navigator, "getGamepads", {
  value: jest.fn(() => []), // Returns an empty array as a mock
  configurable: true,
});

// Mock other browser APIs as needed
global.addEventListener = jest.fn();
global.removeEventListener = jest.fn();
