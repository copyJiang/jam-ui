import './index.scss'
export default {
  name: 'jamCol',
  componentName: 'jamCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 0
    },
  },
  computed: {
   
  },
  render(h) {
    return h(this.tag, {
      class: [
       
      ],
    }, this.$slots.default)
  }
}