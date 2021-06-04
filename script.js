const { applyMiddleware, createStore, combineReducers, bindActionCreators } = Redux;
const { Provider, connect } = ReactRedux;
//Redux Code
const quoteColor = {
  1: "We must strike-Albert-Blue",
  2: "You are noticed-Justin-Brown",
  3: "Here we go again-Alicia-Orange",
  4: "Women rules are easy-Jane-Purple",
  5: "We have got this-Huston-Pink",
  6: "Rainbows make everyone smile-Steve-Green",
  7: "Every problem comes to an end-Thomas-Red",
  8: "Just keep smiling-Vivian-Gold",
  9: "Jackpot! We did it!-Hercules-Crimson",
  10: "New country,new job,new life,lets go-Paris-Cyan" };

const actions = "NEW-QUOTE";

const creator = () => {
  return {
    type: actions };

};

const reducer = (state = "Here we are-Kenneth-SpringGreen", action) => {
  switch (action.type) {
    case 'NEW-QUOTE':
      state = quoteColor[Math.ceil(Math.random() * 10)];
      return state;
    default:
      return state;}

};

const store = Redux.createStore(reducer);

// React Code



class TheQuote extends React.Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    this.props.changeQuote();
  }
  render() {
    const allWords = this.props.quoteNameColor;
    const spiltWords = allWords.split("-");

    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("div", { className: "bodyDiv", style: { 'background-color': spiltWords[2] } }, /*#__PURE__*/
      React.createElement("div", { className: "container-fluid", id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { className: "quotetext" }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-quote-left", style: { color: spiltWords[2] } }), /*#__PURE__*/
      React.createElement("span", { className: "quotewords", id: "text", style: { color: spiltWords[2] } }, spiltWords[0])), /*#__PURE__*/

      React.createElement("p", { className: "quoteby", id: "author", style: { color: spiltWords[2] } }, spiltWords[1]), /*#__PURE__*/
      React.createElement("div", { className: "quotefooter" }, /*#__PURE__*/
      React.createElement("div", { className: "icons" }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet", target: "_blank", style: { 'background-color': spiltWords[2] } }, /*#__PURE__*/
      React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/
      React.createElement("a", { href: "#", target: "_blank", style: { 'background-color': spiltWords[2] } }, /*#__PURE__*/
      React.createElement("i", { className: "fab fa-tumblr" }))), /*#__PURE__*/

      React.createElement("button", { id: "new-quote", onClick: this.handleEvent, style: { 'background-color': spiltWords[2] } }, "New quote"))))));




    // end of return
  } // end of render
} // end of component

//ReducxReact


const mapStateToProps = state => {
  return { quoteNameColor: state };
};
const mapDispatchToProps = dispatch => {
  return {
    changeQuote: () => {
      dispatch(creator());
    } };

};

const Container = connect(mapStateToProps, mapDispatchToProps)(TheQuote);


class AppWrapper extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(Provider, { store: store }, /*#__PURE__*/
      React.createElement(Container, null)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(AppWrapper, null), document.getElementById('app'));