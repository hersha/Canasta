# Canasta Scorer

Score tracker for our house rules. Static site, no build step, no dependencies —
open `index.html` in a browser, or serve the folder.

| File | What it is |
| --- | --- |
| `index.html` | The scorer. Games are kept in `localStorage`. |
| `rules.html` | House rules reference, for players who haven't played with us. |
| `rules.js` | Every rule number, shared by both pages so they can't disagree. |

## Changing the rules

All of it lives in `rules.js`:

- `SCORE` — canasta bonuses, red 3 value, going-out and perfect-cut bonuses
- `CARD_VALUES` — card points
- `MELD_MIN` — minimum meld to go down, by current score
- `TARGET_DEFAULT` — the score a game is played to

Change a number there and the scorer, the tick marks on the progress bars, and
the rules page all follow.

## Tests

Open `index.html?test` with the browser console showing. Scoring, meld tiers,
and the storage-migration path assert themselves; anything wrong prints a
failed assertion, and a clean run logs `self check complete`.

## Local preview

```
npx http-server . -p 8099 -c-1
```

`file://` works too, though a server matches how GitHub Pages serves it.

## House rules in brief

Three decks and six jokers, seventeen cards each, draw two and discard one.
2s and Jokers are wild. Natural
canasta 500, dirty 300, wild 2,000. Red 3s are 100 each and double at four or
more — but count against you if your side ends the round with no canasta. Two
canastas before anyone can go out. Going out and a perfect deal are 100 each.
First to 10,000.

`rules.html` has the whole thing written out for players who haven't played
with us.
