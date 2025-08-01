import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Refund() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <section className="container mx-auto px-4 py-30 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Refund Policy</h1>
        <iframe src="https://merchant.razorpay.com/policy/QyVU1qqQgaE4DK/refund" className="w-full min-h-[70vh] border rounded-lg" title="Refund Policy" />
      </section>
      <Footer />
    </main>
  );
}
