import { el, mount } from 'redom'

const hello = el('h1', 'Hello RE:DOM!')

mount(document.body, hello)
