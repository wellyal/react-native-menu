module.exports = (React) => {
  const { Animated } = React;
  const TimerMixin = require('react-timer-mixin');

  // A component that scales in when mounted.
  const ScaleAnimationView = React.createClass({
    mixins: [TimerMixin],
    getInitialState() {
      return { scaleAnim: new Animated.Value(0.01) };
    },
    componentDidMount() {
      this.setTimeout(() => {
        Animated.timing(this.state.scaleAnim, {
          duration: 60,
          toValue: 1
        }).start();
      }, 16);
    },
    render() {
      return (
        <Animated.View style={[this.props.style, { transform: [ { scale: this.state.scaleAnim } ] }]}>
          { this.props.children }
        </Animated.View>
      );
    }
  });

  return ScaleAnimationView;
};
