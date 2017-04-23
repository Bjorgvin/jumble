const prefix = 'action'

export const type = {
  toggle: `${prefix}/TOGGLE`,
  toggleResolved: `${prefix}/TOGGLE_RESOLVED`,
}

export const toggle = (welcomeText) => ({
  type: type.toggle,
  payload: {
    welcomeText: welcomeText,
  },
})

export const toggleResolved = (welcomeText) => ({
  type: type.toggleResolved,
  payload: {
    welcomeText: welcomeText,
  },
})
