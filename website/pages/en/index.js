/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const { Container } = CompLibrary;
const { GridBlock } = CompLibrary;

class HomeSplash extends React.Component {
    render() {
        const { siteConfig, language = "" } = this.props;
        const { baseUrl, docsUrl } = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
        const langPart = `${language ? `${language}/` : ""}`;
        const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = (props) => (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        const Logo = (props) => (
            <div className="projectLogo">
                <img src={props.img_src} alt="Project Logo" />
            </div>
        );

        const ProjectTitle = (props) => (
            <h2 className="projectTitle">
                {props.title}
                <small>{props.tagline}</small>
            </h2>
        );

        const PromoSection = (props) => (
            <div className="section promoSection">
                <div className="promoRow">
                    <div className="pluginRowBlock">{props.children}</div>
                </div>
            </div>
        );

        const Button = (props) => (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={props.href} target={props.target}>
                    {props.children}
                </a>
            </div>
        );

        return (
            <SplashContainer>
                <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
                <div className="inner">
                    <ProjectTitle
                        tagline={siteConfig.tagline}
                        title={siteConfig.title}
                    />
                    <PromoSection>
                        <Button href="https://climatehero-web.cfapps.hana.ondemand.com/">
                            The App
                        </Button>
                        <Button
                            href={docUrl("web_application_documentation.html")}
                        >
                            Web Docs
                        </Button>
                        <Button href={docUrl("api_documentation.html")}>
                            API Docs
                        </Button>
                        <Button href={docUrl("docs_documentation.html")}>
                            Maintaining The Docs
                        </Button>
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        const { config: siteConfig, language = "" } = this.props;
        const { baseUrl } = siteConfig;

        const Block = (props) => (
            <Container
                padding={["bottom", "top"]}
                id={props.id}
                background={props.background}
            >
                <GridBlock
                    align="center"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const Features = () => (
            <Block layout="fourColumn">
                {[
                    {
                        content:
                            "ClimateHero is a Single-Page Application built with React + UI5.",
                        image: `${baseUrl}img/undraw_react.svg`,
                        imageAlign: "top",
                        title: "Built with React + UI5",
                    },
                    {
                        content:
                            "The ClimateHero server exposes a REST API which can be interacted with directly.",
                        image: `${baseUrl}img/undraw_operating_system.svg`,
                        imageAlign: "top",
                        title: "REST API",
                    },
                ]}
            </Block>
        );

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language} />
                <div className="mainContainer">
                    <Features />
                </div>
            </div>
        );
    }
}

module.exports = Index;
