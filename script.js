const btn = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Message one',
  'Message TWO',
  'Message THREE',
  'Message four',
  'Message Five',
]

const types = ['info', 'success', 'error']

btn.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
  const toast = document.createElement('div')
  toast.innerText = message ? message : getRandomMessage()
  toast.classList.add('toast')
  toast.classList.add(type ? type : getRandomType())
  toasts.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
