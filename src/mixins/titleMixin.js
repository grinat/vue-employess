const titleMixin = {
  created () {
    if (this.$options && this.$options.title) {
      document.title = this.$options.title
    }
  },
  watch: {
    '$route' () {
      if (this.$options && this.$options.title) {
        document.title = this.$options.title
      }
    }
  }
}

export default titleMixin
