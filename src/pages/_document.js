import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="Sam Lee, Web developer and software engineer based in Seattle, United States of America (USA)"
            content="Sam Lee, Web developer, software engineer, Seattle, United States, Development, Frontend, Backend, Fullstack, React, Next.js, Node.js, Express.js, MongoDB, Mongoose, Styled Components, HTML, CSS, JavaScript, TypeScript, Git, GitHub, REST API, Responsive, Mobile First, SEO, Web Accessibility, Web Performance, Web Design, UI, UX, Figma, Adobe XD, Photoshop, Illustrator, Premiere Pro, After Effects, Final Cut Pro, Video Editing, Video Production, Photography, Photo Editing, Photo Retouching, Graphic Design, Branding, Logo Design, Motion Graphics, Animation, Illustration, Drawing, Painting, Sculpture, Art, Music, Piano, Guitar, Bass, Drums, Singing, Songwriting, Composition, Arrangement, Production, Mixing, Mastering, Audio Engineering, Audio Production, Sound Design, Sound Effects, Foley, Voice Over, Voice Acting, Acting, Film, Television, Theater, Stage, Performance, Entertainment, Media, Content, Content Creation, Content Creator, Content Producer, Content Management, Content Strategy, Content Marketing, Content Writing, Copywriting, Copywriter, Blog, Blogging, Blogger, Wordpress, Wix, Squarespace, Shopify, Webflow, Web Design, Web Designer, Web Development, Web Developer, Software Engineer, Seattle, United States"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="icon" href="/images/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ margin: "0" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
