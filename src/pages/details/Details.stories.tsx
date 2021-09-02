import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Details from "./Details";

export default {
  title: "components/Details",
  component: Details,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = () => <Details />;

export const view = Template.bind({});
