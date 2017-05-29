const prefix = 'jumbles'

export const type = {
  fetchJumbles: `${prefix}/FETCH`,
  fetchJumblesResolved: `${prefix}/FETCH_RESOLVED`,
  saveJumble: `${prefix}/SAVE`,
  saveJumbleResolved: `${prefix}/SAVE_RESOLVED`,
  deleteJumble: `${prefix}/DELETE`,
  deleteJumbleResolved: `${prefix}/DELETE_RESOLVED`,
}

export const deleteJumble = (id) => ({
  type: type.deleteJumble,
  payload: {
    id,
  },
})

export const deleteJumbleResolved = (id) => ({
  type: type.deleteJumbleResolved,
  payload: {
    id,
  },
})

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
