const path = require("path");
const fs = require("fs");
const fileSave = require("file-save");
const uppercamelcase = require("uppercamelcase");
const inquirer = require("inquirer");
//组件放置在src/components下，组件名文件夹加一个index.vue文件
//组件的命名规范为大驼峰:MyTest

let data1, data2;
fs.readFile(
  path.resolve(__dirname, "./template/index.vue"),
  "utf8",
  async function (err, data) {
    data1 = data;
  }
);
fs.readFile(
  path.resolve(__dirname, "./template/index.js"),
  "utf8",
  async function (err, data) {
    data2 = data;
  }
);
const build = async () => {
  const res2 = await inquirer.prompt([
    {
      type: "input",
      message: "请输入组件名称:",
      name: "componentName",
    },
  ]);
  const ComponentName = res2.componentName
  // const ComponentName = uppercamelcase(res2.componentName);
  const componentPath = path.resolve(__dirname, "../packages", ComponentName);
  const files = [
    { fileName: "index.js", content: data2 },
    { fileName: "src/index.vue", content: data1 },
  ];
  files.forEach((file) => {
    fileSave(path.join(componentPath, file.fileName)).write(
      file.content,
      "utf8"
    );
  });
};
build();
