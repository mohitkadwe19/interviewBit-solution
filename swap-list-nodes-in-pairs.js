function Node(data) {
  this.data = data
  this.next = null
}

function swapPairs(A) {

  let head = A
  let prev = null
  let curr = A
  let next = null

  while (curr && curr.next) {
    next = curr.next.next
    curr.next.next = curr
    if (prev) {
      prev.next = curr.next
    } else {
      head = curr.next
    }
    curr.next = next
    prev = curr
    curr = next
  }

  return head;

}

let a = new Node(1)
let b = new Node(2)
let c = new Node(3)
let d = new Node(4)
let e = new Node(5)
let f = new Node(6)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

console.log(swapPairs(a))