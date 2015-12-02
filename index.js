import React from "react";
import { render } from "react-dom";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "./src";

import preloader from "./src/utils/preloader";

require("normalize.css");
require("./src/themes/default/index.css");

const images = {
  phil: require("./assets/phil.jpg")
};

const code = {
  assertions: {
    assert: require("raw!./assets/code/assertions/assert"),
    expect: require("raw!./assets/code/assertions/expect"),
    must: require("raw!./assets/code/assertions/must"),
    should: require("raw!./assets/code/assertions/should"),
    chai: require("raw!./assets/code/assertions/chai")
  },
  frameworks: {
    unit: {
      jasmine: {
        install: require("raw!./assets/code/frameworks/unit/jasmine/install"),
        configure: require("raw!./assets/code/frameworks/unit/jasmine/configure"),
        spec: require("raw!./assets/code/frameworks/unit/jasmine/spec")
      },
      mocha: {
        install: require("raw!./assets/code/frameworks/unit/mocha/install"),
        configure: require("raw!./assets/code/frameworks/unit/mocha/configure"),
        spec: require("raw!./assets/code/frameworks/unit/mocha/spec")
      },
      jest: {
        install: require("raw!./assets/code/frameworks/unit/jest/install"),
        configure: require("raw!./assets/code/frameworks/unit/jest/configure"),
        spec: require("raw!./assets/code/frameworks/unit/jest/spec")
      },
      ava: {
        install: require("raw!./assets/code/frameworks/unit/ava/install"),
        configure: require("raw!./assets/code/frameworks/unit/ava/configure"),
        spec: require("raw!./assets/code/frameworks/unit/ava/spec")
      },
      code: {
        example: require("raw!./assets/code/example")
      }
    },
    e2e: {
      casper: {
        install: require("raw!./assets/code/frameworks/e2e/casper/install"),
        configure: require("raw!./assets/code/frameworks/e2e/casper/configure"),
        test: require("raw!./assets/code/frameworks/e2e/casper/test.js")
      },
      nightwatch: {
        install: require("raw!./assets/code/frameworks/e2e/nightwatch/install"),
        configure: require("raw!./assets/code/frameworks/e2e/nightwatch/configure"),
        test: require("raw!./assets/code/frameworks/e2e/nightwatch/test.js")
      }
    }
  }
};

