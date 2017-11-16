import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    React.createElement(
      'ul',
      null,
        React.createElement('li', null, '<a href="index.html">Home</a>'),
        React.createElement('li', null, '<a href="ordering-online.html">Ordering Online</a>'),
        React.createElement('li', null, '<a href="products/breads.html">Products</a>'),
            React.createElement(
                'ul',
                null,
                    React.createElement('li', null, '<a href="products/breads.html">Breads</a>'),
                    React.createElement('li', null, '<a href="products/rolls.html">Rolls</a>') 
            )
        ),
    React.createElement(
        'ul',
        null,
        React.createElement('li', null, '<a href="about-us.html">About us</a>'),
            React.createElement(
                'ul',
                null,
            )

)        
    document.getElementById('root')
  );