import React, { Component } from 'react';
import board_img from './board_layout.png'; 

import './Rules.css';

class Rules extends Component {
  render() {
    if(!this.props.showRules) {
        return null;
    }
    return (
      <div className="rules__container" onClick={this.props.closeRules}>
       <div className="container rule__content">
            <h2 style={{"textAlign": "center"}}>Rules</h2>
            <h3>Summary:</h3>
            <p>Fractal is a turn-based action PVP game with 2 - 4 players. After time-travel mishaps the universe has been fractured and players must fight in a shrinking world to restore space-time and become the sole survivor.</p> 
            <h3>Board:</h3>
            <ol>
                <li>The outer ring consists on the first 8 room (1-8), the inner ring the next 4 (9-12) and the portal room in the middle.</li>
                <li>Players start in the outer ring on the spawn location (represented by the S in a circle)</li>
                <li>White rectangles represent item chests which when the player lands on they get an item from the item deck.</li>
                <li>Black rectangles represent weapon chests which when the player lands on they get an weapon from the weapon deck.</li>
                <li>The shaded P in the portal room represents the portal, if the portal is open players may lands on this and draw a power card. (for more see Event Rules)</li>
            </ol>
            <h4>Board layout:</h4>
            <img className="rule__img" src={board_img}/>
            <h3>Cards:</h3>
            <ul>
                <li>Players can only have one weapon card, if you land on an weapon chest you may draw a card and either keep your current weapon or trade it in for the new weapon. Exception: You can hold two daggers. </li>
                <li>Items</li>
                <ul>
                    <li>Utility item: can on have one, you can swap just like with a weapon card</li> 
                    <li>Potions: can have any number of these</li>
                    <li>Traps: you can only have four of these at a time</li>
                </ul>
                <li>Power Cards: can only have one of these cards, you can swap just like with a weapon card, they can be played any time even during another player’s turn, at any phase.</li>
            </ul>
            <h3>Dice:</h3>
            <ul>
                <li>Movement: 1d4</li>
                <li>Attack/Defence: 1d6</li>
                <li>Special: 1d10</li>
            </ul>
            <h3>Start Stats:</h3>
            <ul>
                <li>Health starts at 20</li>
                <li>No weapons</li>
                <li>No items</li>
            </ul>
            <h3>General Rules:</h3>
            <ol>
                <li>You can only have one weapon at a time (with the exceptions of daggers, which can be dual wielded).</li>
                <li>You can only have one utility at a time.</li>
                <li>You can hold 4 trap cards at a time.</li>
                <li>You can hold an unlimited amount of consumables (i.e. potions).</li>
                <li>You can only have one power item at a time.</li>
                <li>Any card you draw and choose not to keep must go to the bottom of the appropriate deck (i.e. a weapon card to the bottom of the weapon deck).</li>
                <li> Dead is dead, no re-spawns.</li>
                <li>Phases happen in this order:</li>
                <ol>
                    <li>Items phase (laying down traps or using a utility / potion)</li>
                    <li>Movement</li>
                    <li>Attack (if opponent is in range)</li>
                </ol>
                <li>You cannot move through, or share a square with, another player.</li>
                <li>The game ends when there is only one player left.</li>
            </ol>
            <h3>Rules of Combat:</h3>
            <ol>
                <li>Combat is split into two phases, attack and defence.</li>
                <li>When a player initialises combat the attack phase is begun after an attack roll the player's accuracy is determined.</li>
                <li>The defending player then must roll to determine their defence.</li>
                <li>Accuracy potions must be used before your attack phase and defence potions before defence phase.</li>
                <li>If attack roll is higher then defence roll it is a successful attack and the amount of damage dealt is determined by the attacker’s weapon. </li>
            </ol>
            <h3>Trap Rules:</h3>
            <ol>
                <li>Traps must be laid down in the items phase and the trap position recorded by the player. If the trap has not been recorded it’s effects do not trigger. </li>
                <li>A player does not need to announce when they are laying down a trap. </li>
                <li>Traps must be placed in the player's direct vicinity. (i.e. one square in front, behind, left or right). </li>
                <li>The record a trap in use must be as follows</li>
                <ul>
                    <li>"Trap name" - "Trap location"</li>
                </ul>
                <li>If a trap is in a tier when it is destroyed then the trap is also destroyed. </li>
            </ol>
            <h3>Event Rules:</h3>
            <p>To use this site increase the turn counter each new round (it will also notify you how many turns until a fracture).</p>
            <ul>
                <li>Power cards:</li>
                <ul>
                    <li>Power card can be picked up from the portal (middle tile of the middle tier)</li>
                    <li>First appears after 10 rounds and will then only appear again 7 rounds after the last card has been picked up (i.e. -> Card appears -> Player picks up card -> 7 rounds -> Card appears).</li>
                    <li>Once a player has picked up power card you will need click the portal on the site.</li>
                </ul>
                <li>Fractures:</li>
                <ul>
                    <li>Outermost tier is destroyed, anyone still in this tier dies</li>
                    <li>Tier destruction happens after 10 rounds initially, then after every 7 round henceforth</li>
                    <li>Exception: the middle tier is never destroyed</li>
                </ul>
                <li>Box drops:</li>
                <ul>
                    <li>Item box appears in the middle tier, unless there are already four boxes on the field.</li>
                    <li>Item drop has a 30% chance of happening at the start of every round</li>
                    <li>If a player has picked up a box in the game simply click on the tile in the Collisions section to remove it from the site.</li>
                </ul>
            </ul>
       </div>
      </div>
    );
  }
}

export default Rules;