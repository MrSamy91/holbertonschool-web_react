export const ACTION_TYPES = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
  MARK_NOTIFICATION_READ: 'MARK_NOTIFICATION_READ',
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  SET_COURSES: 'SET_COURSES'
};

export const initialState = {
  displayDrawer: true,
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
  notifications: [],
  courses: [],
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        user: {
          email: action.payload.email,
          password: action.payload.password,
          isLoggedIn: true
        }
      };
      
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        user: {
          email: '',
          password: '',
          isLoggedIn: false
        },
        courses: []
      };

    case ACTION_TYPES.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload
      };

    case ACTION_TYPES.SET_COURSES:
      return {
        ...state,
        courses: action.payload
      };

    case ACTION_TYPES.TOGGLE_DRAWER:
      return {
        ...state,
        displayDrawer: !state.displayDrawer
      };

    case ACTION_TYPES.MARK_NOTIFICATION_READ:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload
        )
      };

    default:
      return state;
  }
}
