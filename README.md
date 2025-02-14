# Saga Excel Addin

# DEPRICATED: Moved into monorepo at commit hash 6764dd577561b59d439ac4079dc6e587c78e7cc1

This repository contains the WIP source code for the Saga Excel Addin. This addin will provide git-style version control to Excel users. Currently, it's pre-pre alpha; don't use it to manage things you care about!

## Running the addin

If you want to run the addin from source, and you have Excel installed, the following _should_ work:
```
git clone https://github.com/saga-vcs/saga-excel.git;
cd saga-excel;
npm install;
npm start;
```
If that doesn't work, you can follow more detailed instructions:
- on a Mac, look [here](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-an-office-add-in-on-ipad-and-mac)
- on Windows, look [here](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins)
- on Office 365 (the online Excel editor), look [here](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-office-add-ins-for-testing) 

### Tests

There are two sorts of tests within the add-in: tests that can run without Excel running, and tests that have to run in the context of Excel. 

The tests that don't need Excel to run can be run with `npm run test`. The tests that need Excel running can be run through the taskpane; click the "development" button at the bottom of the taskpane, and then click run tests. The rests will run and report in the console.


## Debugging the addin

If you're running the addin on Office 365 in a web browser, simply inspecting element on the addin will give you access to all the normal JavaScript debugging tools. 

If you're running the addin on a local copy of Excel on Mac, then you can find directions for debugging the addin [here](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/debug-office-add-ins-on-ipad-and-mac).

Instructions for debugging on Windows can be found [here](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/attach-debugger-from-task-pane) and [here](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/debug-add-ins-using-f12-developer-tools-on-windows-10).


## Additional resources

This repository contains the source code used by the [Yo Office generator](https://github.com/OfficeDev/generator-office), and as such is under the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). 
