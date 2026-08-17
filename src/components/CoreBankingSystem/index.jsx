import FAQs from '../Home/FAQs';
import Benifit from './Benifit';
import BenifitsForFinance from './BenifitsForFinance';
import css from './coreBankingSystem.module.scss';
import Features from './Features';
import HeroCoreBanking from './Hero';

const Products = ({ data }) => {
    console.log(data);
    const { hero, benifit, features, benifitsForFinance, faqs } = data;

    return (
        <main className={css.main}>
            {hero && <HeroCoreBanking {...hero} />}
            {benifit && <Benifit {...benifit} />}
            {features && <Features {...features} />}
            {benifitsForFinance && <BenifitsForFinance {...benifitsForFinance} />}
            {faqs && <FAQs items={faqs} />}
        </main>
    );
};

export default Products;
