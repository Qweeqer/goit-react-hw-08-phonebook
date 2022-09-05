import { H1, P } from './Home.styled';
import '../../components/ContactForm/ContactForm.module.css';
import { NavLinkSt } from '../../components/SharedLayout/SharedLayout.styled';
import s from './Home.module.css';

export default function Home() {
  return (
    <section className={s.homePage}>
      <form>
        <H1>Welcome to Phonebook application</H1>
      </form>
      <NavLinkSt to="/register">
        <p className={s.joinBtn}>
          <span>Click!</span>
          <span>JOIN TODAY</span>
        </p>
      </NavLinkSt>
      <form>
        <P className="appDescription">
          PhoneBook app is an easy to use contact manager app that gives you
          facility of saving and viewing your contacts, so that you never lose
          your contacts.
        </P>
      </form>
    </section>
  );
}
