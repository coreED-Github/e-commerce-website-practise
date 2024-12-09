

import BestSelling from "./BestSelling/page";
import Categories from "./Categories/page";
import Featured from "./Featured/page";

import HeroSection from "./HeroSection/page";
import List from "./List/page";

export default function Home() {
  return (
    <div>
      <div className="bg-white mr-8 ml-8">

<HeroSection/>

<List/>
<Categories/>
<BestSelling/>
<Featured/>
      </div>
    </div>
  );
}
