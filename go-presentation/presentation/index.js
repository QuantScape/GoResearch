// Import React
import React from "react";
import CodeSlide from 'spectacle-code-slide';
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require('prismjs/components/prism-go');



const images = {
  city: require("../assets/city.jpg"),
  gopher: require("../assets/gophercolor.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  gopher2: require("../assets/appenginegophercolor.jpg"),
  react: require("../assets/React_logo_wordmark.png")
};

preloader(images);

const theme = createTheme({
  primary: "#4CAF50",
  secondary: "#795548"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading textSize="6.5em" textColor="black">
              GO
            </Heading>
            <Heading textSize="3.0em">
              An Introduction
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Matt &nbsp; William &nbsp; Chase</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black"
                 notes="Started as a promotional logo for small radio station, found its way to Bell Labs, and finally to the Go Langs dev team">
            <Image src={images.gopher.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Go Gopher
            </Heading>
            <Link href="https://gophercon.com/">GopherCon</Link>
            &nbsp;
            <Link href="http://reneefrench.blogspot.com/">Renee French</Link>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="white">
            <Heading textSize="4.0em">
              Agenda
            </Heading>
            <List>
              <ListItem>Code Example 1: Binary Search</ListItem>
              <ListItem>Go Paradigm</ListItem>
              <ListItem>Go Translation</ListItem>
              <ListItem>Go Typing</ListItem>
              <ListItem>Go Scope</ListItem>
              <ListItem>Parameter Passing</ListItem>
              <ListItem>Arrays, Slices, Structs</ListItem>
              <ListItem>Code Example 2: QuickSort</ListItem>
              <ListItem>Go Domains</ListItem>
              <ListItem>Code Example 3: Web Applications</ListItem>
            </List>
          </Slide>



          <Slide transition={["fade"]} bgColor="secondary" textColor="white">
            <Heading textSize="2.5em">
              Go is Multi-Paradigm
            </Heading>
            <List>
              <ListItem>Imperative</ListItem>
              <ListItem>Functional *</ListItem>
              <ListItem>Object Oriented **</ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary" textColor="white">
            <Heading textSize="2.5em">
              Functional *
            </Heading>
            <List>
              <ListItem>Higher-Order Functions</ListItem>
              <ListItem>First Class Functions</ListItem>
              <ListItem>Closures</ListItem>
              <ListItem>Multiple Return Values</ListItem>
              <ListItem>Recursion</ListItem>
            </List>
            <Appear><Text textSize="1.5em" textColor="white">
              No: Immutable Variables, Pure Functions
            </Text></Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary" textColor="white">
            <Heading textSize="2.5em">
              Object Oriented **
            </Heading>
            <List>
              <ListItem>Encapsulation</ListItem>
              <ListItem>Interfaces -> Polymorphism </ListItem>
              <ListItem>Type Member Functions</ListItem>
              <ListItem>Namespacing</ListItem>
            </List>
            <Appear><Text textSize="1.5em" textColor="white">
              No: Classes, Objects, Inheritance
            </Text></Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="white">
            <Heading textSize="2.5em">
              Go is Compiled
            </Heading>
            <List>
              <ListItem>Fast Compile Times Were a Design Goal</ListItem>
              <ListItem>Uses a Compile / Linking Model</ListItem>
              <ListItem>Language Grammar is Regular</ListItem>
            </List>
            <CodePane
                lang="go"
                source={require("raw!../assets/compile.example")}
                margin="20px auto"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="white">
            <Heading textSize="2.5em">
              Go is Statically & Strongly Typed
            </Heading>
            <List>
              <ListItem>Once defined, variables can not change type.</ListItem>
              <CodePane
                  lang="go"
                  source={require("raw!../assets/variable.example")}
                  margin="20px auto"
              />
              <ListItem>Type Inferences</ListItem>
              <CodePane
                  lang="go"
                  source={require("raw!../assets/inference.example")}
                  margin="20px auto"
              />
              <ListItem>No implicit conversions.</ListItem>
              <ListItem>Duck Typing with Interfaces / Structs</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" textColor="white">
            <BlockQuote>
              <Quote>If it looks like a duck and quacks like a duck, it’s a duck.</Quote>
            </BlockQuote>
          </Slide>


            <CodeSlide
                transition={['fade']}
                lang="go"
                code={require("raw!../assets/duck.go")}
                ranges={[
                  { loc: [0, 27], title: "Duck Typing" },
                  { loc: [2, 5], },
                  { loc: [5, 9] },
                  { loc: [9, 12], },
                  { loc: [12, 18] },
                  { loc: [18, 21],},
                  { loc: [21, 27] },
                  // ...
                ]}/>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading  textSize="2.5em" textColor="tertiary">
              Go is Statically Scoped
            </Heading>
            <Text textSize="1.5em" textColor="white">
              Uses block scoping with brackets
            </Text>
          </Slide>
          <CodeSlide
              transition={['fade']}
              lang="go"
              code={require("raw!../assets/scoping.example")}
              ranges={[
                { loc: [0, 12], title: "Scoping" },
                { loc: [0, 9], },
                { loc: [2, 6], },
                { loc: [4, 5], },
                { loc: [0, 9],  },
                { loc: [6, 7], },
                { loc: [7, 8], },
                { loc: [10, 13],  },
                { loc: [11, 12],  },
                // ...
              ]}/>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading  textSize="2.5em" textColor="tertiary">
              Go Passes by Value & Pointer
            </Heading>
          </Slide>
          <CodeSlide
              transition={['fade']}
              lang="go"
              code={require("raw!../assets/passing.example")}
              ranges={[
                { loc: [0, 12], title: "Pass By Value / Pointer" },
                { loc: [0, 6], },
                { loc: [1, 2], },
                { loc: [2, 3], },
                { loc: [6, 9], },
                { loc: [3, 4],  },
                { loc: [9, 12], },
                { loc: [4, 5], },
                // ...
              ]}/>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
            <Heading  textSize="2.5em" textColor="tertiary">
              Go & Structural Variables
            </Heading>
            <List>
              <ListItem>Array, Slices, and Struct Types</ListItem>
              <ListItem>Arrays are numbered sequence of elements of a single type.</ListItem>
              <ListItem>Slices are a contiguous segment of an underlying array.</ListItem>
              <ListItem>Structs are sequence of named elements, called fields, each of which has a name and a type.</ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Heading  textSize="2.5em" textColor="tertiary">
              Structs
            </Heading>
            <List>
              <ListItem>Structs allow for "modeling" an object.</ListItem>
              <ListItem>Provide a method for type functions.</ListItem>
            </List>
          </Slide>
          <CodeSlide
              transition={['fade']}
              lang="go"
              code={require("raw!../assets/struct.example")}
              ranges={[
                { loc: [0, 13], title: "Structs" },
                { loc: [0, 3], },
                { loc: [1, 2], },
                { loc: [4, 10], },
                { loc: [1, 2], },
                { loc: [2, 3], },
                { loc: [11, 14],  },
                { loc: [2, 4], },
                // ...
              ]}/>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading textSize={"1.5em"} lineHeight={1.5} textColor="primary">
              QuantScape/golang-research
            </Heading>
            <Image height={"25%"} width={"90%"} src={images.gopher2}/>
            <Image height={"25%"} width={"25%"} src={images.logo}/>
            <Image height={"25%"} width={"25%"} src={images.react}/>
          </Slide>
        </Deck>

      </Spectacle>
    );
  }
}
