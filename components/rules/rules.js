const Rules = () => (
  <>
  <div className="text-black text-medium font-semibold">

    <ul className="list-decimal list-inside">

            <li>Becherverhältnis: Angabe, wie viele Becher jeweils am Ende noch übrig waren</li>
            <li>Schnikelregeln: Wer schnickeln gewinnt, darf sich entscheiden, ob entweder die Spielseite oder ob man anfängt aussucht. Der Verlierer darf genau das aussuchen, was der Gewinner nicht ausgesucht hat.</li>
            <li>Eingießen: Man füllt Bier des Gegners auf</li>
            <li>Umwerfen: Fällt beim Werfen ein Becher um, trinkt derjenige, der gerade mit dem Ball den Becher umgeworfen hat, einen Strafbecher, den sich der Gegner aussuchen darf. (Da er selbst für die korrekte Füllung verantwortlich war und entweder zu wenig befüllt hat, oder zu hart geworfen hat) Spezialfall: Falls auf beiden Seiten nurnoch ein Becher sein sollte und dieser umgeworfen wird, endet das Spiel unentschieden.</li>
            <li>Fast Kill: Wenn ein unausgetrunkener bereits getroffener Becher des Gegners direkt getroffen wird, ist das Spiel sofort gewonnen. </li>
            <li>Turnier: Siege werden in der Turnier-KO </li>
    </ul>
  </div>
  </>
);

export default Rules;