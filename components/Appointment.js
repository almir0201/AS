import Input from './Input';
import Button from './Button';

function Appointment() {
  return (
    <section className="Appointment">
      <div className="container">
        <div className="Appointment-form">
          <h4 className="Appointment-form-title">Zakažite termin</h4>
          <div className="Appointment-form-content">
            <Input placeholder="Ime" />
            <Input placeholder="Email" />
            <Input placeholder="Broj telefona" />
            <Input placeholder="Izaberite uslugu" />
            <textarea
              name=""
              id=""
              placeholder="Napišite malo više o problemu koji imate sa Vašim autom"
            ></textarea>
          </div>
          <Button text="Zakažite termin" />
        </div>
        {/* <div className="Appointment-text">
          <div className="Appointment-text-title">
            Brojimo preko
          </div>
          <div className="Appointment-text-count">17k</div>
          <div className="Appointment-text-bottom">
          usluženih mušterija
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Appointment;
