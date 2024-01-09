import Check from "../../assets/images/productpage/icons/check.svg"
import './OrderCard.scss';

export function orderCard (props) {
    return `
    <div class="orderCard__container">
        <div class="orderCard__item">
            <div class="orderCard__text">
                <img src="${Check}" alt="check icon">
                <h3>1. Customer Address</h3>
            </div>
            <p>Have your order delivered to your home, office or anywhere. We work with a number of different carriers & will ship via the one who can best meet your delivery needs.</p>
        </div>
    </div>
    
    `;
}

