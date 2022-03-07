import _ from "lodash";
import {
  Alert,
  Animated,
  Keyboard,
  NativeModules,
  PermissionsAndroid,
  Platform,
  StatusBar,
  Share,
  View as MockView,
} from "react-native";

import jestFetchMock from "jest-fetch-mock";

global.fetch = jestFetchMock;

const moment = jest.requireActual("moment");
const momentTz = jest.requireActual("moment-timezone");
export const STATIC_TEST_DATE = "2019-04-01T00:00:00.000";

jest.doMock("moment", () => {
  momentTz.tz.setDefault("UTC");

  const mockMoment = (dateStr) => {
    if (dateStr) {
      return momentTz(dateStr);
    } else {
      return momentTz(STATIC_TEST_DATE);
    }
  };

  mockMoment.utc = moment.utc;
  mockMoment.duration = momentTz.duration;
  mockMoment.parseZone = momentTz.parseZone;
  mockMoment.__mocks__ = {
    setDefaultTimezone: momentTz.tz.setDefault,
  };

  return mockMoment;
});

Alert.alert = jest.fn();

Animated.start = jest.fn((callback) => {
  if(callback) callback();
});
Animated.timing = jest.fn(() => ({ start: Animated.start}));
Animated.parallel = jest.fn(() => ({ start: Animated.start}));

NativeModules.JumioMobileSDKNetverify = {
  initNetverify: jest.fn(),
  startNetverify: jest.fn(),
};

NativeModules.UIManager = {
  RCTView: () => ({
    directEventTypes: {},
  }),
};

NativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  forceTouchAvailable: jest.fn(),
  State: {},
  Directions: {},
};

NativeModules.PlatformConstants = {
  forceTouchAvailable: false,
};

Share.share = jest.fn();

Keyboard.addListener = jest.fn();
Keyboard.removeListener = jest.fn();

PermissionsAndroid.request = jest.fn((permissionRequested) => {
  return Promise.resolve(PermissionsAndroid.RESULTS.GRANTED);
});

Platform.OS = "ios";

Platform.select = jest.fn((options) => {
  return Platform.OS === "android" ? options.android : options.ios;
});

jest.unmock("lodash");
_.debounce = jest.fn((fn) => fn);


jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

StatusBar.currentHeight = 20;
