import headerStyles from '../styles/containers/header.module.css';
import ai from '../public/ai.png';
import people from '../public/people.png';
import Image from 'next/image';


const Header = () => {
  return (
    <div className={`${headerStyles.gpt3__header} ${headerStyles.section__padding}`} id='home'>
      <div className={headerStyles.gpt3__header_content}>
        <h1 className={headerStyles.gradient__text}>
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>

        <div className={headerStyles.gpt3__header_content__input}>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className={headerStyles.gpt3__header_content__people}>
          <Image src={people} alt='People' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

        <div>
          <Image src={ai} alt='AI' />
        </div>
      </div>
    </div>
  );
};

export default Header;
