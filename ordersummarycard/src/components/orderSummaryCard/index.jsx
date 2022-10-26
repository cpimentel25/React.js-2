import './styles.css';
import illustrationhero from './images/illustration-hero.svg';
import iconImg from './images/icon-music.svg';

const OrderSummaryCard = () => {
    return(
        <main id='summaryCard'>
            <div className='imgBgCard'>
                <img src={illustrationhero} alt='imgBg'/>
            </div>
            <section>
                <h1>order summary</h1>
                <p>you can now listen to millions of songs, audiobooks, and podcast on any device anywhere you like!</p>
                <div className="infoCard">
                    <img src={iconImg} alt='imgIcon' />
                    <div className='infoPlan'>
                        <h3>annual plan</h3>
                        <p>$59,99/year</p>
                    </div>
                    <a href='/'>change</a>
                </div>
                <div className='buttons'>
                    <button className='btn1'>proceed to payment</button>
                    <button className='btn2'>cancel order</button>
                </div>
            </section>
        </main>
    );
};

export default OrderSummaryCard;