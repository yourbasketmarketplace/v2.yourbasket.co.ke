import AuthService from "../../services/auth.service";
import DataService from "../../services/data.service";

import "./deals.scss";
import { ProductGroup } from "../product/productGroup";
import { Component } from "@wearearchangel/handcrafted";

export class CrazyOffers extends Component {
  async data () {
    const auth = AuthService.getCurrentUser();
    const userId = (auth) ? auth.id : "";
    const data = await DataService.searchProduct({
      mastCatId: [],
      catId: [],
      subCatId: [],
      brandId: [],
      dates: [],
      keyword: "",
      filter: "best-sellers"
    }, userId);

    return data.data;
  }

  template () {
    const { products } = this.state;
    return (
      <div className="deals-grid deals-today">
        <header className="deals__header">
          <div className="deals__title">
            <h3 className="title">Crazy Offers</h3>
          </div>

          <div className="deals__text">
            <a className="link --see-more" data-route="/product/filter/best-sellers">
							See all deals
            </a>
          </div>
        </header>

        <section className="deals__grid">
          <ProductGroup products={products}/>
        </section>
      </div>
    );
  }
}
