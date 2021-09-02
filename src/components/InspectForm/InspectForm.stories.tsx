import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InspectForm from "./InspectForm";

export default {
  title: "components/InspectForm",
  component: InspectForm,
} as ComponentMeta<typeof InspectForm>;

const Template: ComponentStory<typeof InspectForm> = () => <InspectForm />;

export const view = Template.bind({});
