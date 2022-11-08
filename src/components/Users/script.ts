import { Mixins } from 'vue-property-decorator';

export default class PlutoUser extends Mixins() {
  name = 'Ananta';
  getTest() {
    console.log('Hello');
  }
}
