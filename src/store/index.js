import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
        id: 'ffsdfsdfsd',
        title: 'Meetup in New York',
        date: new Date(),
        location: 'New York',
        description: 'New York, New York'
      },
      {
        imageUrl: 'https://static.wixstatic.com/media/673a1d_c7fe5bb5f4d5437295629e84efb4cc58~mv2.jpg',
        id: 'ffsdfsdffdsfdssd',
        title: 'Meetup in California',
        date: new Date(),
        location: 'California',
        description: 'Los Angeles, California'
      },
      {
        imageUrl: 'https://www.westjet.com/assets/wj-web/images/regions/alberta-737x426.jpg',
        id: 'ffsdfsdffdffdsfdssd',
        title: 'Meetup in Canada',
        date: new Date(),
        location: 'Canada',
        description: 'Toronto, Canada'
      }
    ],
    user: {
      id: 'dsfdfdsfd',
      registeredMeetups: 'ffsdfsdffdsfdssd'
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'sdasdsadsadasdag'
      }
      // Reach out to firebase and store
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
