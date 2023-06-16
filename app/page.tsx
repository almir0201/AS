import Button from "../components/Button";
import Maincard from "../components/Maincard";
import Promises from "../components/Promises";
import Video from "../components/Video";
import Services from "../components/Services";
import Appointment from "../components/Appointment";
import Customers from "../components/Customers";
import Impact from "../components/Impact";

export default function Page() {
  return (
    <>
      <div className="Top">
        <div className="Top-bg"></div>
        <div className="container">
          <h1 className="Top-title">
          Vrhunska usluga je naš glavni motiv
          </h1>
          <Button text="ZAKAŽITE TERMIN" />
        </div>
      </div>
      <Maincard
        subject="KO SMO MI"
        title="Autoelektrika AS Bugojno"
        text="Od osnivanja 1989. godine servisiramo automobile ovdje u Bugojnu, s hiljadama zadovoljnih kupaca. Posljednjih 30 godina servisiramo sve domaće i strane automobile. Imamo stručno osoblje koji su certificirani tehničari. Naši potpuno novi objekti koriste najnoviju vrhunsku opremu za popravak. Naš rad je pošten i profesionalan, naši honorari su razumni, a visoka kvaliteta usluge uvijek zagarantovana."
        img="/first-cover.png"
        offLinks={{ display: "none" }}
        bg={{
          background: "url(/maincard-bg.png) no-repeat center center / cover",
        }}
      />
      <Promises />
      <Video />
      <Services />
      <Appointment />
      {/* <Maincard
        subject="GALLERY & LIVE STREAMS"
        title="Check out our hard workers"
        link1="Gallery"
        link2="Live stream: Bay 1"
        link3="Live stream: Bay 2"
        link4="Live stream: Bay 3"
        img="/gallery-pic.png"
        offText={{ display: "none" }}
      />
      <Customers />
      <Impact /> */}
    </>
  );
};
