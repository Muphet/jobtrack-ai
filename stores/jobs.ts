import { defineStore } from 'pinia'
import type { Job } from '~/types/Job'

export const useJobsStore = defineStore({
  id: 'JobsStore',
  state: () => ({ 
    items: <Job[]>[]
  }),
  getters: {
    getJob: (state) => {
      return (id: string) => state.items.find((el) => el.id === id)
    },
    getAllJobs: (state) => state.items
  },
  actions: {
    addJob(newJob:Job) {
      this.items = [...this.items, newJob]
    },
    removeJob(id:string) {
      this.items = this.items.filter(el => el.id !== id)
    },
    editJob(job:Job) {
      const idx = this.items.findIndex(val => val.id === job.id);
      this.items[idx] = job
    }
  }
})
