const header = document.createElement('header')
const left = document.createElement('div')
const img = document.createElement('img')
const right = document.createElement('div')
const menu = document.createElement('img')
const user = document.createElement('img')
const nav = document.createElement('nav')

left.classList.add('left')
right.classList.add('right')
img.classList.add('logo')
menu.classList.add('menu')
user.classList.add('user')

for(let i = 0; i < 3; i++) {
    // a
    const link = document.createElement('a')
    // b
    link.classList.add('link')
    // c
    // right.append(rounds)
    // left.append(rounds)
    right.append(link)
    

    link.href = '#'

    link.innerHTML = 'Ссылка'
}

for(let i = 0; i < 3; i++) {
    const link = document.createElement('a')

    link.classList.add('link')

    left.prepend(link)

    link.innerHTML = 'Ссылка'

    link.href = '#'

    
}






img.src = './logo2.svg'
img.alt = 'logo'
user.src = './user.svg'
user.alt = 'user'
menu.src = './menu.svg'
menu.alt = 'menu'


header.append(left,right)
left.append(img,nav)
right.append(nav,menu,user)



document.body.prepend(header)



const box = document.createElement('div')
const textNicolas = document.createElement('h2')
const price = document.createElement('p')

box.classList.add('box')

box.append(textNicolas,price)

textNicolas.innerHTML = 'Nicolas Rivera'
price.innerText = '1878$'

document.body.append(box)



const box_2 = document.createElement('div')
const textChris = document.createElement('h3')
const input = document.createElement('input')

box_2.classList.add('box_2')

input.name = 'age'
input.id = 'age'
input.type = 'number'
input.placeholder = 'Age'

box_2.append(textChris, input)

textChris.innerText = 'Chris Diaz'

document.body.append(box_2)


const box_3 = document.createElement('div')
const div_img = document.createElement('div')
const text = document.createElement('div')
const img_2 = document.createElement('img')
const textMEN = document.createElement('h2')
const textYour = document.createElement('p')
const button = document.createElement('button')


box_3.classList.add('box_3')
div_img.classList.add('img')
text.classList.add('text')


img_2.src = './case.png'
img.alt = 'case'

box_3.append(div_img,text)
div_img.append(img_2)
text.append(textMEN,textYour,button)

textMEN.innerText = 'MEN’S CLOTHING (120)'
textYour.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in thepadded sleeve, your everyday '
button.innerHTML = 'В избранное'

document.body.append(box_3)

