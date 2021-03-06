import React from "react";

const SignInBox = ({ type }) => {
  const data = {
    github: {
      icon: "https://unpkg.com/simple-icons@latest/icons/github.svg",
      title: "Sign in with GitHub",
      borderColor: "rgba(0,0,0,0.2)",
      link:
        "https://github.com/login/oauth/authorize?client_id=09aa7daf4705c794c443"
    },
    facebook: {
      icon: "https://unpkg.com/simple-icons@latest/icons/github.svg",
      title: "Sign in with Facebook",
      borderColor: "rgba(0,0,0,0.2)",
      link:
        "https://www.facebook.com/v3.1/dialog/oauth?client_id=234464140579336&redirect_uri=https://localhost:4000/callback?method=Facebook&response_type=code&scope=email"
    },
    google: {
      icon: "https://unpkg.com/simple-icons@latest/icons/github.svg",
      title: "Sign in with Google",
      borderColor: "rgba(0,0,0,0.2)",
      link:
        "https://accounts.google.com/o/oauth2/v2/auth?client_id=221259517688-mjfaibms17942tcl4taiinaeg9ad0rhi.apps.googleusercontent.com&redirect_uri=https://localhost:4000/callback?method=Google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email"
    }
  }[type];

  return (
    <a href={data.link}>
      <div className={`signinbox-container ${type}`}>
        <img width={21} className={"signinbox-icon"} src={data.icon} />
        {data.title}

        {/*language=CSS*/}
        <style jsx>{`
          .signinbox-container {
            width: 400px;
            height: 35px;
            position: relative;
            padding-left: 44px;
            line-height: 35px;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            border: 1px solid transparent;
            border-radius: 4px;
          }

          .github {
            color: #fff;
            background-color: #444;
            border-color: ${data.borderColor};
          }
          .facebook {
            color: #fff;
            background-color: #444;
            border-color: ${data.borderColor};
          }

          .signinbox-icon {
            position: absolute;
            left: 0;
            width: 21px;
            top: 0;
            padding: 7px;
            border-right: 1px solid ${data.borderColor};
          }
        `}</style>
      </div>
    </a>
  );
};

export default SignInBox;
