import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <div className="container spacing-vertical">
          <h1 className="page-title">Welcome to The PiggyFinance</h1>
          <p className="subtitle">Your pocket management buddy</p>
      </div>
      <section className="hero">
        <div className="container">
          <div className="hero__box">
              <div className="hero__text-box">
                  <h2 className="page-second-title page-title--hero">Managing Finances is hard!</h2>
                  <p className="page-text">
                    So you have been having trouble keeping your pocket tidy? You don't really know how much you current have in your pocket. You wonder why do you have less than what you thought you had.
                  </p>
                  <p className="page-text">
                    <em>PiggyFinance</em> will help you keep track of your income and expenditure. It will also let you track your finances that cannot be subtracted from - called piggy accounts. It could be a literal piggy bank, or funds put away where you cannot easily start using them until a certain time lapses. Know at a glance, how much you have and how much you have spent over time and of course your net worth.
                  </p>
              </div>
              <Image
               src="/images/managing.svg"
               width={500}
               height={500}
                alt="Financial Statistics" 
               className="hero__image" />
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container spacing-vertical">
        <h2 className="page-second-title">How it Works</h2>
          <div className="feature__boxes">
            <article className="feature">
                <Image 
                width={350}
                height={350}
                alt="First feature"
                src="/images/relaxed.svg"
                className="feature__image"/>
                <footer className="feature__text">
                  <h3 className="feature__title"><strong>1</strong><em>Sign Up for an Account</em></h3>
                </footer>
            </article>
            <article className="feature">
                <Image 
                width={350}
                height={350}
                alt="First feature"
                src="/images/banking.svg"
                className="feature__image"/>
                <footer className="feature__text">
                  <h3 className="feature__title"><strong>2</strong><em>Sign Into your Account</em></h3>
                </footer>
            </article>
            <article className="feature">
                <Image 
                width={350}
                height={350}
                alt="First feature"
                src="/images/calc.svg"
                className="feature__image"/>
                <footer className="feature__text">
                  <h3 className="feature__title"><em>3</em><em>Manage your finances!</em></h3>
                </footer>
            </article>
          </div>
        </div>
      </section>
      <section className="cta spacing-vertical">
        <div className="container">
          <div className="cta__box">
            <p className="cta__text">Join other 500+ already using PiggyFinance</p>
            <Link className="cta__link" href="/sign-up">Join Now</Link>
          </div>
        </div>
      </section>
    </main>
  )
}