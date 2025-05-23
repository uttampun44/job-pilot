import ErrorImage from "@assets/images/error.jpg";

export default function ErrorPage() {
    return (
           <main>
              <section className="min-h-screen w-full flex font-inter">
                 <img src={ErrorImage} alt="error" className="w-full h-full object-cover" />
              </section>
           </main>
    )
}