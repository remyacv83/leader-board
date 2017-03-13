import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
    _id: '1',
    name: 'Sudheer',
    score: 99
},
{
    _id: '2',
    name: 'Remya',
    score: 90
}
];

const renderPlayers = function (playersList) {
   return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s). </p>;
   });
};

//runs when DOM is ready
Meteor.startup( function() {
  let title = 'Leader Board';
  let name = 'Remya';
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name} !</p>
      <p>Second paragraph</p>
      {renderPlayers(players)}
    </div>
);
  ReactDOM.render(jsx, document.getElementById('app'));
});
