const prefix = 'jumbles'

export const type = {
  fetchJumbles: `${prefix}/FETCH`,
  fetchJumblesResolved: `${prefix}/FETCH_RESOLVED`,
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
