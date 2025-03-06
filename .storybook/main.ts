import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: [
        "../DS/**/*.stories.@(js|jsx|ts|tsx)",
        "../components/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/experimental-addon-test",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    staticDirs: ["../public"],
    core: {
        builder: "webpack5",
    },
};
export default config;
