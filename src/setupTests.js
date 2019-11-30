import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-prop-type-error'

// Note: this filename must remain 'setupTest'
// because it's the default path for jest setup
// in create-react-app

Enzyme.configure({ adapter: new Adapter() });
