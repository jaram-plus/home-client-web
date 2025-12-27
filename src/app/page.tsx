import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Activities from '@/components/sections/Activities';
import FeaturedPeople from '@/components/sections/FeaturedPeople';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Activities />
      <FeaturedPeople />
      <CallToAction />
    </Layout>
  );
}
