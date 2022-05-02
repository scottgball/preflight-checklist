Vue.createApp({
  data() {
    return {
      aircraftList: [
        {id: 0, name: 'Paramotor', checklistItems: [{id: 0, name: 'Check fuel', completed: false}, {id: 1, name: 'Inspect Propeller', completed: false},]},
        {id: 1, name: 'Paraglider', checklistItems: [{id: 0, name: 'Clear lines', completed: false}]},
        {id: 2, name: 'Cessna 172', checklistItems: [{id: 0, name: 'Check fuel', completed: false}]},
      ],
      somethingSelected: true, //RETURN TO FALSE FOR DEFAULT!!!
      selected: {id: 0, name: 'Paramotor', checklistItems: [{id: 0, name:'Check fuel', completed: false},{id: 1, name: 'Inspect Propeller', completed: false}]}, //RETURN TO EMPTY OBJECT FOR DEFAULT!!!
      newItemFormDisplayed: false,
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
    },
    markCompleted(id) {
      this.selected.checklistItems[id].completed = !this.selected.checklistItems[id].completed;
      console.log(id)
    },
    revealNewItemForm() {
      this.newItemFormDisplayed = true;
    },

  }
})

.component('AircraftDisplay', {
  template: '#aircraft-display-template',
  props: {
    aircraftList: {type: Array, required: true},
    somethingSelected: {type: Boolean, required: true},
    selected: {type: Object, required: true},
    
  },
  methods: {
    toggleCompleted(id) { //NEED TO EMIT?
      console.log(id)
      this.$emit('item-completed', id)
    }
  }
})




.mount('#app')