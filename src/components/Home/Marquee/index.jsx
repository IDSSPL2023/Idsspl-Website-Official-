import { Container } from 'lucide-react';
import css from './marquee.module.scss'; 
import ContainerHeader from '@/components/Common/ContainerHeader';

const Marquee = () => {

      const clients = [
    "1.svg",
    "2.svg",
    "3.svg",
    "4.svg",
    "5.svg",
    "6.svg",
    "7.svg",
    "8.svg",
    "9.svg",
    "10.svg",
    "11.svg",
    "12.svg",
    "13.svg",
    "14.svg",
    "15.svg",
    "16.svg",
    "17.svg",
    "18.svg"
  ];

  // Duplicate list for seamless infinite scroll
  const doubledClients = [...clients, ...clients];

    return (
    <section className={css.container}>
      <ContainerHeader title={"is trusted for"} highlight={"IDSSPL"} isHighlightFirst={true}/>
      <div className={css.marquee}>
        <ul className={css.track}>
          {doubledClients.map((item, index) => (
            <li key={index} className={css.item}>
              <img 
              loading="lazy"
                src={`/images/clientLogo/${item}`}
                alt={item.replace(".svg", "")}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
    )
}

export default Marquee