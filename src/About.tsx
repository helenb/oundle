import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { gameName, maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>{gameName}</i> is a remake of the word game{" "}
        <a href="https://www.nytimes.com/games/wordle/index.html">
          <i>Wordle</i>
        </a>{" "}
        by <a href="https://twitter.com/powerlanguish">powerlanguage</a>, and based on the <a href="https://hellowordl.net">Hellowordl</a> adaptation 
        created by <a href="https://twitter.com/chordbug">@chordbug</a>. Oundle (a town in Northamptonshire, of course!) is a version using ONLY British place names. The answer words are almost all in the top 1000 by population, making them easier to guess as people are more likely to have heard of them, but the bigger dictionary is based on a huge list of settlements in the <a href="https://gazetteer.org.uk">Gazetteer of British Place Names</a>. Places with multi-word names have been omitted unless they are often known by a single-word version (eg Clacton is allowed, as people don't tend to call it Clacton-on-Sea). Despite all that, this game is quite hard, so don't say we didn't warn you!
      </p>
      <p>
        You get {maxGuesses} tries to guess a target word.
        <br />
        After each guess, you get Mastermind-style feedback.
      </p>
      <hr />
      <table className="Game-rows">
        <tbody>
          <Row
            rowState={RowState.LockedIn}
            wordLength={4}
            cluedLetters={[
              { clue: Clue.Elsewhere, letter: "d" },
              { clue: Clue.Elsewhere, letter: "e" },
              { clue: Clue.Absent, letter: "a" },
              { clue: Clue.Absent, letter: "l" },
            ]}
          />
        </tbody>
      </table>
      <p>
        <b>A</b> and <b>L</b> aren't in the target word at all.
      </p>
      
      <p>
        <b className={"yellow-bg"}>D</b> and <b className={"yellow-bg"}>E</b> occur <em>elsewhere</em> in the target
        word.
        <br />
        <strong>(Perhaps more than once. 🤔)</strong>
      </p>
      <hr />
      <p>
        Let's move the <b className={"yellow-bg"}>DE</b> in our next guess:
      </p>
      <table className="Game-rows">
        <tbody>
          <Row
            rowState={RowState.LockedIn}
            wordLength={4}
            cluedLetters={[
              { clue: Clue.Absent, letter: "r" },
              { clue: Clue.Correct, letter: "y" },
              { clue: Clue.Correct, letter: "d" },
              { clue: Clue.Correct, letter: "e" },
            ]}
            annotation={"So close!"}
          />
          <Row
            rowState={RowState.LockedIn}
            wordLength={4}
            cluedLetters={[
              { clue: Clue.Correct, letter: "h" },
              { clue: Clue.Correct, letter: "y" },
              { clue: Clue.Correct, letter: "d" },
              { clue: Clue.Correct, letter: "e" },
            ]}
            annotation={"Got it!"}
          />
        </tbody>
      </table>
      <p>
        Created by{" "}
        <a href="https://twitter.com/chapmanbookman">@chapmanbookman</a>, with expert  code-wrangling assistance (as usual) by the long-suffering Helen Chapman.
      </p>
      
    </div>
  );
}