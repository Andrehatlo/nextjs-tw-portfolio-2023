---
title:  "React Native: State vs Props"
metaTitle:  "React Native: State vs Props"
metaDesc: "The question that confuses most beginners in react."
socialImage: '/images/start-react.jpg'
date: "2020-01-01"
tags:
    - React Native
    - State vs Props
    - Javascript
---

The question that confuses most beginners in react.

What is the difference of props and state?

Lets clarify this.

Props includes data which we give to a component.

State includes data that is local or private to that component. So other components cannot access that state, it s completely internal to that component.

Lets say we have a Counters component.

```javascript
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  };
    render() {
    return (
      <div>        
        { this.state.counters.map(counter =>
          <Counter key={counter.id} value={counter.value} id={counter.id}>
          </Counter>
          )
        }
      </div>
    );
  }
}

export default Counters;
```

If you take a closer look at the `render` method of the `Counters` component:

```javascript
<Counter key={counter.id} value={counter.value} id={counter.id}></Counter>
```

All attributes we are setting here are part of the `props`, the input to the `Counter` component.

We cannot access the `state` of this component. It is local and internal to that component.

Props is read only, for example lets look at the `Counter` component.

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = product => {
    this.setState({value: this.state.value + 1});
  };

  render() {
    return (
      <div>
        <span className='badge badge-warning'>{this.state.value}</span>
        <button
          onClick={ () => this.handleIncrement({ id: 1 }) }
          className="btn btn-secondary btn-sm">click
        </button>
      </div>
    );
  }
}

export default Counter;
```

Look closer at the helper method `handleIncrement`, which increments the counter by one:

```javascript
handleIncrement = product => {
  this.setState({value: this.state.value + 1});
};
```

If we update the `handleIncrement` method to update the `props.value` like this:

```javascript
handleIncrement = product => {
  this.props.value = 0;
  // this.setState({value: this.state.value + 1});
};
```

And we increment it in the view, we would get this error:

<img src="https://i.ibb.co/gyXg32t/Screenshot-2019-02-19-at-09-51-31.png" alt="react-native prop error" width="600">

So react does not allow you to change any props to any component.

If you would like to modify the input during the lifecycle of a component, you have to get that input and put it in the state like initially done in the `handleIncrement` method:

```javascript
handleIncrement = product => {
  this.setState({value: this.state.value + 1});
};
```

## More information about state and props

For more information about [state](https://facebook.github.io/react-native/docs/state) and [props](https://facebook.github.io/react-native/docs/props) visit the react [docs.](https://facebook.github.io/react-native/docs)
