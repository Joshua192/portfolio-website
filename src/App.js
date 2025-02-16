import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReactDOM from "react-dom/client";
import profilePic from "./Josh-Selfie.jpg";

const myEntireWebPage = (
  <body>
    <header>
      {/* <div class="container space-around sidenav "> */}
      <div class="sidenav mx-0 my-0 px-0 py-0 ">
        <div class="sidenav-content">
          <a
            href="mailto=joshuaaoyekunle@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-="round"
                stroke-linejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              ></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/joshuaaoyekunle"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>

          <a
            href="https://github.com/Joshua192"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </header>

    <div class="body">
      <div class="d-flex justify-content-center mx-100 ">
        <div class="flex:50%">
          <p class="flex flex-col text-start fs-1 fw-bold greeting">Hello,</p>
          <p>I&#39;m Josh.</p>
          <p>
            A Computer Science grad and part-time programmer who likes to solve
            interesting problems.
          </p>
          {/* <ul> */}{" "}
          {/*TODO: Add animated feature that iterates through each item  in this list */}
          <p>I&#39;m into:</p>
          {"["}Rock Climbing
          {/* TODO: Have this come up on hover (Solving Rubik&#39;s cubes quickly) */}
          , Speed-Cubing, Chess, Electric Guitar, Statistics and Machine
          Learning, Platforming Video Games
          {/* (Celeste, Cuphead, Hollow Knight) */}
          {"]"}
          {/* </ul> */}
        </div>
        <div class="flex:50% ">
          <img
            src={profilePic}
            alt="profile"
            width="270px"
            height="300px"
            class="px-auto mx-auto border border-dark"
          />
        </div>
      </div>

      <h2 class="text-decoration-underline">
        {"["}WORK{"] "}What am I Working On?
      </h2>
      <div class="content">
        <h3>
          <a
            href="https://www.kunlesgamesnight.com/"
            target="_blank"
            rel="noreferrer"
          >
            Kunle&#39;s Games Nights
          </a>
        </h3>
        <p>
          Working as a back end engineer for KGN, a ticket sales platform for
          night events in London.
        </p>
      </div>

      <div class="content">
        <h3 class="text-decoration-underline">This Website!</h3>
        <p>
          I work on improving its' appearance in my free time with React and
          Sass. I additionally use this site to experiment with any new web
          technologies and tricks I happen to learn.
        </p>
      </div>

      <div class="content">
        <h3> TypeScript Project</h3>
        <p>
          I&#39;m working on a project with a back-end written in TypeScript
          because I had several debugging issues with my last project due to
          type safety.
        </p>
        <p>I am utilising the Spotify API to create a Song Recommender.</p>
      </div>

      <h2 class="text-decoration-underline"> What I have worked on</h2>

      <div class="content">
        <h3>
          {" "}
          <a
            href="https://github.com/Joshua192/age-gender-predictor"
            target="_blank"
            rel="noreferrer"
          >
            Facial Recognition with Age and Gender Prediction
          </a>
        </h3>
        <p>
          This was a project I proposed for my Computer Science dissertation.
        </p>
        <p>
          It was primarily a Machine Learning and Transfer Learning project. I
          attached a trained model with to a WebApp written in JavaScript to
          handle Web RTC and file communication between my model and the
          user&#39;s computer. Back-end written with Flask.
        </p>
        <p>
          Trained a TensorFlow Convolutional Neural Network to recognise age
          demographics and classify gender in human faces.
        </p>
        <p>
          Gathered data from some of my friends and augmented it for training
          purposes.
        </p>
      </div>

      <div class="content">
        <h3>
          <a
            href="https://github.com/Joshua192/readmit-predict"
            target="_blank"
            rel="noreferrer"
          >
            Prediction of Diabetic Patient Re-admission
          </a>
        </h3>
        <ul>
          <li>
            <p>
              Collaborated with a team of five (5) to analyse patient data and
              predict likelihood of re-admission among diabetics.
            </p>
          </li>
          <li>
            <p>
              Led cleaning and analysis of over 100,000 rows of data for model
              development and evaluation.
            </p>
          </li>
          <li>
            <p>
              Built and evaluated several classification models, achieving 64%
              accuracy using logistic regression, random forest, and XGBoost.
            </p>
          </li>
          <li>
            <p>
              Delivered a comprehensive report on development and analysis of
              data to assert conclusions on correlated and causal factors in
              patient re-admission.
            </p>
          </li>
        </ul>
      </div>
      <div class="d-none">
        {/* UNHIDE ELEMENT AND DELETE WHEN DONE */}
        <h2 class="text-decoration-underline">
          {"["}SKILLS{"]"}
        </h2>
        <ul class="flex">
          <li>Python</li>
          <li>TypeScript</li>
          <li>
            JavaScript {"("}Node.js, Next.js, React{")"}
          </li>
          <li>C++</li>
          <li>TensorFlow</li>
          <li>Pandas</li>
          <li>Git</li>
          <li>Vercel</li>
          <li>MySQL</li>
          <li>OpenCV</li>
          <li>NumPy</li>
        </ul>
      </div>
      {/* <div class="content">
        <h3>Automatic Number Plate Recognition</h3>
        <p>
          Written in Python using the OpenCV library. Combined with a MySQL
          database for storing scanned plates.
        </p>
      </div> */}

      <h2 class="text-decoration-underline" target="_blank" rel="noreferrer">
        My Educational Background
      </h2>
      <div class="content">
        <i>
          {" "}
          Computer Science Bachelors, Upper Second Class (with 1st class
          dissertation){" "}
        </i>
        <p>
          Work Experience via Internships in front-end, database management and
          data analysis. Various side-projects and mini-games found on my{" "}
          <a
            href="https://github.com/Joshua192"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          . CV available{" "}
          <a
            href="mailto=joshuaaoyekunle@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            upon request
          </a>
        </p>
      </div>
    </div>
  </body>
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
function App() {
  return root.render(myEntireWebPage);
}

export default App;
