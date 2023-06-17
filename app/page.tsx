import Button from "../components/Button";
import Maincard from "../components/Maincard";
import Promises from "../components/Promises";
import Video from "../components/Video";
import Services from "../components/Services";
import Appointment from "../components/Appointment";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="Top">
        <div className="Top-bg"></div>
        <div className="container">
          <h1 className="Top-title">
          Vrhunska usluga je naš glavni motiv
          </h1>
          <Link href="#book_an_apointment" scroll={false} className="button mb-10 mt-6">Zakažite termin</Link>
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
    </>
  );
};
