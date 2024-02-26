import AuthService from "../../services/auth.service";
import DataService from "../../services/data.service";

import { ProductRow } from "../productCard/productRow";

import "./deals.scss";

export async function DealsOnElectronics (props) {
  const { dealElectronics } = props || [];

  return `
      <div class="deals-grid deals-on-electronics">
            <header class="deals__header">
                <h3 class="title">DEALS ON ELECTRONICS</h3>
                <div class="deals__text">
                    <a class="link --see-more" data-route="/categories/electronics?deals=true">
                        See more
                    </a>
                </div>
            </header>

            <section class="deals__list">
                ${new ProductRow(dealElectronics).render()}
            </section>
      </div>
  `;
}