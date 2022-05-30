import { ImWhatsapp } from 'react-icons/im';

const FloatingCTA = () => (
  <section id="FloatingCTA" className="fixed bottom-5 right-5 md:bottom-5 md:right-10 md:hidden">
    <ImWhatsapp size={30} className="text-light-green mx-auto"/>
  </section>
);

export default FloatingCTA;