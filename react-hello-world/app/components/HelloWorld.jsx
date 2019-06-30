const React = require('react');
const UnorderedList = require('./UnorderedList');

const dependenciesArray = [
'Lorem ipsum dolor sit amet',
'consectetur adipiscing elit',
'Quisque vel ultricies nunc',
'sit amet semper magna', 
'Sed nec tortor sed ex accumsan posuere', 
'Integer ut commodo sapien',
'Donec dignissim erat ac nunc rhoncus'
];

const componentsMade = [
  'Lorem ipsum dolor sit amet',
  'consectetur adipiscing elit'
];

/* the main page for the index route of this app */
const HelloWorld = function() {
  return (
    <div>
      <h1>Hello World!</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ultricies nunc, sit amet semper magna.</p>

      <UnorderedList items={dependenciesArray} />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ultricies nunc, sit amet semper magna.</p>

      <UnorderedList items={componentsMade} />
    </div>
  );
}

module.exports = HelloWorld;