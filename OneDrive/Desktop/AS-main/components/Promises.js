import Title from './Title';
import Minicard from './Minicard';

function Promises() {
  return (
    <section className="Promises">
      <div className="container">
        <Title
          subject="NAŠE OBEĆANJE VAMA"
          title="Servisni tim"
        />
        <div className="Promises-content">
          <Minicard
            src="/giftbox.svg"
            title="Kvalitetna usluga"
            text="Uz dostupne usluge preuzimanja i dostave, rješavamo sve probleme oko popravka vaših vozila."
          />
          <Minicard
            src="/certified.svg"
            title="Usluge certificiranih stručnjaka"
            text="Naš tim tehničara su vrhunski profesionalci koji su visoko obučeni, učinkoviti i ljubazni"
          />
          <Minicard
            src="/team.svg"
            title="Usluge održavanja"
            text="Pobrinjavamo se da budete u tijeku sa zahtjevima održavanja vašeg automobila 5k, 10k, 20k i 30k kao što su sintetičko ulje i filtri."
          />
        </div>
      </div>
    </section>
  );
}
export default Promises;
