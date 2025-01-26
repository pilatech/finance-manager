import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="page">
      <div className="container spacing-vertical">
          <h1 className="page-title">More information about PiggyFinance</h1>
          <p className="subtitle">Managing finance cannot be easier that this.</p>
      </div>
      <section className="hero">
        <div className="container">
          <div className="hero__box">
          <Image
               src="/images/accounts.svg"
               width={500}
               height={500}
                alt="Financial Statistics" 
               className="hero__image" />
              <div className="hero__text-box">
                  <h2 className="page-second-title page-title--hero">Allows More than one Account</h2>
                  <p className="page-text">
                  Our finance app gives you the flexibility to manage multiple accounts all in one place. Whether you have personal, business, or savings accounts, you can easily add and switch between them without any hassle. This feature is perfect for anyone who needs to keep track of various financial sources and ensures that all of your accounts are organized and accessible.
                  </p>
                  <p className="page-text">
                  With the ability to manage more than one account, you'll have a clear overview of your finances at all times. You won’t need to jump between different apps or platforms to track your cash, savings, or investments. Our user-friendly interface simplifies the process, making it easy to stay on top of your financial situation with just a few taps.
                  </p>
              </div>
          </div>
        </div>
      </section>
      <section className="hero hero--light">
        <div className="container">
          <div className="hero__box">
              <div className="hero__text-box">
                  <h2 className="page-second-title page-title--hero">Manages Cash and Bank</h2>
                  <p className="page-text">
                  Keeping track of both cash and bank accounts is crucial to maintaining financial balance, and our app makes this process effortless. You can securely record cash transactions, track deposits, withdrawals, and transfers, and always know exactly how much you have on hand at any given moment. Meanwhile, your bank account(s) stay seamlessly synced for real-time updates on your balance and spending.
                  </p>
                  <p className="page-text">
                  This dual support allows you to see the full picture of your finances. Whether you're tracking cash expenses on the go or monitoring bank account activity, our app ensures that every part of your financial life is well-managed and easily accessible. Say goodbye to juggling between different tools or manually tracking your spending—everything is now in one place!
                  </p>
              </div>
              <Image
               src="/images/cash-bank.svg"
               width={500}
               height={500}
                alt="Financial Statistics" 
               className="hero__image" />
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="container">
          <div className="hero__box">
          <Image
               src="/images/piggy-saving.svg"
               width={500}
               height={500}
                alt="Financial Statistics" 
               className="hero__image" />
              <div className="hero__text-box">
                  <h2 className="page-second-title page-title--hero">Has Piggy Bank Support</h2>
                  <p className="page-text">
                  Saving money can be hard, but with our Piggy Bank feature, we make it easier and more fun. You can create virtual “piggy banks” for any savings goal, whether it's for a vacation, a new gadget, or just building an emergency fund. Simply set your target amount, and the app will help you track your progress as you save. You can add money to your piggy bank directly from your cash or bank accounts.
                  </p>
                  <p className="page-text">
                  This feature is perfect for visualizing your savings goals and motivating you to stay on track. As you watch your piggy bank fill up, it’s a rewarding experience that helps you stay focused on your financial objectives. Whether you're saving for something big or just putting aside a little extra for peace of mind, the Piggy Bank feature makes it easy and rewarding to save.
                  </p>
              </div>
          </div>
        </div>
      </section>
      <section className="hero hero--light">
        <div className="container">
          <div className="hero__box">
              <div className="hero__text-box">
                  <h2 className="page-second-title page-title--hero">It's Easy to use</h2>
                  <p className="page-text">
                  We designed this app with simplicity in mind. From the very first time you open it, you'll find an intuitive interface that makes managing your finances easy and enjoyable. Navigating between accounts, entering transactions, and viewing your financial overview is straightforward, even if you're not tech-savvy. Our app is built for users of all experience levels, ensuring a smooth experience from start to finish.
                  </p>
                  <p className="page-text">
                  You’ll spend less time figuring out how things work and more time taking control of your finances. We understand that managing money can be overwhelming, so we’ve removed the complexities and made the process as user-friendly as possible. With just a few taps, you can manage all your accounts, track your spending, and meet your savings goals without any stress.
                  </p>
              </div>
              <Image
               src="/images/usability.svg"
               width={500}
               height={500}
                alt="Financial Statistics" 
               className="hero__image" />
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