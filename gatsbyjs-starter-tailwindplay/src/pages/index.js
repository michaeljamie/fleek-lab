import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
    
      <SEO
        title="Fleek Lab"
        keywords={[`web development`, `web design`, `react`, `utah`]}
      />

    </Layout>
  );
}

export default IndexPage;
