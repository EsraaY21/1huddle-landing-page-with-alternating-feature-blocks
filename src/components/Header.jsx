export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <img src={`assets/images/logo.svg`} alt="Hero" />
          <a href="#">Try It Free</a>
        </nav>
        <section className="hero">
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <a href="#">Get Started For Free</a>
          </div>
          <img src={`assets/images/illustration-mockups.svg`} />
        </section>
      </div>
    </header>
  );
}
