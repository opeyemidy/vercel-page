import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Info from '../components/Info';
import Button from '../components/Button';
export default function Signup() {
  const [contents, setContents] = useState([
    {
      title: 'Instant edge deploys',
      body: 'Push to git and your website is live. Zero configuration required.',
      length: 28,
    },
    {
      title: 'Collaborate with previews',
      body: 'Every pull request gets its own preview URL. Share them to gather feedback or run tests.',
    },
    {
      title: 'Turn static to dynamic',
      body: 'Generate blazing fast pages and augment them with rich JavaScript that brings your apps alive.',
    },
    {
      title: 'Ship directly to the edge',
      body: 'Always fast. Always online. Always a hit.',
    },
  ]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="backdrop"></div>
      <div className="inner-wrapper">
        <div className="container">
          <div className="content">
            <div>
              <div
                className="content"
                style={{
                  '--align-items': 'flex-start',
                  '--justify-content': 'flex-start',
                  '--flex': '0 0 auto',
                }}
              >
                <span className="spacer vertical-space"></span>
                <div className="logo-lg">
                  <svg
                    height="26"
                    viewBox="0 0 284 65"
                    fill="var(--text-color-main)"
                  >
                    <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path>
                  </svg>
                </div>
                <span className="spacer vertical-space "></span>
                <div className="content features">
                  <div
                    className="content"
                    style={{
                      '--align-items': 'stretch',
                      '--justify-content': 'flex-start',
                      '--flex': '0 0 auto',
                    }}
                  >
                    {contents.map((content, i) => (
                      <Info
                        key={i}
                        title={content.title}
                        body={content.body}
                        length={content.length}
                      />
                    ))}
                  </div>
                  <span className="spacer"></span>
                  <div
                    className="content content-bottom"
                    style={{
                      '--justify-content': 'flex-start',
                      '--align-items': 'stretch',
                      '--flex': 1,
                    }}
                  >
                    <div className="head">
                      Proudly Serving Amazing Companies
                    </div>
                    <span className="spacer" style={{ marginTop: 11 }}></span>
                    <div className="content feature-img-1">
                      <div>
                        <span>
                          <img src="/hashicorp.svg" alt="hashicorp" />
                        </span>
                      </div>
                      <div>
                        <span>
                          <img src="/mcdonalds.svg" alt="mcdonalds" />
                        </span>
                      </div>
                      <div>
                        <span>
                          <img src="/facebook.svg" alt="facebook" />
                        </span>
                      </div>
                      <div>
                        <span>
                          <img src="/washingtonpost.svg" alt="washingtonpost" />
                        </span>
                      </div>
                    </div>
                    <div
                      className="content feature-img-1"
                      style={{ marginTop: 24 }}
                    >
                      <div>
                        <img
                          src="/auth0.svg"
                          alt="auth0"
                          style={{ width: 82.95 }}
                        />
                      </div>
                      <div>
                        <span>
                          <img
                            src="/uber.svg"
                            alt="uber"
                            style={{ width: 58.76 }}
                          />
                        </span>
                      </div>
                      <div>
                        <span>
                          <img
                            src="/tripadvisor-horizontal.svg"
                            alt="tripadvisor-horizontal"
                            style={{ width: 161.5 }}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="slider-container">
                      <div className="slider-wrapper">
                        <div>
                          <div className="slider-brand">
                            <div>
                              <span>
                                <img src="/hashicorp.svg" alt="hashicorp" />
                              </span>
                            </div>
                            <div>
                              <span>
                                <img src="/mcdonalds.svg" alt="mcdonalds" />
                              </span>
                            </div>
                            <div>
                              <span>
                                <img src="/facebook.svg" alt="facebook" />
                              </span>
                            </div>
                            <div>
                              <span>
                                <img
                                  src="/washingtonpost.svg"
                                  alt="washingtonpost"
                                />
                              </span>
                            </div>
                            <div>
                              <img
                                src="/auth0.svg"
                                alt="auth0"
                                style={{ width: 82.95 }}
                              />
                            </div>
                            <div>
                              <span>
                                <img
                                  src="/uber.svg"
                                  alt="uber"
                                  style={{ width: 58.76 }}
                                />
                              </span>
                            </div>
                            <div>
                              <span>
                                <img
                                  src="/tripadvisor-horizontal.svg"
                                  alt="tripadvisor-horizontal"
                                  style={{ width: 161.5 }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="slider-brand">
                            <div>
                              <span>
                                <img src="/hashicorp.svg" alt="hashicorp" />
                              </span>
                            </div>
                            <div>
                              <span>
                                <img src="/mcdonalds.svg" alt="mcdonalds" />
                              </span>
                            </div>
                            <div>
                              <span>
                                <img src="/facebook.svg" alt="facebook" />
                              </span>
                            </div>
                            <div>
                              <span>
                                <img
                                  src="/washingtonpost.svg"
                                  alt="washingtonpost"
                                />
                              </span>
                            </div>
                            <div>
                              <img
                                src="/auth0.svg"
                                alt="auth0"
                                style={{ width: 82.95 }}
                              />
                            </div>
                            <div>
                              <span>
                                <img
                                  src="/uber.svg"
                                  alt="uber"
                                  style={{ width: 58.76 }}
                                />
                              </span>
                            </div>
                            <div>
                              <span>
                                <img
                                  src="/tripadvisor-horizontal.svg"
                                  alt="tripadvisor-horizontal"
                                  style={{ width: 161.5 }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content"
            style={{
              '--flex': 1,
              '--justify-content': 'flex-start',
              '--align-items': 'stretch',
            }}
          >
            <div className="signup-right">
              <div className="sm-logo">
                <span className="spacer" style={{ marginTop: 35 }}></span>
                <svg
                  height="26"
                  viewBox="0 0 284 65"
                  fill="var( --text-color-main)"
                  aria-label="Vercel Logotype"
                >
                  <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path>
                </svg>
                <span className="spacer" style={{ marginTop: 47 }}></span>
              </div>
              <h1 className="signup-title">
                Join the best <br /> frontend teams
              </h1>
              <span className="spacer" style={{ marginTop: 47 }}></span>
              <span
                className="spacer spacer-sm"
                style={{ marginTop: -25 }}
              ></span>
              <div>
                <Button>
                  <span style={{ marginRight: 8 }}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      aria-label="github"
                    >
                      <path
                        d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                        fill="currentColor"
                        fillRule="nonzero"
                      ></path>
                    </svg>
                  </span>
                  <span>Continue with Github</span>
                </Button>
                <span className="spacer" style={{ marginTop: 11 }}></span>
                <Button color="#6b4fbb" hoverColor="#8367D3">
                  <span style={{ marginRight: 8 }}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 22"
                      aria-label="gitlab"
                    >
                      <path
                        d="M1.279 8.29L.044 12.294c-.117.367 0 .78.325 1.014l11.323 8.23-.009-.012-.03-.039L1.279 8.29zM22.992 13.308a.905.905 0 00.325-1.014L22.085 8.29 11.693 21.52l11.299-8.212z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M1.279 8.29l10.374 13.197.03.039.01-.006L22.085 8.29H1.28z"
                        fill="currentColor"
                        opacity="0.4"
                      ></path>
                      <path
                        d="M15.982 8.29l-4.299 13.236-.004.011.014-.017L22.085 8.29h-6.103zM7.376 8.29H1.279l10.374 13.197L7.376 8.29z"
                        fill="currentColor"
                        opacity="0.6"
                      ></path>
                      <path
                        d="M18.582.308l-2.6 7.982h6.103L19.48.308c-.133-.41-.764-.41-.897 0zM1.279 8.29L3.88.308c.133-.41.764-.41.897 0l2.6 7.982H1.279z"
                        fill="currentColor"
                        opacity="0.4"
                      ></path>
                    </svg>
                  </span>
                  <span>Continue with GitLab</span>
                </Button>
                <span className="spacer" style={{ marginTop: 11 }}></span>
                <Button color="#0052CC" hoverColor="#1668E2">
                  <span style={{ marginRight: 8 }}>
                    <svg width="20" height="20" viewBox="-2 -2 65 59">
                      <defs>
                        <linearGradient
                          x1="104.953%"
                          y1="21.921%"
                          x2="46.569%"
                          y2="75.234%"
                          id="bitbucket-1"
                        >
                          <stop
                            stopColor="currentColor"
                            stopOpacity=".4"
                            offset="7%"
                          ></stop>
                          <stop stopColor="currentColor" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M59.696 18.86h-18.77l-3.15 18.39h-13L9.426 55.47a2.71 2.71 0 001.75.66h40.74a2 2 0 002-1.68l5.78-35.59z"
                        fill="url(#bitbucket-1)"
                        fillRule="nonzero"
                        transform="translate(-.026 .82)"
                      ></path>
                      <path
                        d="M2 .82a2 2 0 00-2 2.32l8.49 51.54a2.7 2.7 0 00.91 1.61 2.71 2.71 0 001.75.66l15.76-18.88H24.7l-3.47-18.39h38.44l2.7-16.53a2 2 0 00-2-2.32L2 .82z"
                        fill="currentColor"
                        fillRule="nonzero"
                      ></path>
                    </svg>
                  </span>
                  <span>Continue with Bitbucket</span>
                </Button>
                <span className="spacer" style={{ marginTop: 23 }}></span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span className="link">Continue with Email →</span>
              </div>
              <span className="spacer" style={{ marginTop: 47 }}></span>
              <p style={{ maxWidth: '35ch' }}>
                By clicking continue, you agree to our
                <br />
                <a
                  href="https://vercel.com/legal/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary"
                >
                  <span className="link-text">Terms of Service </span>
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    shapeRendering="geometricPrecision"
                    style={{ color: 'currentColor' }}
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>{' '}
                and{' '}
                <a
                  href="https://vercel.com/legal/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary"
                >
                  <span className="link-text">Privacy Policy </span>
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    shapeRendering="geometricPrecision"
                    style={{ color: 'currentColor' }}
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                  .
                </a>
              </p>
              <div
                className="content"
                style={{
                  '--justify-content': 'flex-start',
                  '--align-items': 'stretch',
                  '--flex': '0 0 auto',
                }}
              >
                <span className="spacer" style={{ marginTop: 47 }}></span>
                <p className="link-text">
                  Have a complex company use case?
                  <br />
                  <a href="" className="link">
                    Get enterprise-grade assistance
                  </a>
                </p>
                <span className="spacer"></span>
                <hr />
                <span className="spacer"></span>
                <p className="link-text">
                  Already have an account?
                  <a href="https://vercel.com/login" className="link">
                    {' '}
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}