// property propagation
const NameContext = React.createContext('name'); // chain of components

function MyComponent1() {
  const name = 'Marcos dos Santos Carvalho';
  return /*#__PURE__*/React.createElement(NameContext.Provider, {
    value: name
  }, /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MyComponent2, null)));
}

function MyComponent2() {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement(MyComponent3, null));
}

function MyComponent3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, null));
}

function MyComponent4() {
  return /*#__PURE__*/React.createElement(NameContext.Consumer, null, name => /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, '4th component with prop name: ' + name)));
}

function MyComponent() {
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MyComponent1, null));
} // unchain components


ReactDOM.render( /*#__PURE__*/React.createElement(MyComponent, null), document.getElementById('app'));
