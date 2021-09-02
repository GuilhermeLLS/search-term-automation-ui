import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InspectionList from "./InspectionList";

export default {
  title: "components/InspectionList",
  component: InspectionList,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof InspectionList>;

const Template: ComponentStory<typeof InspectionList> = () => <InspectionList />;

export const view = Template.bind({});
