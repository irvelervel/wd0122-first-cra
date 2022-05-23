// ...wtf is a class? it's like a factory or a blueprint
// each one of the produced entities it's called an INSTANCE

import { Component } from 'react'
// Component is the main Class Component that exists!
// we want to inherit from it all the superpowers

// imagine a class for a human being
// an INSTANCE will get some attributes: name, height, age, ...
// what about creating a class for a web developer? we're EXTENDING the
// class of a human being, adding on top other properties (like skills, preferredLibraries, roles...)

// we're going to use classes for creating React Component, super powerful ones!

class PowerfulComponent extends Component {
  // this has to be called exactly "render"!

  render() {
    console.log(this.props)
    return <h1 style={{ color: this.props.h1color }}>{this.props.title}</h1>
  }
}

// where can I grab the props in a Class Component?

export default PowerfulComponent

// "this" <-- it's an object pointing to the current scope

// in a functional component you're going to find the props in the argument of the arrow function!
// in a class component, you're going to find them on "this.props"
