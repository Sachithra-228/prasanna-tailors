import { FeaturedWedding, Hero, Intro, ReviewsAndCta, ServiceCategories } from "@/components/home/HomeSections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <ServiceCategories />
      <FeaturedWedding />
      <ReviewsAndCta />
    </main>
  );
}
