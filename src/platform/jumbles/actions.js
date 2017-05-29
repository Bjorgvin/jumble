const prefix = 'jumbles'

export const type = {
  fetchJumbles: `${prefix}/FETCH`,
  fetchJumblesResolved: `${prefix}/FETCH_RESOLVED`,
  saveJumble: `${prefix}/SAVE`,
  saveJumbleResolved: `${prefix}/SAVE_RESOLVED`,
}

export const fetchJumbles = () => ({
  type: type.fetchJumbles,
})

export const fetchJumblesResolved = (jumbles) => ({
  type: type.fetchJumblesResolved,
  payload: {
    jumbles,
  },
})

export const saveJumble = (name, jumble) => ({
  type: type.saveJumble,
  payload: {
    name,
    jumble,
  }
})

export const saveJumbleResolved = (id) => ({
  type: type.saveJumbleResolved,
  payload: {
    id
  }
})
