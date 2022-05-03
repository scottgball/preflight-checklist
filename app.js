Vue.createApp({
  data() {
    return {
      aircraftList: [
        {id: 0, name: 'Paramotor', checklistItems: [{id: 0, name: 'Check fuel', completed: false}, {id: 1, name: 'Inspect propeller', completed: false},]},
        {id: 1, name: 'Paraglider', checklistItems: [{id: 0, name: 'Clear lines', completed: false}]},
        {id: 2, name: 'Cessna 172', checklistItems: [{id: 0, name: 'Check fuel', completed: false}, {id: 1, name: 'Inspect horizontal stabilizer', completed: false}, {id: 2, name: 'Inspect empennage', completed: false}]},
      ],
      newCraft: {id: null, name: '', checklistItems: []},
      newCraftFormDisplayed: false,
      somethingSelected: false,
      selected: {},
      newItemFormDisplayed: false,
      newItem: {id: null, name: '', completed: false},
    }
  },
  methods: {
    selectCraft(craft) { //Actions after clicking an existing aircraft sidebar button
      this.selected = craft;
      this.somethingSelected = true;
      this.newCraftFormDisplayed = false;
      this.newItemFormDisplayed = false;
    },
    toggleNewCraftForm() { //Action after clicking "Add New Aircraft" sidebar button
      this.newCraftFormDisplayed = !this.newCraftFormDisplayed;
    },
      addNewCraft() {  //Actions after new aircraft form submission
      if (this.newCraft.name.length) {
        this.newCraft.id = this.aircraftList.length;
        this.aircraftList.push(this.newCraft);
        this.somethingSelected = true;
        this.selected = this.newCraft;
        this.newCraftFormDisplayed = false;
        this.newItemFormDisplayed = false;
        this.newCraft = {id: null, name: '', checklistItems: []};
      } 
    },
    markCompleted(id) { //Action after clicking checkbox for an item, triggers CSS class change
      this.selected.checklistItems[id].completed = !this.selected.checklistItems[id].completed;
    },
    toggleItemForm() { //Display/hide new item form
      this.newItemFormDisplayed = !this.newItemFormDisplayed;
    },
    addNewItem() {  //Actions after new checklist item form submission
      if (this.newItem.name.length) {
        this.newItem.id = this.selected.checklistItems.length;
        this.selected.checklistItems.push(this.newItem);
        this.newItem = {id: null, name: '', completed: false}
    }
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
    toggleCompleted(id) { 
      this.$emit('item-completed', id)
    },
    toggleNewItemForm() {
      this.$emit('toggle-item-form')
    }
  }
})




.mount('#app')