/* Shared house-rule constants. Both the scorer (index.html) and the player
   reference (rules.html) read from here, so the numbers can only be wrong
   in one place. Label strings are HTML - escape anything you add. */

const SCORE = {
  natural: 500,      // canasta of naturals only
  dirty: 300,        // canasta containing wilds
  wild: 2000,        // canasta of all wilds
  red3: 100,         // each, and see red3DoubleAt
  red3DoubleAt: 4,   // hold this many red 3s and the whole lot doubles
  red3InHand: 20,    // one you never got down, caught in hand at the end
  blackThree: 5,     // its own constant: it only HAPPENS to match the 4-8 value
  goOut: 100,
  perfectCut: 100
};

// short = the cramped tally boxes in the scorer, long = prose
const CARD_VALUES = [
  {short:'4-7',        long:'4 through 7',               v:5},
  {short:'8-K',        long:'8 through King',            v:10},
  {short:'2s &amp; A', long:'2s and Aces',               v:20},
  {short:'Jokers',     long:'Jokers',                    v:50}
];

// Minimum meld to go down, by your current running score.
// [score at or above, points needed] - highest threshold first.
const MELD_MIN = [[7000,150],[3000,120],[1500,90],[0,50],[-Infinity,15]];
const meldMin = score => MELD_MIN.find(r => score >= r[0])[1];

const TARGET_DEFAULT = 10000;

const DEAL = {
  decks: 3,
  jokers: 6,
  hand: 17,          // cards dealt to each player
  draw: 2,           // cards drawn per turn (discard is always one)
  canastasToGoOut: 2,
  blackThreesToGoOut: 3   // the only time a black 3 is ever melded
};
DEAL.cards = DEAL.decks * 52 + DEAL.jokers;

const money = n => (n<0?'-':'') + Math.abs(n).toLocaleString();

// low tier first, for reading left to right
const meldLadder = () => [].concat(MELD_MIN).reverse().map(r => ({
  at: r[0] === -Infinity ? 'below 0' : money(r[0]) + '+',
  need: r[1]
}));
