const config = {
  app: {
    appName: 'agh-sport',
    title: 'AGH Sport'
  }
}

  const sports = [
  { id: 'football', displayName: 'Football' },
  { id: 'basketball', displayName: 'Basketball' },
  { id: 'volleyball', displayName: 'Volleyball' },
  { id: 'squash', displayName: 'Squash' },
  { id: 'tennis', displayName: 'Tennis' },
  { id: 'badminton', displayName: 'Badminton' },
  { id: 'golf', displayName: 'Golf' },
  { id: 'jogging', displayName: 'Jogging' },
  { id: 'climbing', displayName: 'Climbing' }
]
const streets = ['Królowej Jadwigi', 'Księcia Józefa', 'Piastowska', 'Mieszka I']
const cities = [
  { id: 'krakow', name: 'Kraków', streets },
  { id: 'warszawa', name: 'Warszawa', streets },
  { id: 'katowice', name: 'Katowice', streets }
]

export default config
export {
  cities,
  sports
}
