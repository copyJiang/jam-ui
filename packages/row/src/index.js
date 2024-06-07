import './index.scss'
export default {
  name: 'jamRow',
  componentName: 'jamRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'flex'
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'center'
    }
  },
  computed: {
    styles() {
      const res = {}
      if (this.gutter) {
        res.marginLeft = `${this.gutter / 2}px`
        res.marginRight = res.marginLeft
      }
      return res
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'jam-row',
        `is-align-${this.align}`,
        `is-justify-${this.justify}`,
        {
          'jam-row--flex': this.type === 'flex',
        }
      ],
      style: this.styles
    }, this.$slots.default)
  }
}