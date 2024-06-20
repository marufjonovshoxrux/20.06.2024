// a (создание)
const header = document.createElement('header')
const left = document.createElement('div')
const right = document.createElement('div')
const img = document.createElement('img')
const nav = document.createElement('nav')
const all_link = document.createElement('a')
const my_link = document.createElement('a')

for(let i = 0; i < 4; i++) {
    // a
    const round = document.createElement('div')
    // b
    round.classList.add('round')
    // c
    right.append(round)
}

// b (оформление)

// _class
left.classList.add('left')
right.classList.add('right')
img.classList.add('logo')
// _attributes
img.src = "./logo.svg"
img.alt = "logo"
all_link.href = "#"
my_link.href = "#"
// _text
all_link.innerText = "All courses"
my_link.innerText = "My study"

// c (вставка)
header.append(left, right)
left.append(img, nav)
nav.append(all_link, my_link)

// document.body.append(header) // push
document.body.prepend(header) // unshift
// document.body.before(header) // unshift
// document.body.after(header) // unshift
