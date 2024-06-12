import jsxImage from "../assets/images/react-guide-jsx.png";
import componentImage from "../assets/images/react-guide-components.png";
import propsImage from "../assets/images/react-guide-props.png";
import stateImage from "../assets/images/react-guide-state.png";

export const concepts = [
  {
    image: jsxImage,
    title: "JSX",
    description:
      "JSX is a syntax extension that allows writing HTML-like code within JavaScript. React transforms JSX into React elements.",
  },
  {
    image: componentImage,
    title: "Component",
    description:
      "A React component is a reusable UI piece, defined as a function or a class. Components manage their own state and props.",
  },
  {
    image: propsImage,
    title: "Props",
    description:
      "Props are read-only attributes passed from parent to child components. They enable dynamic and reusable components.",
  },
  {
    image: stateImage,
    title: "State",
    description:
      "The useState hook adds state to functional components. It returns a state variable and a function to update it.",
  },
];

export const conceptCodes = [
  {
    title: "JSX",
    description:
      "JSX allows you to write HTML-like syntax in JavaScript to define the structure of the UI.",
    code: `
const Greeting = () => {
  return <h1>Hello, world!</h1>;
}

const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>This is an example of JSX in React.</p>
  </div>
);`,
  },
  {
    title: "Component",
    description:
      "A React component encapsulates reusable UI logic and structure, either as a function or a class.",
    code: `
const StudentCard = () => {
  return (
    <>
      <h2>Student Name</h2>
      <p>School</p>
      <p>Age</p>
    </>
  );
}

export default StudentCard;`,
  },
  {
    title: "Props",
    description:
      "Props pass data from parent to child components, enabling component customization and reuse.",
    code: `
const Students = () => {
  return (
    <div>
      <StudentCard name="Alex" age=20 />
      <StudentCard name="Bob" age=21 />
      <StudentCard name="Caitlin" age=19 />
    </div>
  );
}`,
  },
  {
    title: "State",
    description:
      "The useState hook introduces state management within functional components.",
    code: `
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}`,
  },
];

export const temp = {
  jsx: {
    title: "JSX",
    description:
      "JSX allows you to write HTML-like syntax in JavaScript to define the structure of the UI.",
    code: `
const Greeting = () => {
  return <h1>Hello, world!</h1>;
}

const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>This is an example of JSX in React.</p>
  </div>
);`,
  },
  component: {
    title: "Component",
    description:
      "A React component encapsulates reusable UI logic and structure, either as a function or a class.",
    code: `
const StudentCard = () => {
  return (
    <>
      <h2>Student Name</h2>
      <p>School</p>
      <p>Age</p>
    </>
  );
}

export default StudentCard;`,
  },
  props: {
    title: "Props",
    description:
      "Props pass data and event handlers from parent to child components, enabling component customization and reuse.",
    code: `
const Students = () => {
  return (
    <div>
      <StudentCard name="Alex" age=20 />
      <StudentCard name="Bob" age=21 />
      <StudentCard name="Caitlin" age=19 />
    </div>
  );
}`,
  },
  state: {
    title: "State",
    description:
      "The useState hook introduces state management within functional components.",
    code: `
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}`,
  },
};
