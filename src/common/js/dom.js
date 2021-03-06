export function hasClass (el, className) {
  // let reg = new RegExp('/(^|\\s)' + className + '($|\\s)/')
  // return reg.test(el.className)
  return el.classList.contains(className)
}

export function addClass (el, className) {
  // if (hasClass(el, className)) {
  //     return
  //   }
  //
  //   let newClass = el.className.split(' ')
  //   newClass.push(className)
  //   el.className = newClass.join(' ')
  if (!hasClass(el, className)) {
    el.classList.add(className)
  }
}
