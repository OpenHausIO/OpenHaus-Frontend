import ItemList from "../components/item-list.vue";
import Endpoint from "../components/endpoint.vue";

export default async ({ Vue }) => {
  Vue.component("item-list", ItemList);
  Vue.component("endpoint", Endpoint);
}