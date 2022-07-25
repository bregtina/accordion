const accordian = document.querySelectorAll('.content-container')

accordian.forEach((acc) => {
  acc.addEventListener('click', () => {
    acc.classList.toggle('active')
  })
})
