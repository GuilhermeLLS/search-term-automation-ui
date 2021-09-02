import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchRequest from "./SearchRequest";

export default {
  title: "components/SearchRequest",
  component: SearchRequest,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof SearchRequest>;

const Template: ComponentStory<typeof SearchRequest> = () => <SearchRequest />;

export const view = Template.bind({});
