import style from "./Process.module.css";

export const Process = () => {
  // ..
  return (
    <section className={style.process}>
      <h2>My process</h2>
      <ul>
        <li>
          <h4>Planning and Requirements Gathering:</h4>
          <ul>
            <li>Understand the project requirements and objectives</li>
            <li>
              Collect information about the target audience and user
              expectations
            </li>
            <li>Define personas to better understand user needs</li>
            <li>Set clear goals and objectives for the development process</li>
            <li>
              Create the project folder and establish a moodboard for visual
              inspiration.
            </li>
          </ul>
        </li>

        <li>
          <h4>Wireframing and Low-Fidelity Prototyping:</h4>
          <ul>
            <li>
              Sketch out the layout and structure of the application using
              wireframing tools or on a whiteboard
            </li>
            <li>
              Map out the information and content that will be displayed on each
              screen
            </li>
            <li>
              Define the possible states and interactions within the application
            </li>
            <li>
              Create the first diagram to visualize the flow and navigation of
              the application
            </li>
          </ul>
        </li>

        <li>
          <h4>Design and User Interface Development:</h4>
          <ul>
            <li>
              Develop a moodboard to establish the visual direction and
              aesthetics of the application
            </li>
            <li>
              Refine the initial diagram to incorporate the design elements and
              user interactions.
            </li>
            <li>
              Write the copy and content that will be displayed within the
              application
            </li>
            <li>
              Conduct an internal test to review and validate the design
              decisions.
            </li>
          </ul>
        </li>

        <li>
          <h4>Assets Creation and Delivery:</h4>
          <ul>
            <li>
              Specify the technical requirements and deliverables for the
              development process
            </li>
            <li>
              Create high-fidelity prototypes that accurately represent the
              final design
            </li>
            <li>
              Prepare any necessary graphics, images, or multimedia assets
              required for the application.
            </li>
            <li>
              Document the final prototype and provide accompanying notes for
              developers
            </li>
          </ul>
        </li>

        <li>
          <h4>Final Testing and Integration</h4>
          <ul>
            <li>
              Utilize tools like Inspectlet, Hotjar, Mixpanel, Google Analytics,
              and Intercom to gather user feedback and track application
              performance
            </li>
            <li>
              Analyze user behavior and make any necessary adjustments or
              optimizations.
            </li>
            <li>
              Validate that the application meets the established goals and
              objectives
            </li>
            <li>
              Perform cross-browser and device testing to ensure compatibility
            </li>
          </ul>
        </li>

        <li>
          <h4>Post-Design Activities</h4>
          <ul>
            <li>Review and assess the achievement of project goals</li>
            <li>Establish a workspace for ongoing maintenance and updates</li>
            <li>
              Plan for future iterations and enhancements based on user feedback
              and market demands
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
