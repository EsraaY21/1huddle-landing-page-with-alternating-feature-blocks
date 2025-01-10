export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <img src={`assets/images/logo.svg`} alt="Hero" />
          <a href="#">Try It Free</a>
        </nav>
        <section className="flex items-center justify-between mt-20 flex-col text-center lg:flex-row gap-14">
          <div className="lg:w-[41%]">
            <h1 className="font-semibold leading-[3.75rem] text-[2.5rem] ">
              Build The Community Your Fans Will Love
            </h1>
            <p className="text-[1.125rem] leading-[1.6875rem] my-8 ">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <a href="#" className="btn btn-primary">
              Get Started For Free
            </a>
          </div>
          <img
            src={`/images/illustration-mockups.svg`}
            alt="Hero"
            className="lg:w-[53%]"
          />
        </section>
      </div>
    </header>
  );
}
