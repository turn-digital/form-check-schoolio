import React, { useState, useRef } from "react";
import { sendContactForm } from "../../services/index";

const isBrowser = window !== undefined;

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e) => {
    e.preventDefault();
    const res = await sendContactForm({
      schoolName: schoolName,
      email: e.target[0].value,
    });
    if (res === 0) {
      setMessage("Thank you for your email");
      formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

  let schoolName = "";

  if (isBrowser) {
    schoolName = window.location.host;
  }

  return (
    <main className="wrapper contacts-form">
      <section className="contacts-form__block">
        <h1 className="contacts-form__head">Vai šī ir mūsu skolas jaunā mājas lapa?</h1>
        <p className="contacts-form__text">Tā var kļūt trīs dienu laikā par 50/Eur mēnesī bez izstrādes izmaksām. Katra skola ir pelnījusi tīmekļvietni, ar kuru var lepoties! </p>
        <button className="contacts-form__button" aria-label="Ko tālāk?" href="#form">Ko tālāk?</button>
      </section>
      <section className="contacts-form__block">
        <ul>
          <li className="contacts-form__point">
            <h3 className="contacts-form__subtitle">Viens risinājums piekļūstamības prasībām</h3>
            <p className="contacts-form__text">Atbilstība VARAM noteiktajām vadlīnijām un pieejama cilvēkiem ar ierobežojumiem</p>
          </li>
          <li className="contacts-form__point">
            <h3 className="contacts-form__subtitle">Paredzamas izmaksas</h3>
            <p className="contacts-form__text">Nav izstrādes maksas, tikai uzturēšana. 50 eur mēnesī.</p>
          </li>
          <li className="contacts-form__point">
            <h3 className="contacts-form__subtitle">Saturu ievietošana tik viegla kā Facebook</h3>
            <p className="contacts-form__text">Ērta satura ievadīšana. Katram pa spēkam. Vienmēr aktuāls saturs, jo to var ievietot jebkurš.</p>
          </li>
        </ul>
      </section>
      <section className="contacts-form__box">
        <h2 className="contacts-form__title">Vairākas skolas jau izvēlas Schoolio platformu!</h2>
        <ul className="contacts-form__list">
          <li className="contacts-form__item">
            <a className="contacts-form__link" aria-label="Ozolnieku vidusskola" href="https://www.salgalesmms.lv/">Ozolnieku vidusskola</a>
          </li>
          <li className="contacts-form__item">
            <a className="contacts-form__link" aria-label="Salgales mūzikas un mākslas skola" href="https://www.salgalesmms.lv/">Salgales mūzikas un mākslas skola</a>
          </li>
          <li className="contacts-form__item">
            <a className="contacts-form__link" aria-label="Ozolnieku vidusskola" href="https://www.salgalesmms.lv/">Ozolnieku vidusskola</a>
          </li>
          <li className="contacts-form__item">
            <a className="contacts-form__link" aria-label="Salgales mūzikas un mākslas skola" href="https://www.salgalesmms.lv/">Salgales mūzikas un mākslas skola</a>
          </li>
          <li className="contacts-form__item">
            <a className="contacts-form__link" aria-label="Ozolnieku vidusskola" href="https://www.salgalesmms.lv/">Ozolnieku vidusskola</a>
          </li>
          <li className="contacts-form__item">
            <a className="contacts-form__link" aria-label="Salgales mūzikas un mākslas skola" href="https://www.salgalesmms.lv/">Salgales mūzikas un mākslas skola</a>
          </li>
        </ul>
      </section>
      <section className="container max-w-2xl text-center">
        <div className="contacts-form__box">
          <h2 className="contacts-form__title">Ko darīt tālāk?</h2>
          <p className="contacts-form__text">Sūti informātikas skolotājam vai atbildīgajam par mājaslapu, jo tava mājaslapa var izskatīties šādi!</p>
          <button className="contacts-form__button" aria-label="Dalīties" href="#form">Dalīties</button>
          <p className="contacts-form__text contacts-form__text--margin">Ievadi savu e-pasta adresi un mēs ar tevi sazināsiemies tuvāko dienu laikā</p>
        </div>
        <div id="form">
         {message && (
           <div>
           {message}
           <span className="contacts-form__close" onClick={() => setMessage("")}>&times;</span>
         </div>
         )}
          <form ref={formRef} onSubmit={submitContact} className="contacts-form__form">
            <label for="email" className="contacts-form__text">E-pasts</label>
            <input id="email" required type={"email"} className="contacts-form__input"/>
            <button className="contacts-form__button" aria-label="submit" type="submit">Send</button>
          </form>
          <img className="contacts-form__img" src="../../assets/images/makslasskola.ventspils.lv-ln.jpg" aria-label="schoolio logo"/>
        </div>
    </section>
    </main>
  );
};

export default ContactForm;
