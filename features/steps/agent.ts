import { Given } from "./fixtures";

Given("I open cmd and run process", () => {
  const { exec } = require("child_process");
  const os = require("os");

  const platform = os.platform();
  const command =
    platform === "darwin"
      ? 'osascript -e \'tell application "Terminal" to do script "cd /home"\''
      : platform === "win32"
      ? "cmd /c cd /home"
      : null;

  if (command) {
    exec(command, (error: { message: any }, stdout: any, stderr: any) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  } else {
    console.error("Hệ điều hành không được hỗ trợ.");
  }
});
