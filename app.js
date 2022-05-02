Vue.createApp({
  data() {
    return {
      aircraftList: [
        {id: 0, name: 'Paramotor', checklistItems: ['Check fuel']},
        {id: 1, name: 'Paraglider', checklistItems: ['Clear lines']},
        {id: 2, name: 'Cessna 172', checklistItems: ['Check fuel']},
      ],
      somethingSelected: false,
      selected: {},
    }
  },
  methods: {
    selectCraft(craft) {
      this.selected = craft;
      this.somethingSelected = true;
    },
    addCraft(newCraft) {  //ADD FORM FOR NEW AIRCRAFT BUTTON
      this.aircraftList.push(newCraft)
      this.somethingSelected = false;
      this.selected = {};
    }

  }
})

.component('AircraftDisplay', {
  template: '#aircraft-display-template',
  props: {
    aircraftList: {type: Array, required: true},
    somethingSelected: {type: Boolean, required: true},
    selected: {type: Object, required: true},
  }
})




.mount('#app')