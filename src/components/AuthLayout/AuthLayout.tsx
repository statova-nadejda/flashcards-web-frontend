import type { ReactNode } from "react";

import authIllustration from "~/assets/img/auth-illustration.png";

import classes from "./AuthLayout.module.scss";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className={classes.root}>
      <header className={classes.brand} aria-label="MemoBit">
        MemoBit
      </header>

      <div className={classes.background} aria-hidden="true">
        <div />
        <img
          alt=""
          className={classes.illustration}
          src={authIllustration}
        />
      </div>

      <main className={classes.content}>
        <section className={classes.card}>{children}</section>
      </main>
    </div>
  );
};

export default AuthLayout;
