let a = new Date(1038240000 * 1000)
let b = new Date()
let c = b.getFullYear() - a.getFullYear()

a.setFullYear(b.getFullYear())

if (b < a) {
	c--
}

let d = document.getElementById('age')
d.innerHTML = c