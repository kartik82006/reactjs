function customRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const mainContainer = document.querySelector('#root')

const reactElement  = {
    type : 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    children : "Click me to visit site"
}

customRender(reactElement,mainContainer)
customRender(reactElement,mainContainer)