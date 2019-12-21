import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-prop-type-error";
import { ipcRenderer } from "./react/tests/mocks/electron";

// Note: this filename must remain 'setupTest'
// because it's the default path for jest setup
// in create-react-app

window.ipcRenderer = ipcRenderer;

Enzyme.configure({ adapter: new Adapter() });
