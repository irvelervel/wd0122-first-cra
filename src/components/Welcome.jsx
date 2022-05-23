// props is ALWAYS going to be an object
// every prop you're assigning to a component will be part of that object

// const Welcome = (props) => {
const Welcome = ({ name, textColor }) => {
  return (
    <>
      <div>
        <h3>Hello {name}!</h3>
        <h4 style={{ color: textColor }}>It's nice to see you :)</h4>
      </div>
    </>
  )
}

export default Welcome

// <></> is a VIRTUAL WRAPPER, it's called a React Fragment

// I'd like to have this Welcome Component outputting not always Stefano,
// but a different name every time! How can I make that h3 DYNAMIC?

// THE PROPS

// object destructuring...?
// let obj = { firstName: 'EPICODE' }
// let { firstName } = obj
// firstName is now declared as a variable, it's value is obj.firstName
