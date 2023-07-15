import { Button } from "../components";
import { ReactComponent as LogoDatabiz } from "../assets/images/client-databiz.svg";
import { ReactComponent as LogoAudiophile } from "../assets/images/client-audiophile.svg";
import { ReactComponent as LogoMeet } from "../assets/images/client-meet.svg";
import { ReactComponent as LogoMaker } from "../assets/images/client-maker.svg";
import HeroMobile from "../assets/images/image-hero-mobile.png";
import HeroDesktop from "../assets/images/image-hero-desktop.png";

export function Intro() {
  return (
    <main>
      <div className="wrapper">
        <picture className="hero">
          <source media="(min-width: 40em)" srcSet={HeroDesktop} />
          <img className="hero__image" src={HeroMobile} alt="" />
        </picture>

        <section className="content">
          <h1 className="content__heading">Make remote work</h1>
          <p className="content__text">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <Button>Learn more</Button>
          <ul role="list" aria-label="our clients" className="clients">
            <li role="listitem">
              <LogoDatabiz aria-label="databiz" />
            </li>
            <li role="listitem">
              <LogoAudiophile aria-label="audiophile" />
            </li>
            <li role="listitem">
              <LogoMeet aria-label="meet" />
            </li>
            <li role="listitem">
              <LogoMaker aria-label="maker" />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
