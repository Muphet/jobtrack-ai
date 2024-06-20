import { defineStore } from 'pinia'
import type { Job } from '~/types/Job'
import {v4 as uuidv4} from 'uuid'

export const useJobsStore = defineStore({
  id: 'JobsStore',
  persist: {
    storage: persistedState.localStorage,
    paths: ['items']
  },
  state: () => ({ 
    items: <Job[]>[],
    showContext: false,
    contextData: {
      top: 0,
      left: 0,
      item: <Job>{}
    },
    editing: ""
  }),
  getters: {
    getJob: (state) => {
      return (id: string) => state.items.find((el) => el.id === id)
    },
    findByName: (state) => {
      return (name: string) => state.items.find(el => el.name.toLowerCase().includes(name.toLowerCase()))
    },
    getAllJobs: (state) => state.items,
    getShowContext: (state) => state.showContext,
    getContextData: (state) => readonly(state.contextData)
  },
  actions: {
    addJob({
      name = '', 
      location = 'location', 
      position = 'position', 
      tag = null, 
      salary = 0, 
      contract = 'permanent' as const, 
      time = new Date().toString(),
      status = 'applied' as const
    }) {
      let id = uuidv4() as string;
      if(name === '') name = `company ${this.items.length}`
      let newJob:Job = {
        id, name, location, position, tag, salary, contract, time, status
      }
      this.items = [...this.items, newJob]
    },
    removeJob(id:string) {
      if(!id) return;
      this.items = this.items.filter(el => el.id !== id)
    },
    editJob(job:Job) {
      if(!job) return;
      const idx = this.items.findIndex(val => val.id === job.id);
      this.items[idx] = job
    },
    openContext(evt:any, item:Job) {
      if(!evt || !item) return;
      this.contextData = {
        top: evt.pageY || evt.clientY,
        left: evt.pageX || evt.clientX,
        item
      }
      this.showContext = true
    },
    closeContext(){
      this.reset()
    },
    reset() {
      this.showContext = false
      this.contextData = {
        top:0,
        left:0,
        item: <Job>{}
      }
    },
    setEditing(id:string) {
      if(!id) return;
      this.editing = id
      this.reset()
    }
  }
})
