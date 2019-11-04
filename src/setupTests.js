import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

// Note: this filename must remain 'setupTest'
// because it's the default path for jest setup
// in create-react-app

configure({ adapter: new Adapter() });
