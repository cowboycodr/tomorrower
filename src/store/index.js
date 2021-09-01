import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { time: "7:10am", title: 'Do homework.', expanded: false },
      { time: "7:10am", title: 'Do homework.', expanded: false },
      { time: "7:10am", title: 'Do homework.', expanded: false },
      { time: "7:20am", title: 'Do homework.', expanded: false },
      { time: "7:30am", title: 'Do homework.', expanded: false },
      { time: "3:00pm", title: 'Empty Dishwasher', expanded: false },
      { time: "3:10pm", title: 'Empty Dishwasher', expanded: false },
      { time: "4:00pm", title: 'Do more homework.', expanded: false},
      { time: "4:00pm", title: 'Do more homework.', expanded: false},
      { time: "4:00pm", title: 'Do more homework.', expanded: false},
      { time: "4:00pm", title: 'Do more homework.', expanded: false},
      { time: "4:00pm", title: 'Do more homework.', expanded: false},
      { time: "4:00pm", title: 'Do more homework.', expanded: false},
      { time: "4:00pm", title: 'Do more homework.', expanded: false},
      { time: "4:00pm", title: 'Do more homework.', expanded: false},
      { time: "5:00pm", title: 'Do more homework.', expanded: false},
      { time: "6:00pm", title: 'Do more homework.', expanded: false},
    ],
    colors: [
      "#fcbe03",
      "#ff5454",
      "#54ccff",
      "#54ff96",
      "#f542e6",
      "#e6f542",
    ]
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
