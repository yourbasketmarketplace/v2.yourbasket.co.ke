import { Nav } from "../../components/nav/nav";
import { Signup } from "../../components/signup/signup";
import { Footer } from "../../components/footer/footer";
import { FeaturedBrands } from "../../components/featured/featured";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Search } from "../../components/search/search";

import "./categories.scss";

async function Categories (props) {
  const { params, query } = props;
  const filters = ["category", "brand", "price", "deals", "newArrival", "customerReview", "sellerScore"];

  return (
    <>
      {await Nav(props)}
      {Breadcrumbs({ name: "Categories", route: "/categories" }, params)}

      <div className="ad-group --row">
        <div className="ad" style="aspect-ratio: 920/90">
          <img src="https://via.placeholder.com/920x90" className="img" alt="Ad"/>
        </div>
      </div>

      {await FeaturedBrands()}

      <div className="container">
        <main className="content">
          {await Search({ filters, params, query })}
        </main>

        <aside className="aside aside__right">
          <div className="ad-group --column">
            <div className="ad" style="aspect-ratio: 300/600">
              <img src="https://via.placeholder.com/300x600" className="img" alt="Ad"/>
            </div>
          </div>
        </aside>
      </div>
      {Signup()}
      {Footer()}
    </>
  );
}

export default Categories;
