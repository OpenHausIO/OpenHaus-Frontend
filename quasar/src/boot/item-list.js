// import something here
import ItemList from '../components/item-list.vue'

// "async" is optional
export default async ({ Vue }) => {

  Vue.component('item-list', ItemList)
}