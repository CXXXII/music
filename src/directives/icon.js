export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value} text-xl`
    binding.arg === 'full' ? (iconClass = binding.value) : ''
    binding.modifiers.right ? (iconClass += ' float-right') : ''
    binding.modifiers.yellow
      ? (iconClass += ' text-yellow-400')
      : (iconClass += ' text-green-400')
    el.innerHTML += `<i class="${iconClass}"></i>`
  }
}
