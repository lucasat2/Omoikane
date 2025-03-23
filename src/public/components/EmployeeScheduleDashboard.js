import { SchedulingTimelineSelectionContainer } from "./SchedulingTimelineSelectionContainer.js";
import { SchedulingTimelineEmployeesCard } from "./SchedulingTimelineEmployeesCard.js";
import { SchedulingTimelineDateCard } from "./SchedulingTimelineDateCard.js";
import { SchedulingTimelineDiv } from "./SchedulingTimelineContainer.js";

// const test = [
//   {
//     name: "Gabriell",
//   },
//   {
//     name: "Bruno",
//   },
//   {
//     name: "Lucas",
//   },
//   {
//     name: "Fabiano",
//   },
// ];

function EmployeeScheduleDashboard() {
  if (document.querySelector(".initialSchedulingTimelineSection")) {
    const initialSchedulingTimelineSection = document.querySelector(
      ".initialSchedulingTimelineSection"
    );
    initialSchedulingTimelineSection.innerHTML = "";
    initialSchedulingTimelineSection.classList.remove(
      "initialSchedulingTimelineSection"
    );
  }

  const employeeSchedulingTimelineSection = document.createElement("div");
  employeeSchedulingTimelineSection.classList.add(
    "employeeSchedulingTimelineSection"
  );

  const employeeSchedulingTimelineHeader = document.createElement("div");
  employeeSchedulingTimelineHeader.classList.add(
    "employeeSchedulingTimelineHeader"
  );
  employeeSchedulingTimelineSection.appendChild(
    employeeSchedulingTimelineHeader
  );

  const selectElement = SchedulingTimelineSelectionContainer(
    "Selecione um funcionário",
    test
  );
  employeeSchedulingTimelineHeader.appendChild(selectElement);

  const employeeCard = SchedulingTimelineEmployeesCard(
    "this.value",
    "../assets/signUp/logo.jpeg"
  );
  employeeSchedulingTimelineHeader.appendChild(employeeCard);

  const employeeSchedulingTimelineHeaderManagementButton =
    document.createElement("button");
  employeeSchedulingTimelineHeaderManagementButton.innerText =
    "Gerenciar horário";
  employeeSchedulingTimelineHeaderManagementButton.classList.add(
    "employeeSchedulingTimelineHeaderManagementButton"
  );
  employeeSchedulingTimelineHeader.appendChild(
    employeeSchedulingTimelineHeaderManagementButton
  );

  const dateCard = SchedulingTimelineDateCard();
  employeeSchedulingTimelineHeader.appendChild(dateCard);

  const employeeScheduleTimelineContainer = document.createElement("div");
  employeeScheduleTimelineContainer.id = "employeeScheduleTimelineContainer";
  employeeSchedulingTimelineSection.appendChild(
    employeeScheduleTimelineContainer
  );

  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const currentMonth = today.getUTCMonth();
  const currentYear = today.getUTCFullYear();

  const employeeScheduleTimeline = SchedulingTimelineDiv(
    currentMonth,
    currentYear
  );
  employeeScheduleTimelineContainer.appendChild(employeeScheduleTimeline);

  return employeeSchedulingTimelineSection;
}

export { EmployeeScheduleDashboard };

// document.body.appendChild(EmployeeScheduleDashboard());