render(
    <Spectacle>
      <Deck transition={["spin", "slide"]} transitionDuration={500}>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="seconary">
            Testing
          </Heading>
          <Heading size={1} fit caps>
            your React (and Redux)
          </Heading>
          <Heading size={1} fit caps textColor="tertiary">
            Applications
          </Heading>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary">
          <Heading size={3} textColor="secondary" textAlign="left">About me</Heading>
          <Layout>
            <Fill>
              <List margin={10} textColor="tertiary">
                <ListItem>Former Drupal developer</ListItem>
                <ListItem>Former PHP developer</ListItem>
                <ListItem>Former AngularJS developer</ListItem>
                <ListItem>Go developer @ source{"{d}"}</ListItem>
                <ListItem>ReactJS developer @ source{"{d}"}</ListItem>
              </List>
            </Fill>
            <Fill width={250}>
              <Image src={images.phil} height={250} />
              <Text textColor="tertiary">Phil Thomas</Text>
              <Text textColor="secondary">@filiptc</Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" textColor="primary" notes="
        <ol>
          <li>1. assertion libraries, testing frameworks, testing environment</li>
          <li>2. Unit vs e2e. Examples with jasmine, mocha, jest, ava, Examples with Casper.js, Nightwatch.js</li>
          <li>3. components, flux and state, redux</li>
          <li>4. example with Nightwatch.js</li>
        </ol>
      ">
          <Heading size={1} fit caps textColor="secondary">
            Table of contents
          </Heading>
          <Appear fid="1">
            <Heading textAlign="left" size={5} caps textColor="tertiary">
              1. Vocabulary
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading textAlign="left" size={5} caps textColor="tertiary">
              2. Testing Frameworks
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading textAlign="left" size={5} caps textColor="tertiary">
              3. React unit testing
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading textAlign="left" size={5} caps textColor="tertiary">
              4. React end-to-end testing
            </Heading>
          </Appear>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="Questions <br/>1) professional front-end devs<br/>2) has ever done tests<br/>3) does tests right now<br/>4) both e2e and unit" >
          <Heading textColor="secondary" caps fit>Vocabulary</Heading>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            Vocabulary: Assertion Libraries
          </Heading>
          <Layout>
            <Fill>
              <List margin={10}>
                <ListItem>
                  should.js
                  <CodePane textSize={20} lang="js" source={code.assertions.should}/>
                </ListItem>
                <ListItem>
                  expect.js
                  <CodePane textSize={20} lang="js" source={code.assertions.expect}/>
                </ListItem>
                <ListItem>
                  node.js/assert
                  <CodePane textSize={20} lang="js" source={code.assertions.assert}/>
                </ListItem>
                <ListItem>
                  must.js
                  <CodePane textSize={20} lang="js" source={code.assertions.must}/>
                </ListItem>
              </List>
            </Fill>
            <Fill>
              <List margin={10}>
                <ListItem>
                  chai
                  <CodePane textSize={20} lang="js" source={code.assertions.chai}/>
                </ListItem>
                <ListItem>
                  Sinon.JS (spies, stubs and mocks)
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="
        Libraries of test cases, interface to execute (typically command line)
      <ul>
        <li>QUnit: Basic, popular for jquery</li>
        <li>Jasmine: Built in assertions (expect style) and mocking</li>
        <li>Jest: FB stack. Built on top of jasmine.</li>
        <li>Mocha: No assertions nor mocks. Typically used with chai and sinon.</li>
        <li>AVA: Runs tests in parallel. Built-in power-assert library.</li>
      </ul>
      " textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            Vocabulary: Testing Frameworks
          </Heading>
          <Layout>
            <Fill>
              <Text textAlign="left" textColor="tertiary" bold caps>unit</Text>
              <List>
                <ListItem>QUnit</ListItem>
                <ListItem>Jasmine</ListItem>
                <ListItem>Jest</ListItem>
                <ListItem>Mocha</ListItem>
                <ListItem>AVA</ListItem>
              </List>
            </Fill>
            <Fill>
              <Text textAlign="left" textColor="tertiary" bold caps>End-to-end ("e2e")</Text>
              <List>
                <ListItem>Casper.js (phantom.js)</ListItem>
                <ListItem>Protractor (selenium webdriver)</ListItem>
                <ListItem>Nightwatch.js (selenium webdriver)</ListItem>
                <ListItem>Capybara (selenium webdriver)</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="executes your test " textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            Vocabulary: Unit test "runners"
          </Heading>
          <List>
            <ListItem>Karma (formerly "Testacular")</ListItem>
            <ListItem>Testem</ListItem>
            <ListItem>Wallaby (commercial)</ListItem>
            <ListItem>Chutzpah (Windows)</ListItem>
          </List>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary">
          <Heading textColor="secondary" caps fit>Testing Frameworks: Unit Tests</Heading>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            Unit Testing Frameworks: Jasmine
          </Heading>
          <Layout>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.unit.jasmine.install} />
              </List>
            </Fill>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.unit.jasmine.configure} />
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            Unit Testing Frameworks: Jasmine
          </Heading>
          <Layout>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="js" source={code.frameworks.unit.code.example} />
              </List>
            </Fill>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="js" source={code.frameworks.unit.jasmine.spec} />
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            Unit Testing Frameworks: Mocha
          </Heading>
          <Layout>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.unit.mocha.install} />
              </List>
            </Fill>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.unit.mocha.configure} />
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="two small differences:<br/>1) require<br/>2) to.equal(" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            Unit Testing Frameworks: Mocha
          </Heading>
          <Layout>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="js" source={code.frameworks.unit.code.example} />
              </List>
            </Fill>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="js" source={code.frameworks.unit.mocha.spec} />
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            Unit Testing Frameworks: Jest
          </Heading>
          <Layout>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.unit.jest.install} />
              </List>
            </Fill>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.unit.jest.configure} />
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="dontMock: mocked by default, can check if method of mocked import was called with args later" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            Unit Testing Frameworks: Jest
          </Heading>
          <Layout>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="js" source={code.frameworks.unit.code.example} />
              </List>
            </Fill>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="js" source={code.frameworks.unit.jest.spec} />
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            Unit Testing Frameworks: AVA
          </Heading>
          <Layout>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.unit.ava.install} />
              </List>
            </Fill>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.unit.ava.configure} />
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            Unit Testing Frameworks: AVA
          </Heading>
          <Layout>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="js" source={code.frameworks.unit.code.example} />
              </List>
            </Fill>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="js" source={code.frameworks.unit.ava.spec} />
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary">
          <Heading textColor="secondary" caps fit>Testing Frameworks: e2e Tests</Heading>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            e2e Testing Frameworks: Nightwatch.js
          </Heading>
          <Layout>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.e2e.nightwatch.install} />
              </List>
            </Fill>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.e2e.nightwatch.configure} />
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            e2e Testing Frameworks: Nightwatch.js
          </Heading>
          <CodePane textSize={20} lang="js" source={code.frameworks.e2e.nightwatch.test} />
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="against phantomJS only (there are some ways -> firefox)" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            e2e Testing Frameworks: Casper.js
          </Heading>
          <Layout>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.e2e.casper.install} />
              </List>
            </Fill>
            <Fill>
              <List margin={10}>
                <CodePane textSize={20} lang="bash" source={code.frameworks.e2e.casper.configure} />
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="Chrome extension 'Resurrectio' to record actions into tests" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            e2e Testing Frameworks: Casper.js
          </Heading>
          <CodePane textSize={20} lang="js" source={code.frameworks.e2e.casper.test} />
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary">
          <Heading textColor="secondary" caps fit>React unit testing</Heading>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            React unit testing: Mocha
          </Heading>
          <Heading size={7} fit textColor="tertiary">
            Testing Data-Flow: REDUX!
          </Heading>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            React unit testing: Mocha
          </Heading>
          <Heading size={7} fit textColor="tertiary">
            Testing Components
          </Heading>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading size={5} fit textColor="secondary">
            e2e testing: Mocha
          </Heading>
          <Heading size={7} fit textColor="tertiary">
            Nightwatch.js
          </Heading>
        </Slide>
        <Slide maxWidth={1600} maxHeight={900} bgColor="primary" notes="" textColor="tertiary">
          <Heading fit textColor="secondary">
            Happy testing!
          </Heading>
        </Slide>
      </Deck>
    </Spectacle>
    , document.getElementById("root"));

preloader([images.city, images.kat, images.markdown]);
