import Img from '@/components/ui/img';

import Categories from './categories';
import Hero from './hero';
import Nft from './nft';

export default async function IndexPage() {
  return (
    <section>
      <Hero className="container" />
      <div className="relative">
        <Img
          src="/public/assets/images/bg.svg"
          className="mx-auto -mt-40 max-w-[1800px]  md:-mt-56 lg:-mt-96"
          aspectRatio="1921/4778"
        />
        <div className="absolute inset-0 z-10 pt-96">
          <Nft />
          <Categories />
        </div>
      </div>
    </section>
  );
}
