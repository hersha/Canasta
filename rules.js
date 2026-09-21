/* Shared house-rule constants. Both the scorer (index.html) and the player
   reference (rules.html) read from here, so the numbers can only be wrong
   in one place. Label strings are HTML - escape anything you add. */

const SCORE = {
  natural: 500,      // canasta of naturals only
  dirty: 250,        // canasta containing wilds
  wild: 2000,        // canasta of all wilds
  red3: 100,         // each, and see red3DoubleAt
  red3DoubleAt: 4,   // hold this many red 3s and the whole lot doubles
  goOut: 100,
  perfectCut: 100
};

// short = the cramped tally boxes in the scorer, long = prose
const CARD_VALUES = [
  {short:'4-8',        long:'4 through 8, and black 3s', v:5},
  {short:'9-K',        long:'9 through King',            v:10},
  {short:'2s &amp; A', long:'2s and Aces',               v:20},
  {short:'Jokers',     long:'Jokers',                    v:50}
];

// EDIT ME: minimum meld to go down, by your current running score.
// [score at or above, points needed] - highest threshold first.
// Placeholder = standard canasta tiers; only the opening 50 is confirmed house rule.
const MELD_MIN = [[4500,150],[3000,120],[1500,90],[0,50],[-Infinity,15]];
const meldMin = score => MELD_MIN.find(r => score >= r[0])[1];

const TARGET_DEFAULT = 10000;

const money = n => (n<0?'-':'') + Math.abs(n).toLocaleString();

// low tier first, for reading left to right
const meldLadder = () => [].concat(MELD_MIN).reverse().map(r => ({
  at: r[0] === -Infinity ? 'below 0' : money(r[0]) + '+',
  need: r[1]
}));
