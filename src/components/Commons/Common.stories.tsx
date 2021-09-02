import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as Commons from "./Commons";

const PageHeroStories = {
  title: "components/Commons/PageHero",
  component: Commons.PageHero,
} as ComponentMeta<typeof Commons.PageHero>;

const PageHeroTemplate: ComponentStory<typeof Commons.PageHero> = (args) => (
  <Commons.PageHero {...args} />
);

export const PageHeroWithTitle = PageHeroTemplate.bind({});
PageHeroWithTitle.args = { children: <p>Text!!</p> };

const SectionWrapperStories = {
  title: "components/Commons/SectionWrapper",
  component: Commons.SectionWrapper,
} as ComponentMeta<typeof Commons.SectionWrapper>;

const SectionWrapperTemplate: ComponentStory<typeof Commons.SectionWrapper> = (args) => (
  <Commons.SectionWrapper {...args} />
);

export const SectionWrapperWithChildren = SectionWrapperTemplate.bind({});
SectionWrapperWithChildren.args = { children: <p>Text!!</p> };

export default {
  ...PageHeroStories,
  ...SectionWrapperStories,
};
