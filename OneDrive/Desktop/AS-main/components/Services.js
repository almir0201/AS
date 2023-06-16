import Title from './Title';
import Servicecard from './Servicecard';
// import Button from './Button';

function Services() {
  return (
    <section className="Services">
      <div className="container">
        <Title
          subject="ŠTA NUDIMO"
          title="Naše usluge"
        />
        <div className="Services-content">
          <Servicecard
            src="ac-and-heating.jpg"
            title="Klima i grijanje"
            text="Kada postane vruće ili hladno, putovanje na posao brzo postane neugodno osim ako klima uređaj i grijanje ne rade maksimalno učinkovito."
          />
          <Servicecard
            src="car-battery.jpg"
            title="Servis akumulatora"
            text="Bez akumulatora u vašem vozilu, sve što imate je skupi ukras na prilazu. Kada se vaše vozilo ne upali, prvo mjesto na kojem trebate provjeriti je akumulator."
            shadow="shadow"
          />
          <Servicecard
            src="check-engine.jpg"
            title="Check engine lampica"
            text="Ozbiljno shvatamo check engine lampicu. Uvijek je dobra ideja svratiti i provjeriti motor kod jednog od naših mehaničara."
          />
          <Servicecard
            src="maintenance.jpg"
            title="Održavanje"
            text="Za dugotrajnu učinkovitost vašeg vozila, morate slijediti raspored servisa održavanja koji preporučuje proizvođač vozila."
          />
          <Servicecard
            src="oil-change.png"
            title="Zamjena ulja"
            text="Za osobna vozila s benzinskim pogonom i lake kamione, preporučujemo promjenu ulja svakih 5000 kilometara za obično ulje ili 10000 kilometara za sintetičko ulje."
          />
          <Servicecard
            src="electric.png"
            title="Elektrika"
            text="Bez obzira na to kakve probleme s elektrikom imate, mehaničari ovdje u Autoelektrika AS mogu pronaći i popraviti ih."
          />
          {/* <Button text="Learn More" /> */}
        </div>
      </div>
    </section>
  );
}

export default Services;
