import { Nav } from "./components";
import {
    CustomerReview,
    Hero,
    PopularProducts,
    Services,
    SpecialOffer,
    SuperQuality,
} from "./sections";

function App() {
    return (
        <main className="relative">
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <PopularProducts />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding-x py-10">
                <Services />
            </section>
            <section className="padding">
                <SpecialOffer />
            </section>
            <section className="bg-pale-blue padding">
                <CustomerReview />
            </section>
        </main>
    );
}

export default App;
