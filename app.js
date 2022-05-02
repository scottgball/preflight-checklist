Vue.createApp({
  data() {
    return {
      aircraftList: [
        {id: 0, name: 'Paramotor', checklistItems: [{id: 0, name: 'Check fuel', completed: false}, {id: 1, name: 'Inspect Propeller', completed: false},]},
        {id: 1, name: 'Paraglider', checklistItems: [{id: 0, name: 'Clear lines', completed: false}]},
        {id: 2, name: 'Cessna 172', checklistItems: [{id: 0, name: 'Check fuel', completed: false}]},
      ],
      newCraft: {id: null, name: '', checklistItems: []},
      newCraftFormDisplayed: false,
      somethingSelected: false, //RETURN TO FALSE FOR DEFAULT!!!
      selected: {}, //RETURN TO EMPTY OBJECT FOR DEFAULT!!!
      newItemFormDisplayed: false,
      newItem: {id: null, name: '', completed: false},
    }
  },
  methods: {
    selectCraft(craft) {
      this.selected = craft;
      this.somethingSelected = true;
      this.newItemFormDisplayed = false;
    },
    toggleNewCraftForm() {
      this.newCraftFormDisplayed = !this.newCraftFormDisplayed
    },
    addNewCraft() {  //ADD FORM FOR NEW AIRCRAFT BUTTON
      this.newCraft.id = this.aircraftList.length;
      this.aircraftList.push(this.newCraft);
      this.somethingSelected = true;
      this.selected = this.newCraft;
      this.newCraftFormDisplayed = false;
    },
    markCompleted(id) {
      this.selected.checklistItems[id].completed = !this.selected.checklistItems[id].completed;
      console.log(id)
    },
    toggleItemForm() {
      this.newItemFormDisplayed = !this.newItemFormDisplayed;
    },
    addNewItem() {
      this.newItem.id = this.selected.checklistItems.length;
      this.selected.checklistItems.push(this.newItem);
      this.newItem = {id: null, name: '', completed: false}
    }

  }
})

.component('AircraftDisplay', {
  template: '#aircraft-display-template',
  props: {
    aircraftList: {type: Array, required: true},
    somethingSelected: {type: Boolean, required: true},
    selected: {type: Object, required: true}
  },
  methods: {
    toggleCompleted(id) { //NEED TO EMIT?
      console.log(id)
      this.$emit('item-completed', id)
    },
    toggleNewItemForm() {
      this.$emit('toggle-item-form')
    }
  }
})




.mount('#app')