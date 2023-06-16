// @see: https://cz-git.qbenben.com/zh/guide
import { RuleConfigSeverity } from "@commitlint/types";

const Configuration = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    "type-empty": [2, "never"],
    "scope-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      ["feature", "fix", "doc", "style", "config", "test", "build", "chore"],
    ],
  },
  prompt: {
    messages: {
      max: "300",
    },
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: "|",
    },
    questions: {
      type: {
        description: "选择你要提交的类型:",
      },
      scope: {
        description: "本次commit所属的需求名或影响范围:",
      },
      subject: {
        description: "填写简短精炼的变更描述 :",
      },
    },
  },
};

module.exports = Configuration;
